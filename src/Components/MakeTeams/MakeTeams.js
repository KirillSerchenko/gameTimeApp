import React, {Component} from 'react'
import {PageHeader,Image,Table} from 'react-bootstrap'
import pitch from '../../Icons/pitch.png'
import './MakeTeams.css'

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
                <Image className="pitch" src={pitch} />
                <Table id="playersTable" responsive="lg" responsive="md" responsive="sm">
  <thead>
    <tr>
      <th className="team1">Team1</th>
      <th className="team2">Team2</th>
      <th className="team3">Team3</th>
      <th className="team4">Team4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="team1">Player1</td>
      <td className="team2">Player1</td>
      <td className="team3">Player1</td>
      <td className="team4">Player1</td>
    </tr>
    <tr>
      <td className="team1">Player2</td>
      <td className="team2">Player2</td>
      <td className="team3">Player2</td>
      <td className="team4">Player2</td>
    </tr>
    <tr>
      <td  className="team1">Player3</td>
      <td  className="team2">Player3</td>
      <td  className="team3">Player3</td>
      <td  className="team4">Player3</td>
    </tr>
    <tr>
      <td className="team1">Player4</td>
      <td className="team2">Player4</td>
      <td className="team3">Player4</td>
      <td className="team4">Player4</td>
    </tr>
  </tbody>
</Table>
            </div>
        )
    }
}
