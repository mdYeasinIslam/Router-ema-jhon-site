import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeCart, removeItem } from '../../utilities/fakeDb';
import OrderCart from '../OrderCart/OrderCart';
import OrderReview from './OrderReview';

const Order = () => {
    const { getLocalData } = useLoaderData()
    const [cart,setCart]=useState(getLocalData);
    // console.log(cart)
    const itemRemover =(id)=>{
        const filter=cart.filter(product=>product.id !== id);
        setCart(filter)
        removeItem(id)
        // console.log(filter)
    } 
    const clearCart=()=>{
        removeCart()
    }

    return (
        <div className='grid grid-cols-3'>
            <div className={` grid col-span-2 mt-10 items-center ${(cart.length <= 5)? "grid-cols-1 ":"grid-cols-2 mx-auto gap-x-5 gap-y-3" }`} >
                {
                    cart.map(product => <OrderReview key={product.id}  product={product}  itemRemover={itemRemover}/>)
                }
            </div>
            <div className='border-2 bg-amber-400 h-72 mt-10 rounded-xl sticky top-[50px] mr-4'>
               <OrderCart cart={cart} clearCart={clearCart}></OrderCart>
            </div>
        </div>
    );
};

export default Order;