import { Component } from "react";

class Multiple extends Component{
    state = {
        name : "",
        age : ""
    }

    handle = e=>{
        this.setState({[e.target.name]:e.target.value})
        console.log(e.target.value)

        console.log(this.state)
    }

    render(){
        return(
            <>
               <form>
                <label>
                    Name:<input type="text" name="name" value={this.state.name} onChange={this.handle} />
                </label>
                <br/><br/>
                <label>
                    Age:<input type="number" name="age" value={this.state.age} onChange={this.handle} />
                </label>
               </form>
            </>
        )
    }
}

export default Multiple;

