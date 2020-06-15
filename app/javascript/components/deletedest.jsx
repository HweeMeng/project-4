import React from 'react';
import axios from 'axios';
import Destact from './destact.jsx';
import Destaddact from './destaddact.jsx';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

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
            return(<IconButton aria-label="delete" id = "destDelete">
                    <DeleteIcon onClick = {(event)=>{this.deleteDest(event)}}/>
                    </IconButton>
                // <Button color="secondary" onClick = {(event)=>{this.deleteDest(event)}}>Delete this destination</Button>
                )
        })
        return (<IconButton aria-label="delete" id = "destDelete">
                    <DeleteIcon onClick = {(event)=>{this.deleteDest(event)}}/>
                    </IconButton>
                );
    }
}

export default Deletedest;