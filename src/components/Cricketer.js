import React from 'react'
import {Link} from 'react-router-dom'

class Cricketer extends React.Component{
    constructor(){
        super()
        this.state={
            cricketers:['Sachin Tendulkar','Virat Kolli','Adam Gilchirst','Jacques Kallis'],
            
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
            cricketer:this.state.cricketer
        }
        localStorage.setItem('cricketer',JSON.stringify(formData))
    }

    render(){ 
        return(
                <div>
                    <h1>Who is the best cricketer in the world?</h1>
                    <form onSubmit={this.handleSubmit}>
                        <ul>
                            {
                                this.state.cricketers && this.state.cricketers.map((cri,i)=>{
                                    return <li key={i} type="A"><input type="radio" name="cricketer" value={cri} onChange={this.handleChange}/>{cri}</li>
                                 })
                            }
                        </ul>
                    </form>
                   <Link to="/indiancolor"><button>Next</button></Link> 
                </div>
        )
    }
}
export default Cricketer