import "../../App.css"
const image_hosting_token = import.meta.env.VITE_Image_Upload_token;
import { useContext, useState } from 'react';
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const AddFood = () => {
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
    const { user } = useContext(AuthContext);
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

     const handleAddFood = event =>{
        event.preventDefault();
        
        const form = event.target;
        
        const formData = new FormData();
        formData.append('image', image);

        fetch(image_hosting_url,{
            method:'POST',
            body:formData
        })
            .then(res => res.json())
            .then(imgResponse => {
            const foodName = form.foodName.value;
            const foodCategory = form.foodCategory.value;
            const quantity = parseInt(form.quantity.value);
            const price = parseFloat(form.price.value);
            const shortDescription = form.shortDescription.value;
            const foodOrigin = form.foodOrigin.value;

            const newFood = {
              foodName,
              foodCategory,
              quantity,
              price,
              foodImage:imgResponse.data.display_url,
              addByName: user?.displayName,
              addByEmail: user?.email,
              shortDescription,
              foodOrigin,
            };
            console.log(newFood);

            fetch("https://epicurea-server.vercel.app/food", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newFood),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                Swal.fire({
                  title: "Food Added Successful",
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
                navigate('/');
            });
        })
         
    }

    const handleImage = (event) => {
        setImage(event.target.files[0]);
    }

    return (
        <div className="">
            <div className=" font-play max-w-5xl mx-auto my-20 sm:mb-0">
                {/* Left side form */}
                <h2 className="text-2xl font-bold mb-6">Add a Food Item</h2>
                <form onSubmit={handleAddFood }>

                    <div className="grid grid-cols-2 gap-9 place-items-start mb-4">
                        <div className="w-full space-y-4">
                            <input type="text" name="foodName" placeholder="Food Name" className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" />

                            <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" name="image" placeholder="Food Image" type="file" onChange={handleImage} />

                            <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" name="foodCategory" placeholder="Food Category" type="text" />

                            <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" name="quantity" placeholder="Quantity" type="text" />

                            <input type="text" name="price" placeholder="Price" className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" />
                        </div>

                        <div className="w-full space-y-4">


                            <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" name="shortDescription" placeholder="Short description" type="text" />

                            <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" name="foodOrigin" placeholder="Food Origin" type="text" />
                        </div>
                    </div>  

                    <input type="submit" value="Confirm" className="btn  inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-[#D7A747] "/>
                    
                    
                </form>

            </div>
        </div>
    );
};

export default AddFood;