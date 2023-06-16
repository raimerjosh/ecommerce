import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./CartItem";
import { PRODUCTS } from "../../products";
import { useNavigate } from "react-router-dom";

export function Cart() {

    const navigate = useNavigate();

    const { cartItems, getTotalAmount } = useContext(ShopContext);

    const totalAmount = getTotalAmount(cartItems);

    return(

        <div className="cartContainer">
            <h1 className="cartTitle">Your Cart Items</h1>

            {totalAmount > 0 ? 

            (<div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product}/>
                    }
                })}
            </div>
            ) : <h3>Your Cart Is Empty</h3>}

            <div className="checkout">
                <p>Subtotal: ${totalAmount}</p>
                <button className="continueShopping" onClick={() => navigate("/")}> Continue Shopping </  button>
                <button id="checkout"> Checkout </button>
            </div>
        </div>
    )
}


