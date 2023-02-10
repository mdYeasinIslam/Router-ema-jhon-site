
export const loadData = async () => {
    //get data from fake API; 
    const getproduct = await fetch('products.json');
    const products = await getproduct.json();
    
    //get product from local storage
    const getLocalData = JSON.parse(localStorage.getItem("cart"))
    

    const shopCart = [];
    for(let data of getLocalData){
        const findId = products.find(product => product.id === data.id)
        const quantity=data.quantity
        findId.quantity =quantity
    //    console.log(findId.quantity)
        shopCart.push(findId);

    }
    // console.log(getLocalData);
    return {products,shopCart,getLocalData}
}