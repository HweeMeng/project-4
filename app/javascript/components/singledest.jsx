import React from 'react';

class Singledest extends React.Component {
    constructor(){
        super();

        this.state ={
            destinations:[]
        }
    }

    render(){
        return (<p>This is singledest component</p>);
    }
}

export default Singledest;