import React, { Component } from 'react'
export class filterer extends Component{
    constructor() {
        super();
        console.log("Hi");
        this.state = {
            clothes: [],
        }
    }

    async componentDidMount() {
        let url = "https://myntra-server.herokuapp.com/filter";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ clothes: parsedData})
    }
}