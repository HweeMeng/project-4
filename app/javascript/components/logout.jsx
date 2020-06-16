import React from 'react';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
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
        return (<div>
            <Button color="primary" endIcon={<FlightTakeoffIcon></FlightTakeoffIcon>} onClick = {(event)=>{this.logout(event)}} fontSize="large" >logout</Button>
            </div>
            );
    }
}

export default Logout;