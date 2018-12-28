import React, { Component } from 'react'
import {PageHeader} from 'react-bootstrap'
import red from '../../Icons/red.png'
import './Style.css'
import {Form,FormGroup,FormControl,Col,Checkbox,Button,ControlLabel,Image} from 'react-bootstrap'

export default class Login extends Component {

    state={
    PasswordValue:"",
    NameValue:"",
    CheckBoxValue:false,
    signInDisabled:false
    }

    EmailhandleChange=(e)=>this.setState({EmailValue:e.target.value})
    PasswordhandleChange=(e)=>this.setState({PasswordValue:e.target.value})
    NamehandleChange=(e)=>this.setState({NameValue:e.target.value})
    
    clickedCheck=()=>{
        let temp=!this.state.CheckBoxValue
        this.setState({CheckBoxValue:temp})
      }
    


    signinHandler=()=>{
        if(this.state.CheckBoxValue==true){
            localStorage.setItem(`Users`,JSON.stringify({Username:this.state.NameValue,Password:this.state.PasswordValue}))
            this.props.setSt({isAuth:true})} 
        this.props.setSt({isAuth:true})    
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
                Login
                </PageHeader> 
                <Form id="RegisterForm" horizontal>
            
            <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2}>
            </Col>
            <Col sm={8}>
            <FormControl id="inputT" type="text" autoFocus placeholder="Enter Username"  value={this.state.NameValue} onChange={(e)=>this.NamehandleChange(e)} />
            </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
              </Col>
              <Col sm={8}>
                <FormControl id="inputT" type="password" placeholder="Password"  value={this.state.PasswordValue} onChange={(e)=>this.PasswordhandleChange(e)}/>
              </Col>
            </FormGroup>

             <FormGroup>
              <Col smOffset={2} sm={8}>
                <Checkbox   onClick={this.clickedCheck}>Remember me</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
                    <Col smOffset={2} sm={8}>
                    <Button className={this.props.mainstate.users.some(user=>user.Username==this.state.NameValue && user.Password==this.state.PasswordValue)?"jello-diagonal-2":null} type="submit" bsStyle="primary" onClick={this.signinHandler} disabled={!(this.props.mainstate.users.some(user=>user.Username==this.state.NameValue && user.Password==this.state.PasswordValue))}>Sign in</Button>
                    </Col>
            </FormGroup> 
            </Form>
        </div>
    )
  }
}
