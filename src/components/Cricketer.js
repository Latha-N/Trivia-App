import React from 'react'

class Cricketer extends React.Component{
    constructor(){
        super()
        this.state={
            cricketers:['Sachin Tendulkar','Virat Kolli','Adam Gilchirst','Jacques Kallis'],
            cricketer: ""
            
        }
    }

    handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
            if(this.state.cricketer == ""){
                alert ("error")
            } else {
                let Game = JSON.parse(localStorage.getItem('GAME'))
                Game = {...Game, cricketer: this.state.cricketer}
                localStorage.setItem('GAME',JSON.stringify(Game))
                this.props.history.push('/indiancolor')
            }
  
    }
    

    render(){ 
        return(
                <div >
                    <h2>Who is the best cricketer in the world?</h2>
                        <ul>
                            {
                                this.state.cricketers && this.state.cricketers.map((cri,i)=>{
                                    return <li key={i} type="A"><input type="radio" name="cricketer" value={cri} onChange={this.handleChange}/>{cri}</li>
                                 })
                            }
                        </ul> 
                    <button onClick={this.handleSubmit} type="button" className="btn btn-info"> Next </button>
                </div>
        )
    }
}
export default Cricketer