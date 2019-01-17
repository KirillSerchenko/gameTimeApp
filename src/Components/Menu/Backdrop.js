import React from 'react'
import soccerPlayer from '../../Images/soccerPlayer.gif'
import {Button} from 'react-bootstrap'

//Backdrop black screen when success message show
const Backdrop = props => (
    <div
        id="backdrop"
        style={{
        visibility: props.mainstate.backdropVisibility,
        position: "absolute",
        top: "-10%",
        width: "100%",
        height: "110%",
        backgroundColor: "black",
        opacity: "0.8",
        border: "2px solid black",
        zIndex: "2"
    }}>

        <div id="SuccessMessage" style={{
            textAlign: "center"
        }}>

            {/* {text of message} */}
            <span
                style={{
                position: "relative",
                top: "40%",
                width: "50%",
                color: "green",
                fontWeight: "bold"
            }}>
                {props.mainstate.textOfBackdrop}
            </span>
            <br/> {/* {Gif soccer player image} */}
            <img
                src={soccerPlayer}
                id="soccerPlayer"
                alt="soccerPlayer"
                style={{
                position: "absolute",
                top: "5%",
                left: "40%"
            }}/> {/* {confirm button } */}
            <Button
                bsStyle="info"
                onClick={() => props.setSt({backdropVisibility: "hidden"})}
                style={{
                position: "relative",
                left: "1%",
                width: "40%"
            }}>OK</Button>
        </div>
    </div>
)

export default Backdrop;
