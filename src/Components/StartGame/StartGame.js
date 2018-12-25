import React, { Component } from 'react'
import {PageHeader} from 'react-bootstrap'
export default class StartGame extends Component {
  render() {
    return (
      <div id="container">
         <PageHeader className="tracking-in-expand-fwd-top" style={{fontFamily: "'Alfa Slab One', cursive",color:"green",textShadow:"2px 2px lightgreen"}}>Start Game</PageHeader> 
      </div>
    )
  }
}
