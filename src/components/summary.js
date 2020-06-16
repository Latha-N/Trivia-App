import React from 'react'
import {Link} from 'react-router-dom'
import Moment from 'react-moment';



class Summary extends React.Component{
    constructor(){
        super()
        this.state={
            game: localStorage.getItem('GAME') ? JSON.parse(localStorage.getItem('GAME')) : {},
            histroyOn: false,
            history : localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : []
        }
    }
    // clickHomePage=e =>{
    //     e.preventDefault()
    //     // let history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : []
    //     const Game = JSON.parse(localStorage.getItem('GAME'))
    //    this.state.history.push(Game)
    //     localStorage.setItem('history',JSON.stringify(this.state.history))
    // }
    histroyClick = e =>{
        e.preventDefault()
        this.setState({
            history : localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history'))  : [],
            histroyOn: true
        })
    }
   render(){
       const game = this.state.game
        console.log('summary',game)
       return(
           <div className="container" class="text-center">
               <h2 className="text-primary">Summary</h2>
               {Object.keys(game).length>0 && <>
       <p>Hello {game.name}</p>
       <p>Here are the selected answers: </p>
       <p>Who is the best cricketer in the world?
       </p>
       <p>Answer: {game.cricketer}</p>

       <p>What are the colors in the Indian national flag?
       </p>
       <p>Answer: {game.flagColors.map(c => c.name).join(",")}</p></>
               }
               <button> <Link to="/" > Finish</Link></button>
               <button onClick={this.histroyClick} style={{color:"blue"}}>  History</button><br></br><br></br>
               
               {this.state.histroyOn && this.state.history.map((hist,index)=>{
                   return <div key={index}> <p><span className="text-success">GAME {index+1}:</span>  <Moment>{hist.GAME}</Moment> </p>
                   <p> Name: {hist.name} </p>
                   <p> Who is the best cricketer in the world? : {hist.cricketer} </p>
                   <p> What are the colors in the Indian national flag? : {hist.flagColors.map(c => c.name).join(",")}</p> </div>

               })}
            </div>
       )
   }
}
export default Summary