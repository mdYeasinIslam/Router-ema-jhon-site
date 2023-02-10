
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { removeCart } from '../../utilities/fakeDb';
import OrderCart from '../OrderCart/OrderCart';
const Products = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([])
    const [refetch, setRefetch] = useState(new Date().getDate())

    /*Fetch data by using Async() function
 
    const dataLoad = async()=>{
        const res = await fetch("products.json")
        const data=  await res.json()
     setproducts(data)
    } 
    */ 
    useEffect(() => {
        fetch("products.json").then(res => res.json()).then(data => setproducts(data))
        // dataLoad()
    }, [])
    const setHandelar = () => {
        setRefetch(new Date().getTime())
    }
    useEffect(() => {

        setCart(JSON.parse(localStorage.getItem("cart")) || [])
    }, [refetch])
    const clearCart = () => {
        removeCart()
        setHandelar()
    }
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[5%]'>
            <div className='grid md:grid-cols-2 md:col-span-2 lg:grid-cols-3 lg:col-span-3 gap-10 m-auto'>
                {
                    products.map(product => <Product key={product.id} product={product} setHandelar={setHandelar} />)
                }
            </div>
            <div className='border-2 bg-amber-400 h-72  rounded-xl sticky top-[50px] mr-4'>

                <OrderCart cart={cart} clearCart={clearCart} />
            </div>
        </div>
    );

};

export default Products ;