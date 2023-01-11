const fakeDb = (id) => {
    let cart = {};
    const getCart=localStorage.getItem("Cart");
    if(getCart){
        cart=JSON.parse(getCart)
    }

    const quantity = cart[id];
    if (quantity) {
        cart[id] = quantity + 1
    }
    else {
        cart[id] = 1;
    }
    localStorage.setItem("Cart", JSON.stringify(cart))
}
const removeCart=(id)=>{
    const getCart=localStorage.getItem("Cart");
    if(getCart){
        const parseCart=JSON.parse(getCart);
        if(id in parseCart){
            delete parseCart[id];
            localStorage.setItem("Cart",JSON.stringify(parseCart))
        }
    }
}
export { fakeDb ,removeCart}