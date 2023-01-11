import React from 'react';
import { StarIcon , ShoppingCartIcon} from '@heroicons/react/24/solid'
const Product = ({ product ,setHandelar}) => {
   
     const { id, name, price, seller, ratings, img } = product
    return (
        <div className="card w-72 h-[500px] p-2 border-2 border-violet-500 bg-base-100 shadow-xl">
            <figure><img className='w-full h-[286px]'  src={img} alt="Shoes" /></figure>
            <div className="card-body py-0 pl-0">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <br />
                <p className='text-orange-400'>Manufacturer : {seller}</p>
                <div className='flex text-blue-500 '>
                    <p>Rating : {ratings}</p> 
                    <StarIcon className="h-6 w-6 "/>
                    <StarIcon className="h-6 w-6" />
                    <StarIcon className="h-6 w-6" />
                </div>
                <div className="card-actions ">
                    <button onClick={()=>{
                        setHandelar(product) 
                        }} className="btn btn-primary w-full ">Buy Now <ShoppingCartIcon className=" ml-2 h-6 w-6"></ShoppingCartIcon></button>
                       
                </div>
            </div>
        </div>

    );
};

export default Product;