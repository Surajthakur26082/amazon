import React from "react";
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";


function CheckoutProduct({id, title, price, image, rating}) {

    const [{basket}, dispatch] = useStateValue();
    
    const removeFromBasket = () => {

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    
    }



    return(
        <div className="checkout_product">
            <img className="checkout_product_image" src={image} alt="IMAGE" />

            <div className="checkout_product_info">
                    <p className="checkout_product_name">{title}</p>
                    <p className="checkout_product_price">
                        <small>&#x20B9;</small>
                        <strong>{price}</strong>
                    </p>

                    <div className="checkout_product_rating">
                        {
                            Array(rating)
                            .fill()
                            .map((_) => <p>&#9733;</p>) 
                        }
                    </div>

                    <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>

    );
}

export default CheckoutProduct;