import React, { Component, useEffect, useState } from 'react';
import productpic from "../Product1.jpg";
import axios from 'axios'




const getProducts = () => {

    axios("https://myntra-server.herokuapp.com/products")
        .then(response => {
            console.log(response.json());
            return response.data
        }).catch(error => {
            console.log(error)
        })

}




function createProduct(clothes) {

    return (
        <Filternext
            id={clothes.id}
            brand={clothes.brand}
            size={clothes.size}
            gender={clothes.gender}
            category={clothes.category}
        />
    );
}

function Filternext(props) {
    return (
        <div >
            <div className="pdt">
                <img src={productpic} alt="pdt1" />
                <div id="pdtTitle">{props.brand}</div>
            </div>
        </div>

    )
}

const Home = () => {
    const [product, setClothes] = useState([])

    useEffect(() => {
        axios("https://myntra-server.herokuapp.com/products")
            .then(response => {
                setClothes(response.data)
            }).catch(error => {
                console.log(error)
            })
    })

    return (
        <div className="Home">
            <div className="filterDrop">
                <h4>SAVED FILTERS</h4><br/>
                <div><input type="radio" id="f1" name="f"/>
                    <label for="f1">Filter 1</label>
                </div>
                <div><input type="radio" id="f2" name="f" />
                    <label for="f2">Filter 2</label>
                </div>
                <div><input type="radio" id="f3" name="f" />
                    <label for="f3">Filter 3</label>
                </div>
                <div><input type="radio" id="f4" name="f" />
                    <label for="f4">Last Applied Filter</label>
                </div>
                <h4>BRANDS</h4>
                <ul>
                    <li><input type="checkbox" id="b1" name="b1" />
                        <label for="b1">Nike</label>
                    </li>
                    <li><input type="checkbox" id="b2" name="b2" />
                        <label for="b2">Puma</label>
                    </li>
                    <li><input type="checkbox" id="b3" name="b3" />
                        <label for="b3">Adidas</label>
                    </li>
                    <li><input type="checkbox" id="b4" name="b4" />
                        <label for="b4">Reebok</label>
                    </li>
                </ul>
                <h4>COLORS</h4>
                <ul>
                    <li><input type="checkbox" id="c1" name="c1" />
                        <label for="c1">Black</label>
                    </li>
                    <li><input type="checkbox" id="c2" name="c2" />
                        <label for="c2">Gray</label>
                    </li>
                    <li><input type="checkbox" id="c3" name="c3" />
                        <label for="c3">Dark Blue</label>
                    </li>
                    <li><input type="checkbox" id="c4" name="c4" />
                        <label for="c4">Red</label>
                    </li>
                </ul>
                <h4>PRICE RANGE</h4>
                <ul>
                    <li><input type="checkbox" id="pr1" name="pr1" />
                        <label for="pr1">700-900</label>
                    </li>
                    <li><input type="checkbox" id="pr2" name="pr2" />
                        <label for="pr2">901-1100</label>
                    </li>
                    <li><input type="checkbox" id="pr3" name="pr3" />
                        <label for="pr3">1101-1500</label>
                    </li>
                    <li><input type="checkbox" id="pr4" name="pr4" />
                        <label for="pr4">1501-2000</label>
                    </li>
                </ul>
            </div>
            <dl className="products">{product.map(createProduct)}</dl>
        </div>
    )
}

export default Home
