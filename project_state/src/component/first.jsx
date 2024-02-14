//Here we are going to discussed about state without constructor

import { Component } from "react";


class State1 extends Component{
    state = {
        name : "Rohit",
        age : 34,
        city : 'Thane',
        pay : this.props.pay
    }

    render(){
        return <>
           <h1>My name is {this.state.name} and  i have pay you {this.state.pay}</h1>
        </>
    }
}

export default State1;