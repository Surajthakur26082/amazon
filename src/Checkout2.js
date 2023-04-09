import React from "react";
import { useStateValue } from "./StateProvider";
import './Checkout.css';



function Checkout() {
    const [{basket}] = useStateValue();

    return ( 
        <div className="checkout">
            <img className="checkout_image" src="https://m.media-amazon.com/images/I/61tjBFsRL+L._SX3000_.jpg" alt="" />

            {basket?.length === 0 ? (
                <div>
                    <h2>Your Basket is Empty</h2>
                </div>
            ) : (
                <div><h2>Your Shopping Basket</h2></div>
            )}
        </div>
    );

}

export default Checkout;