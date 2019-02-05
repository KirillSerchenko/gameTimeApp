import React, {Component} from 'react'
import {PageHeader} from 'react-bootstrap'
import red from '../../Icons/red.png'
import md5 from 'md5'
import {Image} from 'react-bootstrap'
import LoginForm from './Form/LoginForm'
import Switch from "react-switch"
import {withRouter} from "react-router-dom";
import './Style.css'

class Login extends Component {
    
    state = {
        PasswordValue: "", //Password handler
        NameValue: "", //Username handler
        CheckBoxValue: false, //Checkbox handler
        signInDisabled: false, //disable button
        checked:true
    }

    EmailhandleChange = (e) => this.setState({EmailValue: e.target.value})
    
    PasswordhandleChange = (e) => this.setState({PasswordValue: e.target.value})
    
    NamehandleChange = (e) => {this.setState({NameValue: e.target.value})}
    
    clickedCheck = () => this.setState({CheckBoxValue:!this.state.CheckBoxValue})
    
    signinHandler = (user) => {   
        if (this.state.CheckBoxValue === true) { //Set item to local storage if clicked remember me
            localStorage.setItem(`Users`, JSON.stringify(user))
            this.props.setSt({currentUser:user,isAuth: true})
        }

        else{
            this.props.setSt({currentUser:user,isAuth: true}) 
        }
    }

    handleChange=(checked)=> {this.props.setSt({isRegistered:checked})}

    render() {
        return (
            <div id="container" className="scale-in-ver-center">
                <PageHeader className="tracking-in-expand-fwd-top" id="header">
                    <span style={{float:"left"}}>    
                        <Switch
                            onChange={this.handleChange}
                            checked={this.state.checked}
                            uncheckedIcon={<i style={{color:'#2B143A',width:"1px"}} className="fas fa-sign-in-alt"></i>}
                            checkedIcon={<i style={{color:'#2B143A',width:"1px"}} className="fas fa-registered"></i>}
                            id="normal-switch"
                        />
                    </span>

                    <Image src={red}style={{float: "right"}}/>
                        Login
                </PageHeader>

                <LoginForm 
                    setSt={this.props.setSt}
                    usernameValue={this.state.NameValue}
                    usernameChange={this.NamehandleChange}
                    passwordValue={this.state.PasswordValue}
                    passwordChange={this.PasswordhandleChange}
                    rememberMe={this.clickedCheck}
                    users={this.props.mainstate.users}
                    signIn={this.signinHandler}
                />

            </div>
        )
    }
}

export default withRouter(Login)