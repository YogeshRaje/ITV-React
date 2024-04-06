import { Component } from "react"

export default class Contact extends Component{
    constructor(){
        super()
        this.state = {
            value : ""
        }
    }

    handleChange = e => {
        // console.log(e)
        this.setState({value : e.target.value})
    }

    render(){
        return(
            <div className="container">
                <form>
                    <input type ="text" value={this.state.value} onChange={this.handleChange}
                    className="form-control" />
                </form>
                <h1>{this.state.value}</h1>
            </div>
        )
    }

}