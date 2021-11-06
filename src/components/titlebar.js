import React from 'react'

const titlebar = () => {
    return (
        <div>
        <ul class="titlebar">
            <li class="filters">FILTERS</li>
            <li class="ss">
                Smart Size
                <div class="dropdown-content">
                    <a href="#">Buying for Akshit</a>
                    <a href="#">Buying for Ashutosh</a>
                    <a href="#">Buying for Aarjaviy</a>
                    <a href="#">Buying for Pravesh</a>
                    <a href="#">Buying for Dipti</a>
                    <a href="#">Add Size Profile</a>
                </div>
            </li>
            <li class="sf">Save Filter</li>
            <li class="uf">Update Filter</li>
        </ul>
    </div>
    )
}

export default titlebar
