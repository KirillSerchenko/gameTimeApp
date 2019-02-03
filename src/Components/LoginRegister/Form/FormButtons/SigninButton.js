import React, { Component } from 'react'
import {FormGroup,Col,Button} from 'react-bootstrap'
import md5 from 'md5'

class SigninButton extends Component {
    render () {
        const check=this.props.users.some(user => user.Username === this.props.usernameValue && user.Password === md5(this.props.passwordValue))
        
        return (
            <FormGroup>
                        <Col smOffset={2} sm={8}>
                            <Button
                                className={check?"blink-1":null}
                                type="submit"
                                bsStyle="primary"
                                onClick={this.props.signIn}
                                disabled={!check}>Sign in
                            </Button>
                        </Col>
                    </FormGroup>
        )
    }
}

export default SigninButton