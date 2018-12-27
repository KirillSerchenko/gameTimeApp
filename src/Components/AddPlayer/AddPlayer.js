import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import {PageHeader,FormGroup,Button,FormControl,ListGroup,ListGroupItem} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';
import './AddPlayer.css'


class AddPlayer extends Component {
    
  state = {
        value: '',//Input value
        rating:1,//Players rating value
        validationStatus:"error",//Validation status check if the field not empty
      }
    
  /*-----------------------Change value of input------------------------ */
  handleChange=(e)=>this.setState({ value: e.target.value});
  /*------------------------END-----------------------------------------*/

  /*-----------------------Change value of stars rating----------------*/
  onStarClick=(nextValue)=>this.setState({rating: nextValue});
  /*-----------------------END----------------*/
        
  /*------------------------Add New Player when the user clicked on add button-----------*/
  addClicked=(value,rating)=>
  {
    let temp=this.props.mainstate.players
    temp.push({value,rating})
    this.props.setSt({ backdropVisibility:"visible",textOfBackdrop:"Successfully added new player!",players:[...temp]})
    this.props.history.push('/')//Pass to Home screen page    
  }  
  /*-----------------------------------END------------------------------------------------*/
   
 
  /*---------------------Render Function--------------------------------------------------*/
  render() {
        const { rating,value } = this.state; //take rating and value property from current state
        const validationStatus=this.state.value ==="".slice(" ")?"error":"success";//check validation status of input if empty error else success
    
      return (
        <div id="container">

{/*----------------------Header of Component----------------------------------------------------- */}
        <PageHeader 
        className="tracking-in-expand-fwd-top" 
        style={{fontFamily: "'Alfa Slab One', cursive",color:"green",textShadow:"2px 2px lightgreen"}}>
        AddPlayer
        </PageHeader>
{/*----------------------END Header----------------------------------------------------- */}




{/*----------------------Form----------------------------------------------------- */}
        <form id="myForm">
          <FormGroup  controlId="formBasicText" validationState={validationStatus}>{/*validation state according validation status*/}
          <FormControl 
          type="text" 
          maxLength={20} 
          value={value} 
          placeholder="Enter Player Name" 
          onChange={(e)=>this.handleChange(e)}/>
          <FormControl.Feedback />    
          
          <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)} />
          </FormGroup>
        </form>
{/*---------------------END Form----------------------------------------------------------*/}

        {/*----------------------------Add Button----------------------------------------------- */}
        <Button
          onClick={()=>this.addClicked(this.state.value,this.state.rating)} 
          className={this.state.value ==="".slice(" ")?null :"jello-diagonal-2"} 
          bsStyle="primary" type='submit' disabled={this.state.value ==="".slice(" ")?true:false}>
          <i class="fas fa-plus">&nbsp; Add</i>
        </Button>
        {/*-----END Button------------------------------------------------------------------------*/}
        
        </div>
    )
  }
/*------------------------------------------------END Render--------------------------------------*/ 
}

export default withRouter(AddPlayer);//withRouter HOC component for get history object. 
