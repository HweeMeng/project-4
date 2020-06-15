import React from 'react';
import Singledest from './singledest.jsx';
import Container from '@material-ui/core/Container'
import axios from 'axios';
import Button from '@material-ui/core/Button'
import Adddest from './adddest.jsx';
import Adddestpanel from './adddestpanel.jsx';
import Logout from './logout.jsx';

class Destination extends React.Component {
    constructor(){
        super();

        this.state ={
            addDest:false
        }
    }

    render(){
        return (
            <Container maxWidth="sm" id="main">
            <span id="logout" ><Logout/></span>
            <div className ='destibox'>
            <Adddest />
            </div>
            <Singledest />
            </Container>
            );
    }
}

export default Destination;