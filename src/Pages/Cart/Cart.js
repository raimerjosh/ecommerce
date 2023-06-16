import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./CartItem";
import { PRODUCTS } from "../../products";

export function Cart() {

    const { cartItems } = useContext(ShopContext); 

    return(
        <div className="cartContainer">
            <h1 className="cartTitle">Your Cart Items</h1>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product}/>
                    }
                })}
            </div>
        </div>
    )
}


