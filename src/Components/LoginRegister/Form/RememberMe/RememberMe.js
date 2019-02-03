import React, { Component } from 'react'
import {FormGroup,Col,Checkbox} from 'react-bootstrap'

class RememberMe extends Component {
    render () {
        return (
                <FormGroup>
                        <Col smOffset={2} sm={8}>
                            <Checkbox onClick={this.props.rememberMe}>Remember me</Checkbox>
                        </Col>
                </FormGroup> 
          
        )
    }
}

export default RememberMe