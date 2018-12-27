import React, { Component } from 'react'
import {PageHeader,ListGroup} from 'react-bootstrap'
import {FormGroup,InputGroup,FormControl} from 'react-bootstrap'
import PlayerPayment from './PlayerPayment'
import './Payment.css'


export default class Payment extends Component {
 
  state={
    counter:0, //Amount of money 
    value:10 //value of current price
  }
 

 changeValue=(e)=>this.setState({value:e.target.value})//Change the value of price per game
 
 render() {
    return (
      <div id="container">
         <PageHeader className="tracking-in-expand-fwd-top" style={{fontFamily: "'Alfa Slab One', cursive",color:"green",textShadow:"2px 2px lightgreen"}}>Payment</PageHeader> 
        <h1 id="counter" style={{color:"white"}}>Sum:{this.state.counter} &#8362;</h1>
        <FormGroup>
             <InputGroup id="inputNum">
             <InputGroup.Addon> &#8362; </InputGroup.Addon>
             <FormControl id="numControl" type="number" value={this.state.value} onChange={this.changeValue} min={10} max={50}/>
             <InputGroup.Addon>.00</InputGroup.Addon>
             </InputGroup>
        </FormGroup>
         
         <ListGroup id="paymentList">
             {this.props.mainstate.players.map((player,index)=><PlayerPayment update={(obj)=>this.setState(obj)}  name={player.value} index={index}  counter={this.state.counter} value={this.state.value}   /> )}
        </ListGroup>;
      </div>
    )
  }
}
