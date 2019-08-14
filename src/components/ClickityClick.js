// Code ClickityClick Component Here
import React, { Component } from 'react'
export default class ClickityClick extends Component{
    constructor(){
        super()
        this.state = {
            hasBeenClicked: false,
            currentTheme: 'blue'
        }
    }

    handleClick = ()=>{
        this.setState({
            hasBeenClicked : true
        })
    }

    render(){
   return (
       <div> 
           <p>
               I have {this.state.hasBeenClicked ? 'been clicked' : 'not'} </p>
               <button onClick = {this.handleClick}> Click Me !</button>
             </div>
         )
    }


}