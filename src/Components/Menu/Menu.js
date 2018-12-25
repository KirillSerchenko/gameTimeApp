import React, { Component } from 'react'
import {ButtonGroup,Button,PageHeader,Image} from 'react-bootstrap'
import { withRouter} from "react-router-dom";
import Backdrop from './Backdrop'
//Import Images for ball and soccerPlayer
import ball from '../../Icons/ball_ico.png'

//---------------CSS Menu Import---------------------------------------
import '../Menu/Menu.css'


 class Menu extends Component {
 
 state={
   display:["hidden","hidden","hidden","hidden","hidden","hidden","hidden"]
   //display balls image in menu
 }

 
  
 showIcon=(num)=>{
   let arrDisplay = [...this.state.display];
   arrDisplay[num]="visible";
   this.setState({display:arrDisplay})
 }

 hideIcon=()=>{
  let arrDisplay=["hidden","hidden","hidden","hidden","hidden","hidden","hidden"];
  this.setState({display:arrDisplay})
}
 


//Pass to match screen according num
passToScreen=(num)=>{
 
  switch(num){
   case(0):
         this.props.history.push("/AddPlayer");
         break;
   case(1):
        this.props.history.push("/RemovePlayer");
         break;
   case(2):
        this.props.history.push("/EditPlayer");
         break;
   case(3):
        this.props.history.push("/Payment");
         break;
   case(4):
        this.props.history.push("/StartGame");
        break;
   case(5):
        this.props.history.push("/MakeTeams");
        break;
   case(6):
        this.props.history.push("/List");
        break;
   default:
        this.props.history.push("/");
        break;
        }  
}


  render() {
    return (
      <div id="container">  
          <Backdrop mainstate={this.props.mainstate} setSt={this.props.setSt}/>
          <PageHeader className="tracking-in-expand-fwd-top"
           style={{
             fontFamily: "'Alfa Slab One', cursive",
             color:"green",
             textShadow:"2px 2px lightgreen"}}>
             Menu
          </PageHeader> 

          <ButtonGroup className="bounce-in-top" vertical>
          <Button onClick={()=>this.passToScreen(0)}  onMouseLeave={this.hideIcon} onMouseEnter={()=>this.showIcon(0)} bsStyle="success"> <i style={{float:"left"}} class="fas fa-user-plus"> &nbsp;Add Player</i>  </Button> 
          <Image src={ball} rounded style={{position:"absolute",top:"0%",left:"-20%",visibility:this.state.display[0]}} />
          <Button onClick={()=>this.passToScreen(1)} onMouseLeave={this.hideIcon} onMouseEnter={()=>this.showIcon(1)} bsStyle="success"> <i style={{float:"left"}} class="fas fa-user-minus"> &nbsp;Remove Player</i> </Button>
          <Image src={ball} rounded style={{position:"absolute",top:"15%",left:"-20%",visibility:this.state.display[1]}} />  
          <Button onClick={()=>this.passToScreen(2)} onMouseLeave={this.hideIcon} onMouseEnter={()=>this.showIcon(2)}  bsStyle="success"> <i style={{float:"left"}} class="fas fa-user-edit"> &nbsp;Edit Player</i></Button>
          <Image src={ball} rounded style={{position:"absolute",top:"30%",left:"-20%",visibility:this.state.display[2]}} />  
          <Button onClick={()=>this.passToScreen(3)} onMouseLeave={this.hideIcon} onMouseEnter={()=>this.showIcon(3)} bsStyle="success"> <i style={{float:"left"}} class="fas fa-credit-card"> &nbsp;Payment</i></Button>
          <Image src={ball} rounded style={{position:"absolute",top:"42%",left:"-20%",visibility:this.state.display[3]}} />  
          <Button onClick={()=>this.passToScreen(4)} onMouseLeave={this.hideIcon} onMouseEnter={()=>this.showIcon(4)}  bsStyle="success"> <i style={{float:"left"}} class="fas fa-futbol"> &nbsp;Start Game</i></Button>
          <Image src={ball} rounded style={{position:"absolute",top:"58%", left:"-20%",visibility:this.state.display[4]}} />  
          <Button onClick={()=>this.passToScreen(5)} on onMouseLeave={this.hideIcon} onMouseEnter={()=>this.showIcon(5)}  bsStyle="success"> <i style={{float:"left"}} class="fas fa-users"> &nbsp;Make Teams</i> </Button>
          <Image src={ball} rounded style={{position:"absolute",top:"72%",left:"-20%",visibility:this.state.display[5]}} />
          <Button onClick={()=>this.passToScreen(6)} on onMouseLeave={this.hideIcon} onMouseEnter={()=>this.showIcon(6)}  bsStyle="success"><i class="fas fa-clipboard-list"> &nbsp;List of Players</i> </Button>
          <Image src={ball} rounded style={{position:"absolute",top:"85%",left:"-20%",visibility:this.state.display[6]}} />
        </ButtonGroup>
      </div>
      
    )
  }
}

export default withRouter(Menu);
