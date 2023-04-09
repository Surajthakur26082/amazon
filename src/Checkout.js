import React from "react";
import './Checkout.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";


function Checkout() {
    const[{ basket }] = useStateValue();

    return ( 
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_image" src="https://m.media-amazon.com/images/I/61tjBFsRL+L._SX3000_.jpg" alt="" />


            {basket?.length === 0 ? (
                <div>
                    <h2 className="checkout_title">Your Basket is Empty</h2>
                    <p>You have no items in your basket. To buy one or more items click on "Add to cart" button below item</p>
                </div>
            ):(
                <div>
                    <h2 className="checkout_products">Your Shopping Cart</h2>
                    { basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title= {item.title}
                            price= {item.price}
                            rating= {item.rating}
                            image={item.image}
                        />
                    ))}
                </div>
            )}
            
             
            </div>
            {basket.length > 0 && (
                <div className="checkout_left">
                    <Subtotal />
                </div>
            )}
        </div>
    );

}

export default Checkout;