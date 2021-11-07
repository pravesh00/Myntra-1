import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';

function createSize(clothes) {

    return (
        <div className="name"
            
        >{clothes.name}</div>
    );
}

const Sizeprofile = () => {

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
            <h1>Size Profile</h1>
            <div className="work">
                <div className="wl">
                    <div id="profiles">Profiles</div>
                    <div className="names">
                        {sizes.map(createSize)}
                    </div>
                </div>
                <div className="wr">
                    <div className="gender">
                        <div id="male">Male</div>
                        <div id="female">Female</div>
                    </div>
                    <div className="dimensions">
                        <h2>Waist Size</h2>
                        <div className="pws">
                            <div className="sizes">30</div>
                            <div className="sizes">32</div>
                            <div className="sizes">34</div>
                            <div className="sizes">36</div>
                            <div className="sizes">38</div>
                            <div className="sizes">40</div>
                            <div className="sizes">42</div>
                            <div className="sizes">44</div>
                        </div>
                        <h2>Foot Length</h2>
                        <div className="pws">
                            <div className="sizes">30</div>
                            <div className="sizes">32</div>
                            <div className="sizes">34</div>
                            <div className="sizes">36</div>
                            <div className="sizes">38</div>
                            <div className="sizes">40</div>
                            <div className="sizes">42</div>
                            <div className="sizes">44</div>
                        </div>
                        <h2>Collar Size</h2>
                        <div className="pws">
                            <div className="sizes">30</div>
                            <div className="sizes">32</div>
                            <div className="sizes">34</div>
                            <div className="sizes">36</div>
                            <div className="sizes">38</div>
                            <div className="sizes">40</div>
                            <div className="sizes">42</div>
                            <div className="sizes">44</div>
                        </div>
                    </div>
                    <div className="buttons">
                        <div className="conf">Add</div>
                        <div className="conf">Update</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sizeprofile
