import React, { Component } from 'react'
import {FormGroup,Col,FormControl,HelpBlock,ControlLabel} from 'react-bootstrap'
class Email extends Component {
    render () {
        return (
            <div>
               <FormGroup validationState={this.props.validationStateEmail}>
                        <Col componentClass={ControlLabel} sm={2}></Col>
                        <Col sm={8}>
                            <FormControl
                                id="inputEmail"
                                type="email"
                                placeholder="Email"
                                value={this.props.emailValue}
                                onChange={this.props.emailChange}/>
                                <HelpBlock>{this.props.validationStateEmail==="error"?"Enter correct email please":null}</HelpBlock>
                        </Col>
                    </FormGroup>
            </div>
        )
    }
}

export default Email