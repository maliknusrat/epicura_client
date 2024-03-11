// import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    console.log(email);
    const [orders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`https://epicurea-server.vercel.app/myOrder/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyOrders(data);
            });
    }, [])
    const handleButton = (id) => {
        fetch(`https://epicurea-server.vercel.app/removeItem/${id}`, {
            method:"DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Remove Item Successfully",
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
            }
        })
    }
    return (
      <div className="max-w-7xl mx-auto py-20 grid grid-cols-1 md:grid-cols-3">
        {orders.map((food) => (
          <div key={food._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  {food.foodName}
                  <div className="badge badge-secondary">{food.quantity*food.price} $</div>
                </h2>
                <p>Quantity: {food.quantity}</p>
                <p>{food.buyerMail}</p>
                <p>{food.buyerName}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={()=>handleButton(food._id)}
                    className="btn btn-outline btn-error"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default MyOrder;