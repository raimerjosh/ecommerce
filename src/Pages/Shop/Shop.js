import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";

export function Shop() {
    return(
        <div className="shopContainer">
            <h1 className="shopTitle">The Plant Shop</h1>
            <div className="products">
                {PRODUCTS.map((product) => 
                    <Product data={product}/>
                )}
            </div>
        </div>

    )
}