import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const CheckOut = () => {
    const servicesDetails = useLoaderData();
    const {user} = useContext(AuthContext);
    const {price, title, img, _id} = servicesDetails;
    const handleServiceBooking = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const order = {
            customerName :name,
            email,
            img,
            date,
            serviceId: _id,
            price,
        }
        console.log(order)
        fetch('https://car-doctors-server-eight.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
            
            <form onSubmit={handleServiceBooking} className="card-body">
              <h1 className="text-3xl font-bold text-center">Title: {title}</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Amount</span>
                </label>
                <input
                  type="text"
                  name='due'
                  defaultValue={'$' + price}
                  className="input input-bordered"
                  required
                />
              </div>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Booking Now"
                  className="btn btn-primary"
                />
              </div>
            </form>
        </div>
    );
};

export default CheckOut;