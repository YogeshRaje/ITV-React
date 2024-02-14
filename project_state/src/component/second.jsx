import { Component } from "react";

class StateClass extends Component{
    constructor(){
        super()
        this.state = {
            name:"Bhavesh",
            age:20,
            city:"Nashik"
        }
    }

    render(){
        return <>
            <h1>My name is {this.state.name}</h1>
        </>
    }
}

export default StateClass;