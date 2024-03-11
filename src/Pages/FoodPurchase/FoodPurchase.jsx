import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const FoodPurchase = () => {
    const { id } = useParams();
    const [food, setFood] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
      fetch(`https://epicurea-server.vercel.app/fooddetails/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setFood(data);
        });
    }, [id]);

    const handlePurchase = (event) => {
        event.preventDefault();
        const form = event.target;

        const foodName = form.foodName.value;
        const quantity = parseInt(form.quantity.value);
        const price = parseInt(form.price.value);
        const buyerMail = form.buyerMail.value;
        const buyerName = form.buyerName.value;
        const buyingDate = form.buyingDate.value;
        
        if(food.quantity<quantity){
          Swal.fire({
            title: `${food.quantity} is available`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          return
        }

        const purchaseFood = {
          foodName,
          buyingDate,
          quantity,
          price,
          buyerMail, buyerName, id, org: food.quantity
        };
      console.log(purchaseFood);

        fetch("https://epicurea-server.vercel.app/foodPurchase", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(purchaseFood),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.success) {
              Swal.fire({
                title: "Food Purchase Successful",
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              });
              navigate("/myOrder");
            }
          });
    }

    return (
      <div className="">
        <div className=" font-play max-w-5xl mx-auto my-20 sm:mb-0">
          {/* Left side form */}
          <h2 className="text-2xl font-bold mb-6">Purchase a Food Item</h2>
          <form onSubmit={handlePurchase}>
            <div className="grid grid-cols-2 gap-9 place-items-start mb-4">
              <div className="w-full space-y-4">
                <input
                  type="text"
                  name="foodName" disabled
                  defaultValue={food.foodName}
                  className=" flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                />

                <input
                  type="text"
                  name="price" disabled
                  defaultValue={food.price}
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                />

                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  name="quantity"
                  defaultValue={food.quantity}
                  type="text"
                />
              </div>

              <div className="w-full space-y-4">
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  name="buyerMail" disabled
                  defaultValue={user?.email}
                  type="text"
                />

                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  name="buyerName"
                  defaultValue={user?.displayName}
                  type="text"
                />
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                  name="buyingDate"
                  type="date"
                />
              </div>
            </div>

            <input
              type="submit"
              value="Confirm"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-[#D7A747] "
            />
          </form>
        </div>
      </div>
    );
};

export default FoodPurchase;