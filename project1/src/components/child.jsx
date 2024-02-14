import { Component } from "react";

class Child extends Component{
    render(props){
        return <>
            <h1>Hello {this.props.children}</h1>
        </>
    }
}

export default Child;