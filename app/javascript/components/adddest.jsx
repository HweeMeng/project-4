import React from 'react';
import Container from '@material-ui/core/Container'
import axios from 'axios';
import Button from '@material-ui/core/Button'

class Adddest extends React.Component {
    constructor(){
        super();

        this.state ={
            country:"",
            city:""
        }
    }

    countryHandler(event){
      console.log("change", event.target.value);
      this.state.country = event.target.value
      console.log("this.state.comtrty in form", this.state.country)
    }

    cityHandler(event){
      console.log("change", event.target.value);
      this.state.city = event.target.value
      console.log("this.state.city in form", this.state.city)
    }

    onAdd(event){
        console.log("Clicked YAya!!!")
        console.log('This.state at click!: ', this.state)
        axios.post('/destinations', {
            country: this.state.country,
            city: this.state.city
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          console.log("axios posted.")
          window.location.reload(false);
    }



    render(){
        return (
            <Container>
                Country: <input onChange={(event)=>{this.countryHandler(event);}}/>
                <br></br>
                City: <input onChange={(event)=>{this.cityHandler(event);}}/>
                <br></br>
                <Button color="secondary" onClick={(event)=>{this.onAdd(event);}}>Add!</Button>
            </Container>
            );
    }
}

export default Adddest;