import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export function Product(props) {
    const { id, productName, price, productImage } = props.data;

    const { addToCart, cartItems } = useContext(ShopContext); 

    const cartItemAmount = cartItems[id];

    return (
        <div className="product">
            <img src={productImage}/>
            <div className="details">
                <div className="description">
                    <p>{productName}</p>
                    <p>${price}</p>
                </div>
                <button className="button" onClick={() => addToCart(id)}>
                    Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                </button>
            </div>
            
            
        </div>
    )
}


