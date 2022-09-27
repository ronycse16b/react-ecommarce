import React from 'react';

const Product = (props) => {
    const {id,name,img,price,seller,category} = props.product;
    const {handlerAddtoCart} = props;
    return (
        <div>
            <div className="card w-96 h-full bg-base-100 shadow-xl border-solid border-2 border-zinc-300 ">
                <figure className="px-2 pt-2">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <strong>Brand:{seller}</strong>
                    <strong>Category:{category}</strong>

                    <h3 className='text-orange-400 font-bold text-xl'>Price:{price}</h3>
                   
                    <div className="">
                        <button className="btn btn-primary mx-5">Buy Now</button>
                        <button onClick={()=>handlerAddtoCart(props.product)} className="btn btn-black">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;