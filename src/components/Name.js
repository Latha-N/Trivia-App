import React from 'react';
import { Alert } from 'antd';

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
        if(this.state.name == ""){
            alert("Invalid Input")
        } else {
            const GAME = {GAME: Date.now(),name: this.state.name }
            localStorage.setItem('GAME',JSON.stringify(GAME))
                this.props.history.push('/cricketer')
        }
     

        
    }
    render(){
        return(
            <div>
            <h2>What is youre name?</h2>
                <input type="text" value={this.state.name} name="name" id="name" onChange={this.handleChange}/>

               <button onClick={this.handleSubmit} type="button" className="btn btn-info">Next</button>
               
            </div>
        )
    }
}
export default Name