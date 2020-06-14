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
       const GAME = {GAME: Date.now(),name: this.state.name }
        localStorage.setItem('GAME',JSON.stringify(GAME))
        this.props.history.push('/cricketer')
    }
    render(){
        return(
            <div>
            <h1>What is youre name?</h1>
                <input type="text" value={this.state.name} name="name" id="name" onChange={this.handleChange}/>
               <button onClick={this.handleSubmit}>Next
               </button>
            </div>
        )
    }
}
export default Name