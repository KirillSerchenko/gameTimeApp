import React, {Component} from 'react'
import {PageHeader,HelpBlock} from 'react-bootstrap'
import {withRouter} from "react-router-dom";
import {
    Form,
    FormGroup,
    FormControl,
    Col,
    Button,
    ControlLabel,
    Image
} from 'react-bootstrap'
import red from '../../Icons/red.png'
import './Style.css'

class Register extends Component {

    state = {
        EmailValue: "", //Email value
        PasswordValue: "", //Password value
        NameValue: "", //Username value
        validationStateEmail:"",
        emailHelpBlock:"Enter email please",
        validationStatePassword:""
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
       
    NamehandleChange = (e) => this.setState({NameValue: e.target.value})

    //submit handler
    submitHandler = () => {
        let usersCopy = this.props.mainstate.users
        usersCopy.push({Email: this.state.EmailValue, Password: this.state.PasswordValue, Username: this.state.NameValue})
        this
            .props
            .setSt({isRegistered: true, users: usersCopy})
    }

    //check if exist user in local
    componentDidMount = () => {
        const x = localStorage.getItem(`Users`)
        if (x != null) {
            //Check if exist user in local storage
            this
                .props
                .setSt({isAuth: true})
        }
        this
            .props
            .history
            .push("/")
    }

    //check validation!
    emptyChecks = () => {
        if (this.state.NameValue.trim(" ") == ""
          || this.state.EmailValue.trim(" ") == ""
          || this.state.PasswordValue.trim(" ") == ""
          ||this.state.validationStateEmail=="error"
          ||this.state.validationStatePassword=="error") 
            return true
    }

    render() {
        

        return (
            <div id="container">
                <PageHeader className="tracking-in-expand-fwd-top" id="header">
                    <Image
                        src={red}
                        style={{
                        float: "right"
                    }}/>
                    Register
                </PageHeader>

                <Form id="RegisterForm" horizontal>

                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}></Col>
                        <Col sm={8}>
                            <FormControl
                                id="inputUsername"
                                autoFocus
                                type="text"
                                placeholder="Username"
                                value={this.state.NameValue}
                                onChange={(e) => this.NamehandleChange(e)}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail" validationState={this.state.validationStateEmail}>
                        <Col componentClass={ControlLabel} sm={2}></Col>
                        <Col sm={8}>
                            <FormControl
                                id="inputEmail"
                                type="email"
                                placeholder="Email"
                                value={this.state.EmailValue}
                                onChange={(e) => this.EmailhandleChange(e)}/>
                                <HelpBlock>{this.state.validationStateEmail=="error"?"Enter correct email please":null}</HelpBlock>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword"  validationState={this.state.validationStatePassword}>
                        <Col componentClass={ControlLabel} sm={2}></Col>
                        <Col sm={8}>
                            <FormControl
                                id="inputPassword"
                                type="password"
                                placeholder="Password"
                                value={this.state.PasswordValue}
                                onChange={(e) => this.PasswordhandleChange(e)}
                               />
                                 <HelpBlock>
                                 {this.state.validationStatePassword=="error"?"At least 8 characters  must contain at least 1 uppercase letter,1 lowercase letter,and 1 number":null}
                                 </HelpBlock>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={8}>
                            <Button
                                className={!this.emptyChecks()?"pulsate-bck":null}
                                disabled={this.emptyChecks()}
                                type="submit"
                                onClick={this.submitHandler}
                                bsStyle="warning"
                                style={{
                                color: "black"
                            }}>Register</Button>
                        </Col>
                    </FormGroup>
                </Form>;
            </div>
        )
    }
}

export default withRouter(Register);