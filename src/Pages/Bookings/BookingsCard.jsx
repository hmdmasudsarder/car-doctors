import React from "react";
import Swal from "sweetalert2";

const BookingsCard = ({ booking, handleDeleteProduct, handleBookingConfirm}) => {
  const { img, price, email, date, customerName, _id, status } = booking;
  
  return (
            <tr>
              <th>
                <button onClick={() => handleDeleteProduct(_id)} className="btn btn-circle btn-outline btn-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </th>
              <td>
                
                  <div className="avatar">
                    <div className="rounded w-24 h-20">
                      <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
              </td>
              <td>{customerName}</td>
              <td>{email}</td>
              <td>{date}</td>
              <td className="text-xl">${price}</td>
              <th>
                { status ? <span>Confirm</span> :
                  <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
              </th>
            </tr>
          
    
  );
};

export default BookingsCard;
