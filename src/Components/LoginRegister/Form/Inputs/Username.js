import React, {Component} from 'react'
import {FormGroup,Col,FormControl,ControlLabel,HelpBlock} from 'react-bootstrap'

class Username extends Component {
    render() {
        const block=this.props.validationStateUsername!=='undefined'?
                        <HelpBlock>
                            {this.props.validationStateUsername ==="error"?"Sorry this user already exist":null}
                        </HelpBlock>:""
        return (
            <FormGroup  validationState={this.props.validationStateUsername!=='undefined'?this.props.validationStateUsername:null} >
                <Col componentClass={ControlLabel} sm={2}></Col>
                <Col sm={8}>
                    <FormControl
                        id="inputUsername"
                        autoFocus
                        type="text"
                        placeholder="Username"
                        value={this.props.usernameValue}
                        onChange={this.props.usernameChange}/>
                        {block}
                </Col>
            </FormGroup>
        )
    }
}

export default Username