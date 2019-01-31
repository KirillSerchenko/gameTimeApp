import React, { Component } from 'react'
import {ButtonGroup,Button,Image} from 'react-bootstrap' 
import ball from '../../../Icons/ball_ico.png'

export default class MenuNavs extends Component {
  
render() {
    const navButtonsConfig=[
    {
        top:"0%",
        icon:"fas fa-user-plus",
        title:"Add Player"
    },
    {
        top:"15%",
        icon:"fas fa-user-minus",
        title:"Remove Player"
    },
    {
        top:"30%",
        icon:"fas fa-user-edit",
        title:"Edit Player"
    },
    {
        top:"42%",
        icon:"fas fa-credit-card",
        title:"Payment"
    },
    {
        top:"58%",
        icon:"fas fa-futbol",
        title:"Start Game"
    },
    {
        top:"72%",
        icon:"fas fa-users",
        title:"Make Teams"
    },
    {
        top:"87%",
        icon:"fas fa-clipboard-list",
        title:"List of Players"
    }
]
    
    return (
        <ButtonGroup className="bounce-in-top" vertical>
            {
                navButtonsConfig.map((config,index)=>
                    <div key={index*index*index}>
                    <Button
                        key={index}
                        onClick={() => this.props.clicked(index)}
                        onMouseLeave={this.props.hideIcon}
                        onMouseEnter={() => this.props.showIcon(index)}
                        bsStyle="success">
                        <i
                            style={{
                            float: "left"
                        }}
                            className={config.icon}>
                            &nbsp;{config.title}</i>
                    </Button>
                    
                    <Image
                        key={index+navButtonsConfig.length}
                        src={ball}
                        rounded
                        style={{
                        marginRight:"15px",
                        position: "absolute",
                        top: config.top,
                        left: "-20%",
                        visibility: this.props.visibilityArray[index]}}/></div>)
                        
                        }
                 </ButtonGroup>       
                        )
                    }
                }
            
        
        
        
    

