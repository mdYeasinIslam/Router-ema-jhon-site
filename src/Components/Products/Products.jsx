
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import {TrashIcon,ArrowRightIcon} from '@heroicons/react/24/solid'
const Products = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([])
    const [totalprice,setTotalPrice] = useState(0)

    // const dataLoad = async()=>{
    //     const res = await fetch("products.json")
    //     const data=  await res.json()
    //  setproducts(data)
    // }
console.log(cart)
    useEffect(() => {
        fetch("products.json").then(res => res.json()).then(data => setproducts(data))
        // dataLoad()
    }, [])
    const setHandelar = (product) => {
        const { price,stock } = product
        const newProduct = [...cart,product]
        console.log(stock,"available")
        setCart(newProduct)
        setTotalPrice(totalprice + price)
    }
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[5%]'>
            <div className='grid md:grid-cols-2 md:col-span-2 lg:grid-cols-3 lg:col-span-3 gap-10 m-auto'>
                {
                    products.map(product => <Product key={product.id} product={product} setHandelar={setHandelar}></Product>)
                }
            </div>
            <div className='border-2 bg-amber-400 h-72  rounded-xl sticky top-[50px] mr-4'>
                <h1 className='text-center text-2xl'>Order-summary</h1>
                <div>
                    <p>Selected items : {cart.length}</p>
                    <p>Total Price : ${totalprice} </p>
                    <p>Total Shipping Charge : $</p>
                    <p>Tax : $</p>
                    <h3 className='text-2xl font-semibold'>Grand total</h3>
                </div>
                <div className='card-action grid text-center gap-y-2'>
                    <button className='btn hover:bg-red-500'>Clear Cart  <TrashIcon className='ml-3 h-6 w-6 text-white'></TrashIcon></button>
                    <button className='btn btn-primary'> Review Order <ArrowRightIcon  className='ml-3 h-6 w-6 text-white'></ArrowRightIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Products;