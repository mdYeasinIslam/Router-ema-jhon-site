// const fakeDb = (id) => {
//     let cart = {};
//     const getCart = localStorage.getItem("Cart");
//     if (getCart) {
//         cart = JSON.parse(getCart)
//     } 
//     const quantity = cart[id];
//     if (quantity) {
//         cart[id] = quantity + 1
//     }
//     else {
//         cart[id] = 1;
//     }
//     localStorage.setItem("Cart", JSON.stringify(cart))
// }
// a = ["ali", "abdullla"]
// a.findIndex(item => item === "abdullah")
// a.indexOf("kali")'

import { json } from "react-router-dom";

const addToCart = (id, price, shipping, img, name) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    const productIndex = cart.findIndex(product => product.id == id)
    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    }
    else {
        const newCart = { id, quantity: 1, unitPrice: price, shipping: shipping, img };
        cart.push(newCart)
    }
    localStorage.setItem("cart", JSON.stringify(cart))
}

const removeCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
}
const removeItem = (id) => {
    const getLocalData = JSON.parse(localStorage.getItem("cart"));
    // for (let product of getLocalData) {
    //    if(product.id ==id){}
    // }
    const filter= getLocalData.filter(product=>product.id !==id );
  localStorage.setItem('cart',JSON.stringify(filter))
}
export { addToCart, removeCart, removeItem }

