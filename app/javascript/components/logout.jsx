import React from 'react';
import Container from '@material-ui/core/Container'
import axios from 'axios';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';


class Logout extends React.Component {

    logout(){
        console.log("logout button clicked and the id of this loc is: ", this.props.id)
        const link = document.createElement('a');
        link.setAttribute('href', '/users/sign_out');
        link.setAttribute('rel', 'nofollow');
        link.setAttribute('data-method', 'delete');
        document.body.appendChild(link);
        link.click();
    }

    render(){
        return (
            <FlightTakeoffIcon color="primary" fontSize="large" onClick = {(event)=>{this.logout(event)}}/>
            );
    }
}

export default Logout;