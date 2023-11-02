import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingsCard from "./BookingsCard";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `https://car-doctors-server-eight.vercel.app/bookings?email=${user?.email}`
  useEffect(() => {
    axios.get(url, {withCredentials : true} )
    .then(res => {
      setBookings(res.data);
    })
    // fetch()
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //     console.log(data);
    //   });
  }, []);


  const handleDeleteProduct = (id) => {
    const progress = confirm('are you sure');
    if(progress){
      fetch(`https://car-doctors-server-eight.vercel.app/bookings/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
          
          const remaining = bookings.filter( booking => booking._id !== id)
          setBookings(remaining)
          
        }
      })
    }
  }

  const handleBookingConfirm = id => {
    fetch(`https://car-doctors-server-eight.vercel.app/bookings/${id}`, {
        method: 'PATCH',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
            const remaining = bookings.filter(booking => booking._id !== id)
            const updated = bookings.find(booking => booking._id === id)
            updated.status = 'confirm'
            const newBooking = [updated, ...remaining];
            setBookings(newBooking)
        }
    })
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <th>Delate</th>
                </label>
              </th>
              <th>Img</th>
              <th>Name</th>
              <th>Email</th>
              <th>date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingsCard key={booking._id} booking={booking} handleBookingConfirm={handleBookingConfirm} handleDeleteProduct={handleDeleteProduct}></BookingsCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
