import React, {Component} from 'react'
import {ListGroupItem} from 'react-bootstrap'

export default class PlayerPayment extends Component {

    state = {
        counter: 0,
        clicked: false
    }

    add = (id) => {
        let temp = this.props.counter;
        const temp2 = !this.state.clicked;
        fetch(`http://localhost:3000/players/${id}`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'PATCH',
            body: JSON.stringify({amount:Number(this.props.value),isPay:temp2})
        })
        
        temp2
            ? temp = Number(temp) + Number(this.props.value)
            : temp = Number(temp) - Number(this.props.value)
        this.setState({clicked: temp2})
        this.props.update({counter: Number(temp)});
    }

    componentDidMount(){this.setState({clicked:this.props.isPay,counter:this.props.amount})}

    render() {
        return (
            <div>
                <ListGroupItem
                    className={this.state.clicked
                    ? "swing-in-bottom-fwd"
                    : "fade-in"}
                    bsStyle={this.state.clicked 
                    ? "success"
                    : "danger"}
                    onClick={()=>this.add(this.props.id)}
                    id="paymentItem">{this.props.index + 1}.&nbsp;Name:{this.props.name}
                    <i
                        style={{
                        float: "right"
                    }}
                        class={this.state.clicked 
                        ? "fas fa-check"
                        : "fas fa-times"}></i>
                </ListGroupItem>
            </div>
        )
    }
}
