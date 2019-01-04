import React,{Component} from 'react'
import {ListGroup, ListGroupItem, PageHeader,FormGroup,ControlLabel,FormControl} from 'react-bootstrap'
import './List.css'

// --------------------Stateless component
// --------------------------------------------
class List extends Component {

    state={
        sortBy:"Name"
    }


render(){
const props=this.props;
let sortedArray;

this.state.sortBy=="Name"?sortedArray=props.mainstate.players.sort((playerA,playerB)=>playerA.value>playerB.value)
:sortedArray=props.mainstate.players.sort((playerA,playerB)=>playerA.rating-playerB.rating)


return(
    <div id="container">
{/*----------------------------Header------------------------------------*/}
<PageHeader className="tracking-in-expand-fwd-top" id="header">
List of players
</PageHeader>


<FormGroup style={{width:"50%",margin:"auto",textAlign:"center"}} controlId="formControlsSelect">
      <ControlLabel style={{color:"white"}}>Sort By</ControlLabel>
      <FormControl onChange={(e)=>this.setState({sortBy:e.target.value})} autoFocus componentClass="select" placeholder="select">
        <option value="Name">Name</option>
        <option value="Rating">Rating</option>
      </FormControl>
</FormGroup>

{/*----------------------------Players List------------------------------------*/}
<ListGroup id="playersList">
{sortedArray
    .map((player, index) => <ListGroupItem id="playerItem">
        {index + 1}.&nbsp;Name:{player.value}&nbsp;Rating:{player.rating}
    </ListGroupItem>)}
</ListGroup>

</div>

)
}
}
    


export default List;
