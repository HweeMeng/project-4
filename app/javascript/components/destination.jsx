import React from 'react';
import Singledest from './singledest.jsx';
import Container from '@material-ui/core/Container'
import axios from 'axios';

class Destination extends React.Component {

    render(){
        return (
            <Container>
            <div className ='destibox'>
            <a href="../destinations/new">Add a new destination</a>
            </div>
            <Singledest />
            </Container>
            );
    }
}

export default Destination;