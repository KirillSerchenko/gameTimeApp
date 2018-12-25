import React, { Component } from 'react'
import {PageHeader,Jumbotron} from 'react-bootstrap'


export default class MakeTeams extends Component {
 
state={
  players1:[],
  players2:[],
  players3:[],
  players4:[],
  players5:[]
}

 componentDidMount(){
    let players1=[]
    let players2=[]
    let players3=[]
    let players4=[]
    let players5=[]
    this.props.mainstate.players.map(player=>{
      switch(player.rating){
        case 1:
       players1.push(player)
          break;
        case 2:
        players2.push(player)
          break;
        case 3:
        players3.push(player)          
        break;
        case 4:
        players4.push(player)
          break;
        case 5:
        players5.push(player)
          break;
        default:
          break;
      }
    })
    this.setState({players1:[...players1]})
  }
  
  render() {
   
   


    return (
      <div id="container">
        <PageHeader className="tracking-in-expand-fwd-top" style={{fontFamily: "'Alfa Slab One', cursive",color:"green",textShadow:"2px 2px lightgreen"}}>Make Teams</PageHeader> 
        <Jumbotron id="playersTable">
            {this.state.players1.map((item,i) => <div key={i}>{item.value}</div>)}
            {this.state.players2.map((item,i) => <div key={i}>{item.value}</div>)}
            {this.state.players3.map((item,i) => <div key={i}>{item.value}</div>)}
            {this.state.players4.map((item,i) => <div key={i}>{item.value}</div>)}
            {this.state.players5.map((item,i) => <div key={i}>{item.value}</div>)}
        </Jumbotron>
      </div>
    )
  }
}
