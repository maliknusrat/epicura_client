import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
import "../../App.css"

const FoodDetails = () => {
    const [food, setFood] = useState([])
    const { id } = useParams();
    console.log(id);
    

    // const { user } = useContext(AuthContext);
    // const navigate = useNavigate();

    useEffect(()=>{
          fetch(`https://epicurea-server.vercel.app/fooddetails/${id}`)
          .then(res=>res.json())
          .then(data=>{
            setFood(data)
            console.log(data);
          })
    },[id])

    return (
        <div>
            <div className="px-4 font-play glass py-8 max-w-[600px] shadow-lg font-sans  space-y-6 my-20 mx-auto bg-[#bcb382]">
                <div className="flex items-center justify-center">

                <div className="flex justify-center w-full h-48 lg:h-[280px] relative">
                    <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
                        
                        <button className="bg-[#098141] hover:bg-[#3ec97f]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">$ {food.price}</button>
                    </div>
                    <img className=" size-72 bg-black/40 w-full h-full" src={food.foodImage} alt="card navigate ui" />
                </div>

                <div className="text-right w-[85%] mx-auto font-semibold space-y-2">
                    <h6 className="text-sm md:text-base lg:text-lg">{food.shortDescription}</h6>
                    <p className="text-[#2d4739] text-xs md:text-sm font-semibold">{food.foodName}</p>
                    <p className="text-[#2d4739] text-xs md:text-sm font-semibold">Origin: {food.foodOrigin}</p>
                    <p className="text-[#2d4739] text-xs md:text-sm font-semibold">Category: {food.foodCategory}</p>
                    <p className="text-[#2d4739] text-xs md:text-sm font-semibold">Made By:{food.addByName}</p>
                </div>

                </div>
                
                <div className="flex items-start justify-start flex-wrap gap-6 text-sm md:text-base">
                    <Link to={{ pathname: `/foodPurchase/${food._id}` }} className="px-4 py-2  bg-[#098141] hover:bg-[#3ec97f] duration-300 hover:scale-105 text-white font-semibold font-sans">Order now</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;