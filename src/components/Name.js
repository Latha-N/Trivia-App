import React from 'react'
import {Link} from 'react-router-dom'

class Name extends React.Component{
    constructor(){
        super()
        this.state={
            name:''

        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name
        }
        localStorage.setItem('name',JSON.stringify(formData))
    }
    render(){
        return(
            <div>
            <h1>What is youre name?</h1>
            <form onSubmit={this,this.handleSubmit}>
                <input type="text" value={this.state.name} name="name" id="name" onChange={this.handleChange}/>
               <Link to="/cricketer"><button>Next</button> </Link> 

            </form>
            </div>
        )
    }
}
export default Name