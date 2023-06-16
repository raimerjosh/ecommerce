import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Flower } from "phosphor-react";

export function NavBar() {
    return (
        <div className="navbar">
                <Link to="/" className="shop"><Flower size={32}/>Shop Plants</Link>
                <Link to="/cart" className="cartIcon"><ShoppingCart/></Link>
        </div>
        
    )
}


