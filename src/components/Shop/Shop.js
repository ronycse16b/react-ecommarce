import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { addToDb, getStroredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';


const Shop = () => {
    const [products, setProduct] = useState([]);

    // order summyry set 
    const [cart, setCart] = useState([]);
    // send product for button    
    const handlerAddtoCart = (selectedProduct) => {
     
       let newCart =[];
        const exists = cart.find(product => product.id === selectedProduct);

     if(!exists){
        selectedProduct.quantity =1;
         newCart =[...cart,selectedProduct];   
     }else
     {
         const rest = cart.filter(product=> product.id !== selectedProduct);   
         exists.quantity = exists.quantity + 1;
         newCart = [...rest,exists];
     }
     
        setCart(newCart);
        addToDb(selectedProduct.id);
    }



    useEffect(() => {


        fetch(`products.json`)
            .then(res => res.json())
            .then(data => setProduct(data));



    }, [])

    // local storage data retrive 
    useEffect(() => {
        const storedCart = getStroredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product=> product.id === id)
            if(addedProduct){
                const quantity =storedCart[id];
                addedProduct.quantity =quantity;
                savedCart.push(addedProduct);
                
            }
    
        }
        setCart(savedCart)
       
    }, [products])


    return (
        <div>
            <div className="flex ... ">

                <div className="w-4/5 ...  grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 sm:pl-0 gap-10 lg:pl-52 pt-28   ">


                    {
                        products.map(product => <Product key={product.id} product={product} handlerAddtoCart={handlerAddtoCart} ></Product>)
                    }

                </div>
                <div className="w-1/5 ... lg:pt-28 bg-orange-200">

                    <Cart cart={cart}></Cart>


                </div>
            </div>
        </div>
    );
};

export default Shop;