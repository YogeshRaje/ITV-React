import { Component } from "react";

class FormData extends Component{
    state = {
        value : "",
        lname : ""
    }

    handle = e=>{
        this.setState({value:e.target.value})
        // this.setState({lname:e.target.value})
    }

    render(){
        return (
            <div>
                <form>
                    FirstName:<input type="text" value={this.state.value} onChange={this.handle}  />
                    {/* LastName:<input type="text" value={this.lname.value} onChange={this.handle} /> */}
                </form>
            </div>
        )
    }
}

export default FormData;