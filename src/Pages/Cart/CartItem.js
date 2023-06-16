import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export function CartItem(props) {
    const { cartItems } = useContext(ShopContext); 
    

    const { id, productName, price, productImage } = props.data;

    return (
        <div className="cartItem">
            <img src={productImage}/>
                <div className="cartItemDescription">
                    <p>{productName}</p>
                    <p>${price} ({cartItems[id]})</p>
                </div>
        </div>
    )
}