import React from 'react';
import axios from 'axios';
import Destact from './destact.jsx';
import Destaddact from './destaddact.jsx';
import Button from '@material-ui/core/Button'

class Deletedest extends React.Component {
    constructor(){
        super();

        this.state ={
            destinations:[],
        }
    }

    deleteDest(){
        console.log("delete button clicked and the id of this loc is: ", this.props.id)
          const url = '/destinations/'+ this.props.id;
          const whenError = (error) => {
              console.log("eerror", error)
          }
          axios.delete(url).catch(whenError)
          window.location.reload(false);
    }

    render(){

        const destinations = this.state.destinations.map((destination, index)=>{
            const urlx = '../destinations/' + (destination.id)
            console.log("this is urlx: ", urlx)
            return(<Button color="secondary" onClick = {(event)=>{this.deleteDest(event)}}>Delete this destination</Button>
                )
        })
        return (<Button color="secondary" onClick = {(event)=>{this.deleteDest(event)}}>Delete this destination</Button>
                );
    }
}

export default Deletedest;