import React, { Component } from 'react'
import {FormGroup,Col,FormControl,HelpBlock,ControlLabel} from 'react-bootstrap'
class Password extends Component {
    render () {
        
        const block=this.props.validationStatePassword!=='undefined'?
                        <HelpBlock>
                            {this.props.validationStatePassword==="error"?"At least 8 characters  must contain at least 1 uppercase letter,1 lowercase letter,and 1 number":null}
                        </HelpBlock>:""
        
        return (
            <div>
               <FormGroup   validationState={this.props.validationStatePassword!=='undefined'?this.props.validationStatePassword:null}>
                    <Col componentClass={ControlLabel} sm={2}></Col>
                    <Col sm={8}>
                        <FormControl
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                            value={this.props.passwordValue}
                            onChange={this.props.passwordChange}
                        />  
                        {block}
                    </Col>
                    
                </FormGroup>      
            </div>
        )
    }
}

export default Password