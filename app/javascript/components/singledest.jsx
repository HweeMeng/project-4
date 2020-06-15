import React from 'react';
import axios from 'axios';
import Destact from './destact.jsx';
import Destaddact from './destaddact.jsx';
import Button from '@material-ui/core/Button'
import Deletedest from './deletedest.jsx';

class Singledest extends React.Component {
    constructor(){
        super();

        this.state ={
            destinations:[],
            addClicked:false
        }
    }

    componentDidMount(){
          const url = '/destinations.json';
          const runWhenDone = (response) => {
            const data = response.data
            console.log("**************")
            console.log("**************")
            console.log("**************")
            console.log("**************")
            console.log( data );
            this.setState({ destinations: data })
          }
          const whenError = (error) => {
              console.log("eerror", error)
          }
          axios.get(url).then(runWhenDone).catch(whenError)
        }

    deleteDest(){
        console.log("delete button clicked!! ")
    }

    render(){

        const destinations = this.state.destinations.map((destination, index)=>{
            const urlx = '../destinations/' + (destination.id)
            console.log("this is urlx: ", urlx)
            return(<div className ='destibox'>
                     <p>Country Name: {destination.country}</p>
                     <p>City Name: {destination.city}</p>
                     <Deletedest id={destination.id}/>
                     <Destaddact id={destination.id}/>
                     <Destact id={destination.id} />
                   </div>)
        })
        return (<div>{destinations}</div>);
    }
}

export default Singledest;