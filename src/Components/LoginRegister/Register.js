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
  
  clickedCheck=()=>{
      let temp=!this.state.CheckBoxValue
      this.setState({CheckBoxValue:temp})
    }

  submitHandler=()=>{
        let usersCopy=[...this.props.mainstate.users]
        usersCopy.push({Email:this.state.EmailValue,Password:this.state.PasswordValue})
        // if(this.state.CheckBoxValue==true)
        //localStorage.setItem(`Users`,JSON.stringify({Name:this.state.NameValue,Email:this.state.EmailValue,Password:this.state.PasswordValue})) 
        this.props.setSt({isAuth:true,users:usersCopy})  
        this.props.history.push("/Login");
    }


    componentDidMount=()=>
    {
      // const x=localStorage.getItem(`Users`)
      //   if (x!=null){//Check if exist user in local storage
      //       this.props.history.push("/Menu");    
      //       this.props.setSt({isAuth:true})
      //       this.setState({EmailValue:x.Email,PasswordValue:x.Password,NameValue:x.NameValue})    
      //   }

        // if(this.props.mainstate.users.some(user=>user.EmailValue==this.state.EmailValue && user.PasswordValue==this.state.PasswordValue))
        // {////Check if exist user in users array
        //   this.props.history.push("/Menu")    
        //   this.props.setSt({isAuth:true})
        // }
    }
  
    render() {
    return (  
        <div id="container">
                <PageHeader 
                className="tracking-in-expand-fwd-top" 
                style={{fontFamily: "'Alfa Slab One', cursive",color:"green",textShadow:"2px 2px lightgreen"}}>
                  <Image src={red}
                   style={{float:"right"}}/>
                Register
                </PageHeader>

            <Form id="RegisterForm" horizontal>
            
            <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2}>
            Name
            </Col>
            <Col sm={8}>
            <FormControl type="text" placeholder="Enter Name"  value={this.state.NameValue} onChange={(e)=>this.NamehandleChange(e)} />
            </Col>
            </FormGroup>
            
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

            {/* <FormGroup>
              <Col smOffset={2} sm={8}>
                <Checkbox   onClick={this.clickedCheck}>Remember me</Checkbox>
              </Col>
            </FormGroup> */}

  <FormGroup>
    <Col smOffset={2} sm={8}>
      <Button type="submit" onClick={this.submitHandler}>Register</Button>
    </Col>
  </FormGroup>
</Form>;
        </div>
    )
  }
}

export default withRouter(Register);