import React from 'react';
import myntra from "../myntra.png";
import {FaUser, FaShoppingBag} from "react-icons/fa";
import {BsSuitHeart} from "react-icons/bs";

const navbar = () => {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li className="brand"><img src={myntra} alt="Myntra" /></li>
                    <li>MEN</li>
                    <li>WOMEN</li>
                    <li>KIDS</li>
                </ul>
            </nav>
            <div className="rhs">
                <input type="search" placeholder="Search for products, brands and more" className="rnav" />
                <FaUser className="far fa-user fa-2x profile"/>
                <BsSuitHeart className="far fa-heart fa-2x profile" />
                <FaShoppingBag className="fas fa-shopping-bag fa-2x profile" />
            </div>
        </div>
    )
}

export default navbar
