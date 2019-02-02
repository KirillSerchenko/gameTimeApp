import React, {Component} from 'react'
import {FormGroup, Col, Button} from 'react-bootstrap'

class RegisterButton extends Component {
    render() {
        return (
            <div>
                <FormGroup>
                    <Col smOffset={2} sm={8}>
                        <Button
                            className={!this.props.checkEmpties()? "pulsate-bck": null}
                            disabled={this.props.checkEmpties()}
                            type="submit"
                            onClick={this.props.submit}
                            bsStyle="warning"
                            style={{
                            color: "black"
                        }}>Register</Button>
                    </Col>
                </FormGroup>
            </div>
        )
    }
}

export default RegisterButton