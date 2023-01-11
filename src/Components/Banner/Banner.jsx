import React from 'react';
import img from '../../../public/images/43f81fff2e40d17082d7c0d36654108f.jpg'
const Banner = () => {
    return (
        <div className='grid grid-cols-4 items-center mt-[9vh]'>
            <div className='col-span-2 grid justify-end'>
                <div className="text-orange-300 font-semibold">
                    <p>Sale up to 70% off!</p>
                </div>
                <h1 className='  md:text-4xl font-bold'>New Collection For Fall ..</h1>
                <p className='md:font-semibold'>Lorem ipsum, dolor sit amet.</p>
                <div className=' mt-[4vh]'>
                    <button className='border-2 bg-orange-400 font-bold px-5 py-3 rounded-2xl shadow-2xl'>SHOP NOW</button>
                </div>
            </div>
            <div className='col-span-2 grid justify-center'>
                <img className='md:w-[350px] md:h-[400px] rounded-xl shadow-2xl' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;