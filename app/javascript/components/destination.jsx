import React from 'react';
import Singledest from './singledest.jsx';
import Container from '@material-ui/core/Container'
class Destination extends React.Component {
    constructor(){
        super();

        this.state ={
            destinations:[]
        }
    }

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