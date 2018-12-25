import React, { Component } from 'react';
import Menu from './Menu/Menu'
import AddPlayer from './AddPlayer/AddPlayer'
import List from './List/List'
import RemovePlayer from './RemovePlayer/RemovePlayer'
import EditPlayer from './EditPlayer/EditPlayer'
import Payment from './Payment/Payment'
import StartGame from './StartGame/StartGame'
import MakeTeams from './MakeTeams/MakeTeams'

import {Switch,Route} from 'react-router-dom'//import route components from library react-router-dom

class App extends Component {
 
 state={
   players:[],//Array of added players
   backdropVisibility:"hidden",//Backdrop visibility property. 
   textOfBackdrop:""//text of backdrop to put correct text according operation.
 }
 
 //-------------------------------Render function------------------------------------------------------
  render() {
    
    return ( 
      <div>
      {/*Route switch for pass to match screen*/}
      <Switch>
        {/*I am pass main state to every component and set state func to update the state continued we need to refactor this with using Redux!!!! */}
      <Route exact path='/' render={()=><Menu  mainstate={this.state}  setSt={(element)=>this.setState(element)}/>} />
      <Route exact path='/AddPlayer' render={()=><AddPlayer  mainstate={this.state} setSt={(element)=>this.setState(element)}/>} />
      <Route exact path='/RemovePlayer' render={()=><RemovePlayer  mainstate={this.state}  setSt={(element)=>this.setState(element)}/>} />
      <Route exact path='/EditPlayer' render={()=><EditPlayer  mainstate={this.state}  setSt={(element)=>this.setState(element)}/>} />
      <Route exact path='/Payment' render={()=><Payment  mainstate={this.state}/>} />
      <Route exact path='/StartGame' render={()=><StartGame  mainstate={this.state}/>} />
      <Route exact path='/MakeTeams' render={()=><MakeTeams  mainstate={this.state}/>} />
      <Route exact path='/List' render={()=><List  mainstate={this.state}/>} />
      </Switch>
      </div>    
    
    )}
//----------------------------------------END Render function--------------------------------------------
}

export default App;
