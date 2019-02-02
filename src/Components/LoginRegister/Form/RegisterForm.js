import React, { Component } from 'react'
import Username from './Inputs/Username'
import Email from './Inputs/Email'
import Password from './Inputs/Password'
import RegisterButton from './FormButtons/RegisterButton'
import {Form} from 'react-bootstrap'

class RegisterForm extends Component {
    render () {
        return (
            <div>
                <Form id="RegisterForm" horizontal>
                   <Username
                        usernameValue={this.props.usernameValue}
                        usernameChange={this.props.usernameChange}
                        validationStateUsername={this.props.validationStateUsername}
                   />
                    <Email 
                        emailValue={this.props.emailValue}
                        emailChange={this.props.emailChange}
                        validationStateEmail={this.props.validationStateEmail}
                   />
                   <Password 
                        passwordValue={this.props.passwordValue}
                        passwordChange={this.props.passwordChange}
                        validationStatePassword={this.props.validationStatePassword}
                   />
                   <RegisterButton 
                        checkEmpties={this.props.checkEmpties}
                        submit={this.props.submit}
                   />  
                 </Form>
            </div>
        )
    }
}

export default RegisterForm