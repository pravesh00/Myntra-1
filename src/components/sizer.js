import React from 'react'

const sizer = () => {
    return (
        <div class="container">
            <nav>
                <ul>
                    <li class="brand"><img src="myntra.png" alt="Myntra" /></li>
                    <li>MEN</li>
                    <li>WOMEN</li>
                    <li>KIDS</li>
                </ul>
            </nav>
            <div class="rhs">
                <input type="search" placeholder="Search for products, brands and more" class="rnav" />
                <i class="far fa-user fa-2x profile"></i>
                <i class="far fa-heart fa-2x profile"></i>
                <i class="fas fa-shopping-bag fa-2x profile"></i>
            </div>
        </div>
    )
}

export default sizer
