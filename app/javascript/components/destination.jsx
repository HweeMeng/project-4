import React from 'react';
import Singledest from './singledest.jsx';
import Container from '@material-ui/core/Container'
import axios from 'axios';

class Destination extends React.Component {

    render(){
        return (
            <Container>
            <p>This is destination component</p>
            <Singledest />
            </Container>
            );
    }
}

export default Destination;