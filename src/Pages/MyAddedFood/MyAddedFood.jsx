import { useContext, useEffect, useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";
import "../../App.css"
import { useNavigate, useParams } from "react-router-dom";
import Modal from 'react-modal';
import Swal from "sweetalert2";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const MyAddedFood = () => {
    const [foods, setFoods] = useState([])
    const { user } = useContext(AuthContext);
    const [food, setFood] = useState([]);
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();


    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = (id) => {
        fetch(`https://epicurea-server.vercel.app/fooddetails/${id}`)
            .then(res => res.json())
            .then(data => setFoods(data));
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    useEffect(() => {
        fetch(`https://epicurea-server.vercel.app/addedFoods/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setFood(data)
                console.log(data);
            }

            )
    }, []);

    const handleUpdateFood = event =>{
        event.preventDefault();
        
        const form = event.target;
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
          addByName: user?.displayName,
          addByEmail: user?.email,
          shortDescription,
          foodOrigin,
        };
        console.log(foods._id);

        fetch(`https://epicurea-server.vercel.app/food/${foods._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newFood),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Food Updated Successful",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
            navigate('/');
        });

         
    }


    return (
        <div className="font-play flex items-center justify-center">
            <div className="bg-gray-250 shadow-md max-w-[800px] bg-white md:w-[700px] p-8 my-20 space-y-6">
                {/* top part  */}
                <div className="flex justify-between items-center">
                    <h4 className="text-xl font-medium text-slate-800 uppercase">My Added Food</h4>
                    <p className="text-sm font-medium text-gray-400 uppercase">edit cart</p>
                </div>
                <hr />
                {/*  Cart  map */}  
                {food.map((item, idx) => (
                    <div key={item?._id} className="flex justify-between items-center border-b pb-6">
                        <div className="flex flex-wrap items-center gap-4">
                            <img className="w-[75px] h-[75px] rounded-lg bg-slate-500" src={item.foodImage} alt="card navigate ui" />
                            <div>
                                <h5 className="text-lg font-medium">{item?.foodName}</h5>
                                <p className="text-sm text-gray-400">{item?.foodCategory}</p>
                            </div>
                        </div>
                        {/* item increase decrees  */}
                        <div className="flex flex-wrap items-center gap-4 md:gap-10">
                            <div className="space-x-3">
                                <div onClick={()=>openModal(item._id)} className="btn py-2 px-4 border hover:bg-[#3EBFA4] hover:text-white hover:border-[#3EBFA4] duration-300 ease-in-out rounded-sm"><MdOutlineModeEdit /></div>
                                <div>
                                    <Modal
                                        isOpen={modalIsOpen}
                                        onAfterOpen={afterOpenModal}
                                        onRequestClose={closeModal}
                                        style={customStyles}
                                        contentLabel="Example Modal"
                                    >
                                        <form onSubmit={handleUpdateFood} className="space-y-4 w-[600px]">
                                            <div className="grid grid-cols-2 gap-7 ">
                                                <div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Food Name</label>
                                                        <input className="flex h-10 w-full rounded-md border px-3" name="foodName" defaultValue={foods.foodName} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Quantity</label>
                                                        <input name="quantity" className="flex h-10 w-full rounded-md border px-3" defaultValue={foods.quantity} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Price</label>
                                                        <input name="price" className="flex h-10 w-full rounded-md border px-3" defaultValue={foods.price} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Food Category</label>
                                                        <input name="foodCategory" className="flex h-10 w-full rounded-md border px-3" defaultValue={foods.foodCategory} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Name</label>
                                                        <input name="faddByName" className="flex h-10 w-full rounded-md border px-3" defaultValue={foods.addByName} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Email</label>
                                                        <input name="addByEmail" className="flex h-10 w-full rounded-md border px-3" defaultValue={foods.addByEmail} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Short Description</label>
                                                        <textarea name="shortDescription" className="flex h-20 w-full rounded-md border px-3" 
                                                        defaultValue={foods.shortDescription} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Origin</label>
                                                        <input name="foodOrigin" className="flex h-10 w-full rounded-md border px-3" defaultValue={foods.foodOrigin} />
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="submit" value="Confirm" className="btn  inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-[#D7A747] " />
                                        </form>
                                        <div className='mt-10 flex justify-end'>
                                            <button className='btn btn-neutral' onClick={closeModal}>close</button>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                            <h6 className="text-lg w-[100px] font-medium text-slate-800">$ {item?.price}</h6>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default MyAddedFood;