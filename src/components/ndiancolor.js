import React from 'react'
import {Link} from 'react-router-dom'
import MultiSelect from 'react-simple-multi-select';


class Indiancolor extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Indiancolors:['White','Yellow','Orange','Green'],
            Indiancolor:''
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
            Indiancolor:this.state.Indiancolors
        }
        localStorage.setItem('indiancolor',JSON.stringify(formData))
    }
    render(){
        return(
                <div>
                    <h1>What are the colors in the Indian national flag? Select all:</h1>
                    {/* <form onSubmit={this.handleSubmit}>
                        <ul>
                            {
                                this.state.Indiancolor.map((ind,i)=>{
                                    return <li key={i}><input type="checkbox" value={ind} onChange={this.handleChange}/>{ind}</li>
                                })
                            }
                        </ul>
                    </form> */}

                    <MultiSelect
                    Indiancolor={this.state.Indiancolor}
                    onChange={this.handleChange}/>
                    <Link to="/summary"><button>Next</button></Link>
                </div>
        )
    }
}
export default Indiancolor