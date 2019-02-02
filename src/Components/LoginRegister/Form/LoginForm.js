import React, { Component } from 'react'
import Username from '../Form/Inputs/Username'
import Password from '../Form/Inputs/Password'
import {Form} from 'react-bootstrap'
import RememberMe from './RememberMe/RememberMe';
import SigninButton from './FormButtons/SigninButton';

class LoginForm extends Component {
    render () {
        return (
            <div>
                <Form id="LoginForm" horizontal>
                 <Username
                    usernameValue={this.props.usernameValue}
                    usernameChange={this.props.usernameChange}
                />
                <Password 
                    passwordValue={this.props.passwordValue}
                    passwordChange={this.props.passwordChange}
                />
                <RememberMe 
                    rememberMe={this.props.rememberMe}
                />
                <SigninButton 
                   users={this.props.users}
                   signIn={this.props.signIn}
                   usernameValue={this.props.usernameValue}
                   passwordValue={this.props.passwordValue}
                />
                </Form>
            </div>
        )
    }
}

export default LoginForm