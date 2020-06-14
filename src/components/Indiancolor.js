import React from 'react'
import {Link} from 'react-router-dom'
import { Multiselect } from 'multiselect-react-dropdown';


class Indiancolor extends React.Component{
    constructor(props){
        super(props)
        this.state={
            colors:[{ name: "White",id:1},{ name: "Yellow",id:2},{ name: "Orange",id:3},{name: "Green",id:4 }],
            colorsChoosen: []
        }
    }

    // handleChange=(e)=>{
    // this.setState({
    //     [e.target.name]:e.target.value
    //     })
    //     console.log(this.state.colorsChoosen)
    // }

    handleSubmit=(e)=>{
        e.preventDefault()
        let Game = JSON.parse(localStorage.getItem('GAME'))
        Game = {...Game, flagColors: this.state.colorsChoosen}
        localStorage.setItem('GAME',JSON.stringify(Game))
        let history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history'))  : []
        history.push(Game)
        localStorage.setItem('history',JSON.stringify(history))
        this.props.history.push('/summary')
    }
    onSelect = (selectedList, selectedItem) => {
        this.setState(prevState => {
            return {
                colorsChoosen: selectedList
            }
        })
        // console.log(selectedList,selectedItem.name)
    }
     
    onRemove = (selectedList, removedItem) => {
        this.setState(prevState => {
            return {
                colorsChoosen: selectedList
            }
        })
    }
    render(){
        // console.log('on select', this.state.colorsChoosen)
        return(
                <div>
                    <h1>What are the colors in the Indian national flag?</h1>

                    <Multiselect
                    name='colorsChoosen'
                    onChange={this.handleChange} options={this.state.colors} selectedValues={this.state.colorsChoosen} displayValue="name"  style={{"min-width": "40px" }} onRemove={this.onRemove} onSelect={this.onSelect}/>

                    <button onClick={this.handleSubmit} >Next</button>
                </div>
        )
    }
}
export default Indiancolor