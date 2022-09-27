import React from 'react';
import './cart.css';

const Cart = ({cart}) => {
  
    let total =0;
    let shipping = 0;
    let quantity = 0;
    for( const product of cart){
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping +product.shipping * product.quantity;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal =total +shipping+parseFloat(tax);

    return (
        <div className='cart'>
            <u> <h1 className='font-bold text-2xl'>Order Summary:</h1> </u>
            <div className='text-start p-10 font-bold'>
                   <p>Selected Iteams :{quantity}</p>
                   <p>Total price:${total}</p>
                   <p>Total shippin:${shipping}</p>
                   <p>Tax:${tax}</p>
                   <p>Grand Total:${grandTotal.toFixed(2)}</p>
                   </div>
                  
        </div>
        
   
   
   
        );
};

export default Cart;