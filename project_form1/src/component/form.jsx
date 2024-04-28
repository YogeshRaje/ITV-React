import { Component } from "react";

class FormData extends Component{
    state = {
        name : "",
        age : "",
        city : ""
    }

    handleChange = e=>{
        this.setState({[e.target.name] : e.target.value})
        // console.log(e.target[0].name)
    }

    handleSubmit = e=>{
         console.log(e.target[0].value) 
         console.log(this.state)
         e.preventDefault();
    }

    render(){

        return (
            <>
               <form onSubmit={this.handleSubmit}>
                <label>
                    Name : 
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <br/><br/>
                <label>
                    Age:
                    <input  type="age" name="age" value={this.state.age} onChange={this.handleChange} />
                </label>
                <br/><br/>
                <label>
                    City:
                    <input type="city" name="city" value={this.state.city} onChange={this.handleChange} />
                </label>
                <br/><br/>
                <input type="submit" value="Submit" />
               </form>
            </>
        )

    }
}

export default FormData;