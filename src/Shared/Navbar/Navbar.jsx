import { useContext, useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import img from "../../assets/logo.png"
import { FaUser } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";

import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener('mousedown', closeDropDown);

    return () => {
      document.removeEventListener('mousedown', closeDropDown);
    };
  }, []);


  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    logOut()
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      })
  }
  console.log(user);

  const navlinks = <>
    <li> <NavLink to='/' className="text-zinc-600 font-bold group flex  cursor-pointer flex-col">Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span></NavLink></li>

    <li><NavLink to='/allFood' className="text-zinc-600 font-bold group flex  cursor-pointer flex-col">All Foods<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span></NavLink></li>

    {/* <li><NavLink to='/about' className="text-zinc-600 font-bold group flex  cursor-pointer flex-col">About<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span></NavLink></li> */}

    {
      user ? (<div className='flex items-center justify-center gap-5'>
        <li>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink to='/myAddedFood' className="justify-between">
                  My Added Food Items
                  {/* <span className="badge">New</span> */}
                </NavLink>
              </li>
              <li><NavLink to='/addFood'>Add a Food Item</NavLink></li>
              <li><NavLink to='/myOrder'>My Ordered Food Items</NavLink></li>
            </ul>
          </div>
        </li>
        <div className="text-zinc-600 font-bold group flex  cursor-pointer flex-col"><FaUserMinus
          onClick={logoutHandler}
          className=" text-2xl hover:text-slate-800"
        ></FaUserMinus></div>
      </div>) : (

        <li><NavLink to='/logIn' className="text-zinc-600 font-bold group flex  cursor-pointer flex-col">
          {" "}
          <FaUser /><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span></NavLink></li>
      )
    }
  </>

  const navDropLink = <>
    <li><NavLink to='/' className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">Home</NavLink></li>
    <li><NavLink to='/allFood' className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">All Foods</NavLink></li>
    {
      user ? (<div className=''>
        <li>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink to='/myAddedFood' className="justify-between">
                  My Added Food Items
                  {/* <span className="badge">New</span> */}
                </NavLink>
              </li>
              <li><NavLink to='/addFood'>Add A Food Item</NavLink></li>
              <li><NavLink to='/myOrder'>My Ordered Food Items</NavLink></li>
            </ul>
          </div>
        </li>
        <div className="text-white font-bold group flex  cursor-pointer flex-col"><FaUserMinus
          onClick={logoutHandler}
          className=" text-2xl hover:text-slate-800"
        ></FaUserMinus></div>
      </div>) : (

        <li><NavLink to='/logIn' className="text-white font-bold group flex  cursor-pointer flex-col">
          {" "}
          <FaUser /><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span></NavLink></li>
      )
    }

  </>

  return (
    <nav className="flex items-center justify-between font-play px-4 py-2 text-[#2D4739]">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
        <div className='flex items-center justify-center text-[#2D4739] gap-3'>
          <img className='w-12' src={img} alt="" />
          <h2 className='font text-2xl font-bold'>Epicurea</h2>
        </div>

      </div>
      <ul className="hidden items-center justify-between gap-10 md:flex">
        {navlinks}
      </ul>
      <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
        {dropDownState && (
          <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
            {navDropLink}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;