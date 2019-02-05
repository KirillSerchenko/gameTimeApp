import React, {Component} from 'react'
import Nav from './MenuNavs/MenuNavs'
import {withRouter} from "react-router-dom";
import runPlayer from '../../Images/runPlayer.gif'
import {Image} from 'react-bootstrap'
import Backdrop from './Backdrop'
import  MenuHeader from './MenuHeader/MenuHeader'
import {server} from '../../Server/serverApi'
import '../Menu/Menu.css'

class Menu extends Component {
    state = {
        display: ["hidden","hidden","hidden","hidden","hidden","hidden","hidden"],
    }

    showIcon = (num) => {
        const arrDisplay = [...this.state.display];
        arrDisplay[num] = "visible";
        this.setState({display: arrDisplay})
    }

    hideIcon = () => this.setState({display:["hidden","hidden","hidden","hidden","hidden","hidden","hidden"]})
    
    //Pass to match screen according num with history property 
    passToScreen = (num) => {
        switch (num) {
            case(0):
                this
                    .props
                    .history
                    .push("/AddPlayer");
                break;
            case(1):
                this
                    .props
                    .history
                    .push("/RemovePlayer");
                break;
            case(2):
                this
                    .props
                    .history
                    .push("/EditPlayer");
                break;
            case(3):
                this
                    .props
                    .history
                    .push("/Payment");
                break;
            case(4):
                this
                    .props
                    .history
                    .push("/StartGame");
                break;
            case(5):
                this
                    .props
                    .history
                    .push("/MakeTeams");
                break;
            case(6):
                this
                    .props
                    .history
                    .push("/List");
                break;
            default:
                this
                    .props
                    .history
                    .push("/");
                break;
        }
    }

    async getData(){
        const players= await server(null,'getPlayersDb')
        this.props.setSt({players})
     }

    componentDidMount(){
        this.getData()
        const username=JSON.parse(localStorage.getItem("Users"))
        if(username){
            this.props.setSt({currentUser:username})
        }
    }

    //------------------------------------------render function----------------------------------------------------------
    render() {
        return (
            <div id="container">
                <Backdrop mainstate={this.props.mainstate} setSt={this.props.setSt}/>
                <MenuHeader setSt={(el)=>this.props.setSt(el)} username={this.props.mainstate} />
                <Nav clicked={this.passToScreen} showIcon={this.showIcon} visibilityArray={this.state.display} hideIcon={this.hideIcon}/>
                <Image className="slide-in-bck-center" id="runPlayer" src={runPlayer} />
            </div>

        )
    }
}

export default withRouter(Menu);
