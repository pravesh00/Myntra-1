import React from 'react'
import { Link } from 'react-router-dom';
const titlebar = () => {
    return (
        <div>
            <ul className="titlebar">
                <li className="filters">FILTERS</li>
                <li className="ss">
                    <Link to="/sizeprofile">Smart Size</Link>
                    <div className="dropdown-content">
                        <Link to="/">Buying for Akshit</Link>
                        <Link to="/">Buying for Ashutosh</Link>
                        <Link to="/">Buying for Aarjaviy</Link>
                        <Link to="/">Buying for Pravesh</Link>
                        <Link to="/">Buying for Dipti</Link>
                        <Link to="/">Add Size Profile</Link>
                    </div>
                </li>
                <li className="sf">Save Filter</li>
                <li className="uf">Update Filter</li>
            </ul>
        </div>
    )
}

export default titlebar
