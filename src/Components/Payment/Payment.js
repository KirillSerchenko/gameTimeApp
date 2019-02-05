import React, {Component} from 'react'
import {PageHeader} from 'react-bootstrap'
import {FormGroup, InputGroup, FormControl} from 'react-bootstrap'
import PaymentsList from './PaymentsList/PaymentsList'

import './Payment.css'

export default class Payment extends Component {

    state = {
        counter: 0, //Amount of money
        value: 10 //value of current price
    }

    changeValue = (e) => this.setState({value: e.target.value}) //Change the value of price per game

    componentDidMount(){
        let count=0
        this.props.mainstate.players.map((player, index) => player.isPay?count+=player.amount:null )
        this.setState({counter:count})
    }


    render() {
        return (
            <div id="container">
                <PageHeader className="tracking-in-expand-fwd-top" id="header">Payment</PageHeader>
                {/*--------------------------{Counter of money in header}------------------------ */}
                <h1 id="counter" style={{
                    color: "white"
                }}>Sum:{this.state.counter}
                    &#8362;</h1>
                {/* -----------------------{Input for price per game}------------------------------ */}
                <FormGroup>
                    <InputGroup id="inputNum">
                        <InputGroup.Addon>
                            &#8362;
                        </InputGroup.Addon>
                        <FormControl
                            id="numControl"
                            type="number"
                            value={this.state.value}
                            onChange={this.changeValue}
                            min={10}
                            max={50}/>
                        <InputGroup.Addon>.00</InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                {/* {---------------------END----------------------------------------------------------} */}
                {/* {-----------------------------List of Players--------------------------------------} */}
                
                <PaymentsList 
                    players={this.props.mainstate.players}
                    value={this.state.value}
                    update={(obj) => this.setState(obj)}
                    counter={this.state.counter}
                />
            
            
            {/* {-----------------------------END of list--------------------------------------} */}
            </div>
        )
    }
}
