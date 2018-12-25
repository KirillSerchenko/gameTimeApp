import React from 'react'
import {ListGroup,ListGroupItem,PageHeader} from 'react-bootstrap'
import './List.css'

//--------------------Stateless component --------------------------------------------
const List = props => 
           <div id="container">  
            <PageHeader
              className="tracking-in-expand-fwd-top"
              style=
                    {{
                      fontFamily: "'Alfa Slab One', cursive",
                      color:"green",
                      textShadow:"2px 2px lightgreen"
                    }}>       
            List of players
            </PageHeader>

           <ListGroup id="playersList">
              {props.mainstate.players
              .map((player,index)=>
                          <ListGroupItem id="playerItem">
                          {index+1}.&nbsp;Name:{player.value}&nbsp;Rating:{player.rating}
                          </ListGroupItem> )}
           </ListGroup>           
           </div>

export default List;
  



