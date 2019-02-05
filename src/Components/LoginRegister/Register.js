import React, {Component} from 'react'
import {PageHeader} from 'react-bootstrap'
import {withRouter} from "react-router-dom";
import md5 from 'md5'
import RegisterForm from './Form/RegisterForm'
import {Image} from 'react-bootstrap'
import red from '../../Icons/red.png'
import Switch from "react-switch"
import { server } from '../../Server/serverApi';
import './Style.css'


class Register extends Component {

    state = {
        EmailValue: "", //Email value
        PasswordValue: "", //Password value
        NameValue: "", //Username value
        validationStateEmail:null,
        emailHelpBlock:"Enter email please",
        validationStatePassword:null,
        validationStateUsername:null,
        checked:false
    }


    //Changed functions
    EmailhandleChange = (e) =>{
        //Mail validation 
        let re =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        if(re.test(e.target.value))
            this.setState({EmailValue: e.target.value,validationStateEmail:"success"})
        else
            this.setState({EmailValue: e.target.value,validationStateEmail:"error"})
    }

    PasswordhandleChange = (e) => {
        let re =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/gm
        if(re.test(e.target.value))
            this.setState({PasswordValue: e.target.value,validationStatePassword:"success"})
        else
            this.setState({PasswordValue: e.target.value,validationStatePassword:"error"})
    }
       
    NamehandleChange = (e) => {
        
        if(this.props.mainstate.users.some(user => user.Username === e.target.value.trim()))
            this.setState({NameValue: e.target.value,validationStateUsername:"error"})
        else
            this.setState({NameValue: e.target.value,validationStateUsername:"success"})
    }

    //submit handler
    submitHandler = () => {
        let usersCopy = this.props.mainstate.users
        server({Email: this.state.EmailValue, Password:md5(this.state.PasswordValue), Username: this.state.NameValue},'addUser')
        usersCopy.push({Email: this.state.EmailValue, Password:md5(this.state.PasswordValue), Username: this.state.NameValue})
        this.props.setSt({isRegistered: true, users: usersCopy})
    }

    //check if exist user in local
    componentDidMount = () => {
        const x = localStorage.getItem(`Users`)
        if (x) {this.props.setSt({currentUser:x,isAuth: true})} //Check if exist user in local storage
            this.props.history.push("/")
    }

    //check validation!
    emptyChecks = () => {
        if (this.state.NameValue.trim(" ") === ""
          || this.state.EmailValue.trim(" ") === ""
          || this.state.PasswordValue.trim(" ") === ""
          || this.state.validationStateEmail==="error"
          || this.state.validationStatePassword==="error"
          || this.state.validationStateUsername ==="error") 
        return true
    }

    handleChange=(checked)=> {
        this.props.setSt({isRegistered:checked})
        
    }

    render() {
        

        return (
            <div id="container" className="scale-in-ver-center">
                  
                <PageHeader className="tracking-in-expand-fwd-top" id="header">
                <span style={{float:"left"}}>    
                    <Switch
                        onChange={this.handleChange}
                        checked={this.state.checked}
                        uncheckedIcon={<i style={{width:"1px"}} className="fas fa-sign-in-alt"></i>}
                        checkedIcon={<i style={{width:"1px"}} className="fas fa-registered"></i>}
                        id="normal-switch"
                    />
                    </span>
                    <Image src={red} style={{float: "right"}}/>
                    Register
                </PageHeader>
                
                <RegisterForm  
                    usernameValue={this.state.NameValue}
                    usernameChange={this.NamehandleChange}
                    validationStateUsername={this.state.validationStateUsername}
                    emailValue={this.state.EmailValue}
                    emailChange={this.EmailhandleChange}
                    validationStateEmail={this.state.validationStateEmail}
                    passwordValue={this.state.PasswordValue}
                    passwordChange={this.PasswordhandleChange}
                    validationStatePassword={this.state.validationStatePassword}
                    checkEmpties={this.emptyChecks}
                    submit={this.submitHandler}
                />

            </div>
        )
    }
}

export default withRouter(Register);