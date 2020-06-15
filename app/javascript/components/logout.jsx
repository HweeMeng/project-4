import React from 'react';
import Container from '@material-ui/core/Container'
import axios from 'axios';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


class Logout extends React.Component {

    render(){
        return (
            <ExitToAppIcon color="primary"/>
            );
    }
}

export default Logout;