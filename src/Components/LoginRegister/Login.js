import React, { Component } from 'react'
import {PageHeader} from 'react-bootstrap'
import './Style.css'
import {Form,FormGroup,FormControl,Col,Checkbox,Button,ControlLabel} from 'react-bootstrap'

export default class Login extends Component {
  
  
  
  
  
    render() {
    return (
        <div id="container">
                <PageHeader 
                className="tracking-in-expand-fwd-top" 
                style={{fontFamily: "'Alfa Slab One', cursive",color:"green",textShadow:"2px 2px lightgreen"}}>
                Login
                </PageHeader>

                
                        
                <Form id="LoginForm" horizontal>
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
                </Form>
        </div>
    )
  }
}
