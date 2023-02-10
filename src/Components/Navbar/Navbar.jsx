import React, { useState } from 'react';
import logo from "../../../public/images/Logo.svg"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div>
            <div className='bg-[#2A414F]  flex justify-between  items-center h-20 font-semibold text-white px-[6%] md:pl-28 md:pr-24'>
                <div>
                    <img className="logo w-32 min-w-[100px]" src={logo} alt="Website Logo" />
                </div>
                <nav className={`space-x-8 md:static absolute ${menu ? "right-[-200px] top-20 w-full grid grid-flow-row grid-rows-4 bg-stone-500" : "top-[-100px]"}`} >
                    <Link to="/home">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/about">About us</Link>
                </nav>
                <div onClick={() => setMenu(!menu)} className="h-6 w-6 block md:hidden" >
                    {
                        menu ? <XMarkIcon /> : <Bars3Icon />
                    }
                </div>
            </div>
         
        </div>
    );
};

export default Navbar;