import React, { Component } from 'react'
import {PageHeader, Image} from 'react-bootstrap'
import green from '../../../Icons/green.png'
import logout from '../../../Icons/logout.png'
import {withRouter} from 'react-router-dom'


 class MenuHeader extends Component {
  


    clicked=(e)=>{
       localStorage.removeItem("Users")
       window.location.reload() 
    }
   
   render() {
     return (
        <PageHeader
        style={{width:"100%"}}
        className="tracking-in-expand-fwd-top"
        id="header">
         <Image
            src={logout}
            onClick={this.clicked}
            style={{
            cursor:"pointer",
            padding:"5px",
            width:"40px",
            float: "left",
            bottom:"20px"
            }}/>
        <Image
            src={green}
            style={{
            float: "right",
            display:"block",
            bottom:"20px"
            }}/>
        <span style={{fontWeight:"normal",position:"relative",left:"3em",top:"-1em",float:"right",fontSize:"12px",color:"white",textShadow:"none",display:"block"}} >{this.props.username}</span>
        <span style={{position:"relative",left:"0.7em"}}>Menu</span>
        </PageHeader>
     )
   }
 }
 
 export default withRouter(MenuHeader)