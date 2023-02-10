import React from 'react';
import { TrashIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Modal from '../Modal/Modal';

 
const OrderCart = ({ cart, clearCart }) => {

    const itemCalculate= cart.reduce((sum,item)=>sum+item.quantity,0)
    const findPrice = cart.reduce((sum, price) => sum + price.unitPrice * price.quantity, 0)
    const shippingCalculate= cart.reduce((sum,price)=>sum + price.shipping*price.quantity,0)
    const taxCalculate= cart.reduce((sum,price)=>sum + (price.unitPrice*0.1)*price.quantity,0)
    const grandTotal=findPrice+shippingCalculate+taxCalculate
    
   
    return (  
        <div>
            <h1 className='text-center text-2xl'>Order-summary</h1>
            <div>
                <p>Selected items : {itemCalculate} </p>
                <p>Total Price : ${findPrice} </p>
                <p>Tax : ${taxCalculate} </p>
                <p>Total Shipping Charge : ${parseInt(shippingCalculate)} </p>
                <h3 className='text-2xl font-semibold'>Grand total : ${grandTotal} </h3>
            </div>
            <div className='card-action grid text-center gap-y-2'>
                <button onClick={()=>clearCart()} className='btn hover:bg-red-500'>Clear Cart  <TrashIcon className='ml-3 h-6 w-6 text-white'></TrashIcon></button>

                <label htmlFor="my-modal-6" className="btn">open modal</label>
            </div>
            
            <div>
                {
                    cart.map(data=><Modal key={data.id} data={data}/>)
                }
            </div>
        </div>
    );
};

export default OrderCart;