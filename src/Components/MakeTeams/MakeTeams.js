import React, {Component} from 'react'
import {PageHeader, Jumbotron} from 'react-bootstrap'

export default class MakeTeams extends Component {

    state = {
        players1: [],
        players2: [],
        players3: [],
        players4: [],
        players5: []
    }

   

    render() {

        return (
            <div id="container">
                <PageHeader
                    className="tracking-in-expand-fwd-top"
                    style={{
                    fontFamily: "'Alfa Slab One', cursive",
                    color: "green",
                    textShadow: "2px 2px lightgreen"
                }}>Make Teams</PageHeader>
                <Jumbotron id="playersTable">
                    {this
                        .state
                        .players1
                        .map((item, i) => <div key={i}>{item.value}</div>)}
                    {this
                        .state
                        .players2
                        .map((item, i) => <div key={i}>{item.value}</div>)}
                    {this
                        .state
                        .players3
                        .map((item, i) => <div key={i}>{item.value}</div>)}
                    {this
                        .state
                        .players4
                        .map((item, i) => <div key={i}>{item.value}</div>)}
                    {this
                        .state
                        .players5
                        .map((item, i) => <div key={i}>{item.value}</div>)}
                </Jumbotron>
            </div>
        )
    }
}
