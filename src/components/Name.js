import React from 'react';

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
        if(this.state.name === ""){
            alert ("Enter the input field")
          
        } else {
            const GAME = {GAME: Date.now(),name: this.state.name }
            localStorage.setItem('GAME',JSON.stringify(GAME))
                this.props.history.push('/cricketer')
        }
     

        
    }
    render(){
        return(
            <div>
            <label>What is youre name?</label>
            <br></br>
                <input type="text" value={this.state.name} name="name" id="name" onChange={this.handleChange}/>
                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">NEXT</button>
            </div>
        )
    }
}
export default Name