import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export function CartItem(props) {

    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext); 
    

    const { id, productName, price, productImage } = props.data;

    return (
        <div className="cartItem">
                    <img src={productImage}/>
                    <div className="cartDetails">
                        <p>{productName}</p>
                        <p>${price} ({cartItems[id]})</p>
                        <div className="countHandler">
                            <button onClick={() => removeFromCart(id)}> -  </     button>
                            <input 
                            value={cartItems[id]} 
                            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}>
                            </input>
                            <button onClick={() => addToCart(id)}> + </button>
                        </div>
                    </div>
                
        </div>
    )
}