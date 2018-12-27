import React, { Component } from 'react'
import {PageHeader} from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import {Form,FormGroup,FormControl,Col,Checkbox,Button,ControlLabel} from 'react-bootstrap'
import './Style.css'


class Register extends Component {
  
  state={
      users:[],
      EmailValue:"",
      PasswordValue:"",
      CheckBoxValue:false
  }

  EmailhandleChange=(e)=>this.setState({EmailValue:e.target.value})
  PasswordhandleChange=(e)=>this.setState({PasswordValue:e.target.value})
  
  clickedCheck=()=>{
      let temp=!this.state.CheckBoxValue
      this.setState({CheckBoxValue:temp})
    }

    submitHandler=()=>{
        let usersCopy=[...this.state.users]
        usersCopy.push({Email:this.state.EmailValue,Password:this.state.PasswordValue})
        if(this.state.CheckBoxValue==true)
        { 
            localStorage.setItem(`Email`,this.state.EmailValue)
            localStorage.setItem(`Password`,this.state.PasswordValue)
        }
            this.setState({users:usersCopy}) 
            this.props.setSt({isAuth:true})  
            this.props.history.push("/Menu");
    }

    componentDidMount=()=>{
        if (localStorage.getItem("Email") !== null && localStorage.getItem("Password") !== null) {
            this.props.history.push("/Menu");    
            this.props.setSt({isAuth:true})
            this.setState({EmailValue:localStorage.getItem('Email'),PasswordValue:localStorage.getItem('Password')})   
            
        } 
    }
  
    render() {
    return (
        
        <div id="container">
                <PageHeader 
                className="tracking-in-expand-fwd-top" 
                style={{fontFamily: "'Alfa Slab One', cursive",color:"green",textShadow:"2px 2px lightgreen"}}>
                Register
                </PageHeader>

            <Form id="RegisterForm" horizontal>
            <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
            Email
            </Col>
            <Col sm={8}>
            <FormControl type="email" placeholder="Email" value={this.state.EmailValue} onChange={(e)=>this.EmailhandleChange(e)}/> 
            </Col>
            </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Password
    </Col>
    <Col sm={8}>
      <FormControl type="password" placeholder="Password"  value={this.state.PasswordValue} onChange={(e)=>this.PasswordhandleChange(e)}/>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={8}>
      <Checkbox   onClick={this.clickedCheck}>Remember me</Checkbox>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={8}>
      <Button type="submit" onClick={this.submitHandler}>Sign in</Button>
    </Col>
  </FormGroup>
</Form>;
        </div>
    )
  }
}

export default withRouter(Register);