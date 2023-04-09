import { dividerClasses } from "@mui/material";
import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
    const[{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
        
        <CurrencyFormat 
            renderText={(value) => (
                
               <> <p> Subtotal ({basket.length} items): </p><br /><strong>{'Subtotal.value'}</strong></>
                

            )}
            
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayText={"text"}    
            thousandSeparator={true}
            prefix={"INR"}
            />
        <button className="checkout_button">Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;