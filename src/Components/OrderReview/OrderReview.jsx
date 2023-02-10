import { TrashIcon } from '@heroicons/react/24/solid';
import React from 'react';


const OrderReview = ({ product,itemRemover }) => {
    const { id, unitPrice, img, quantity } = product
    
    return (
        <div className='flex  border border-zinc-300 p-1'>
            <div className='w-20 '>
                <img className='rounded-lg ' src={img} alt="Product Image" />
            </div>
            <div className='flex items-center justify-between px-2 w-full'>
                <div>
                    {/* <h1>{name}</h1> */}
                    <p>Price : {unitPrice}</p>
                    <p>Quantity: {quantity}</p>
                 </div>
                <div className='border  bg-red-200 font-semibold p-2 rounded-full hover:bg-red-400'>
                <button onClick={()=>itemRemover(id)}> <TrashIcon className=' h-8 w-8 text-red-600 '></TrashIcon> </button>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;