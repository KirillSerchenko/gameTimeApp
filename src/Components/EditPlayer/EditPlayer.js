import React, {Component} from 'react'
import {PageHeader, FormGroup, FormControl, Button} from 'react-bootstrap'
import {withRouter} from "react-router-dom"
import './EditPlayer.css'

class EditPlayer extends Component {

    state = {
        validationStatus: "error", //validation status sets only in first input
        value1: "", //value of first input
        value2: "", //value of second input
        value3: 1, //value of rating input
        visibility1: "hidden", //visibility of next form
        visibility2: "hidden" //visibility of change button
    }

    //Change value,validation of first input
    handleChange1 = (e) => {
        // --------------------------Some conditions to check exist
        // player,visibility.--------
        const checkMatchPlayer = this
            .props
            .mainstate
            .players
            .find(player => player.value === e.target.value.split(" ").join("")) //check if entered value empty
        const validStatus = checkMatchPlayer === undefined
            ? "error"
            : "success"
        const checkVisibility = checkMatchPlayer === undefined
            ? "hidden"
            : "visible" //visibility of next form
        // ---------------------------END------------------------------------
        // -------------update Current state-------------------------------------------
        this.setState({validationStatus: validStatus, value1: e.target.value, visibility1: checkVisibility})
    }
    // ----------------------------END------------------------------------
    // ----------------Change value of second
    // input-------------------------------------
    handleChange2 = (e) => this.setState({value2: e.target.value})
    // -------------------------END------------------------------------------------
    // ------------------------Change player logic----------------------------------
    changePlayer = () => {
        let objIndex = this
            .props
            .mainstate
            .players
            .findIndex(player => player.value === this.state.value1);
        let tempPlayers = [...this.props.mainstate.players]
        
        fetch(`http://localhost:3000/players/${tempPlayers[objIndex].id}`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'PUT',
            body: JSON.stringify({
                value:this.state.value2,
                rating:this.state.value3
            })
        })


        //Update object's name property.
        tempPlayers[objIndex] = {
            value: this.state.value2,
            rating: this.state.value3
        }


        this
            .props
            .setSt({
                backdropVisibility: "visible",
                textOfBackdrop: "Successfully edited player!",
                players: [...tempPlayers]
            })
        this
            .props
            .history
            .push('/'); //Pass to home screen
    }
    // -----------------------------------------------------------------------------
    // - ---

    /*Change Rating of Player*/
    numChange = (e) => this.setState({value3: e.target.value})
    //------------------------------------------------------------------------

    render() {
        return (
            <div id="container">
                {/*--------------------------Component Header-------------------------------------------*/}
                <PageHeader className="tracking-in-expand-fwd-top" id="header">Edit Player</PageHeader>

                {/*-----------------------------First Form for search player to edit----------------------------------------------------- */}
                <form id="myForm">
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.state.validationStatus}>{/*Validation status error*/}

                        <FormControl type="text" maxLength={20} value={this.state.value1} //value of first input 
                            placeholder="Enter Player Name" onChange={this.handleChange1}/>
                        <FormControl.Feedback/>
                    </FormGroup>
                </form>

                {/*------------------------------Second Form Appears when player exist in db-------------------------------- */}
                <form
                    id="myForm"
                    style={{
                    visibility: this.state.visibility1
                }}
                    className={this.state.visibility1 === "visible"
                    ? "scale-in-ver-center"
                    : "slide-out-bck-center"}>{/*Change class name for animation according visibility1*/}
                    <FormGroup controlId="formBasicText">
                        <FormControl
                            type="text"
                            maxLength={20}
                            value={this.state.value2}
                            placeholder="Enter New Name"
                            onChange={this.handleChange2}/> {/*-------------------------------------------Rating Change input with number type------------------------------------------ */}
                        <input
                            onChange={this.numChange}
                            id="inputEdit"
                            value={this.state.value3}
                            type="number"
                            name="quantity"
                            min="1"
                            max="5"/>
                        <FormControl.Feedback/>
                    </FormGroup>
                </form>

                {/*------------------------------------------------------Make changes Button------------------------------------------------------------- */}
                <Button bsStyle="warning" onClick={this.changePlayer} style={{
                    visibility: this.state.value2 !== ""
                        ? "visible"
                        : "hidden"
                }} //Appears when second input not empty
                    className={this.state.value2 !== ""
                    ? "slide-in-elliptic-top-fwd"
                    : null}>
                    Change
                </Button>
            </div>
        )
    }
}

export default withRouter(EditPlayer); //HOC Component for get history object