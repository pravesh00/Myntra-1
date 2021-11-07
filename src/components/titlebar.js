import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect,useState} from 'react'
import axios from 'axios'

function createSize(clothes) {

    return (
        <Link to="/"
            
        >Buying for {clothes.name}</Link>
    );
}

const Titlebar = () => {

    const [sizes,setSizes]=useState([]);

    useEffect(()=>{
        axios("https://myntra-server.herokuapp.com/size")
        .then(response => {
            setSizes(response.data)
        }).catch(error => {
            console.log(error)
        })
    })

    return (
        <div>
            <ul className="titlebar">
                <li className="filters">FILTERS</li>
                <li className="ss">
                    <Link to="/sizeprofile">Smart Size</Link>
                    <div className="dropdown-content">
                        {sizes.map(createSize)}
                        <Link to="/">Add Size Profile</Link>
                    </div>
                </li>
                <li className="sf">Save Filter</li>
                <li className="uf">Update Filter</li>
            </ul>
        </div>
    )
}

export default Titlebar
