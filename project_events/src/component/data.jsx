import { Component } from "react";

class Data extends Component{
    constructor(){
        super()
        this.state = {
            name:"Rohit",
            age:55,
            city:"Nashik"
        }
    }

   

    render(){
        var handler = ()=>{
            alert("Event Got Called",this.state.name)
        }
       return <>
       <h5>Click On Below Button</h5> 
       <button onClick={handler}>Run</button>
       </>
    }
    
}

export default Data;