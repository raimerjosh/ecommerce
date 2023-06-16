import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

export function ShopContextProvider(props) {

    // Initial cart state is set to 0 for each inventory item
    function getDefaultCart() {
        let cart = {};
        for (let i = 1; i <PRODUCTS.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    }

    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Increment plant item's cart count
    function addToCart(itemId) {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    
    // Decrement plant item's cart count
    function removeFromCart(itemId) {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValues = {
        cartItems, addToCart, removeFromCart
    }


    return (
        <ShopContext.Provider value={contextValues}>
            {props.children}
        </ShopContext.Provider>
    )

}