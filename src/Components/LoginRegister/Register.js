import React, { Component } from 'react'
import {PageHeader} from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import {Form,FormGroup,FormControl,Col,Checkbox,Button,ControlLabel,Image} from 'react-bootstrap'
import red from '../../Icons/red.png'
import './Style.css'


class Register extends Component {
  
  state={
      EmailValue:"",
      PasswordValue:"",
      NameValue:"",
      CheckBoxValue:false
  }

  EmailhandleChange=(e)=>this.setState({EmailValue:e.target.value})
  PasswordhandleChange=(e)=>this.setState({PasswordValue:e.target.value})
  NamehandleChange=(e)=>this.setState({NameValue:e.target.value})
  
    submitHandler=()=>{
        let usersCopy=this.props.mainstate.users
        usersCopy.push({Email:this.state.EmailValue,Password:this.state.PasswordValue,Username:this.state.NameValue})
        this.props.setSt({isRegistered:true,users:usersCopy})  
    }

    componentDidMount=()=>{
      const x=localStorage.getItem(`Users`)
           if (x!=null){//Check if exist user in local storage    
                this.props.setSt({isAuth:true})
                   
         }
  }

   
    render() {
    return (  
        <div id="container">
                <PageHeader 
                className="tracking-in-expand-fwd-top" 
                style={{fontFamily: "'Alfa Slab One', cursive",color:"green",textShadow:"2px 2px lightgreen"}}>
                  <Image
                   src={red}
                   style={{float:"right"}}/>
                Register
                </PageHeader>

            <Form id="RegisterForm" horizontal>
            
            <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2}>
            
            </Col>
            <Col sm={8}>
            <FormControl id="inputT" autoFocus type="text" placeholder="Username"  value={this.state.NameValue} onChange={(e)=>this.NamehandleChange(e)} />
            </Col>
            </FormGroup>
            
            <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
           
            </Col>
            <Col sm={8}>
            <FormControl id="inputT"  type="email" placeholder="Email" value={this.state.EmailValue} onChange={(e)=>this.EmailhandleChange(e)}/> 
            </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                
              </Col>
              <Col sm={8}>
                <FormControl id="inputT"  type="password" placeholder="Password"  value={this.state.PasswordValue} onChange={(e)=>this.PasswordhandleChange(e)}/>
              </Col>
            </FormGroup>


  <FormGroup>
    <Col smOffset={2} sm={8}>
      <Button  type="submit" onClick={this.submitHandler}>Register</Button>
    </Col>
  </FormGroup>
</Form>;
        </div>
    )
  }
}

export default withRouter(Register);