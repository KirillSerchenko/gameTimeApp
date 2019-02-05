import React, { Component } from 'react'
import PlayerPayment from '../PlayerPayment'
import {ListGroup} from 'react-bootstrap'

export default class PaymentsList extends Component {
  render() {
    return (
        <ListGroup id="paymentList">
                    {this.props.players
                        .map((player, index) =>< PlayerPayment value={this.props.value} id={player.id} update = {this.props.update}
                            name = {player.value}
                            isPay ={player.isPay}
                            amount={player.amount}
                            index = {index}
                            counter = {this.props.counter}
                            value = {this.props.value} />)}
        </ListGroup>
    )
  }
}
