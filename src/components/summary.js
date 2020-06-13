import React from 'react'
import {Link} from 'react-router-dom'


class Summary extends React.Component{
    constructor(){
        super()
        this.state={
            name:''
        }
    }
    componentDidMount(){
        let data=JSON.parse(localStorage.getItem('name'))
        this.setState({
            data:data
        })
    }
}
export default Summary