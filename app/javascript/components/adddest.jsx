import React from 'react';
import Container from '@material-ui/core/Container'
import axios from 'axios';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Input from '@material-ui/core/Input'
class Adddest extends React.Component {
    constructor(){
        super();

        this.state ={
            addClicked:false,
            country:"",
            city:""
        }
    }

    addBtnClicked(){
        if(this.state.addClicked === false){
            console.log("before click state: ", this.state.addClicked)
            this.state.addClicked = true;
            this.setState({addClicked:this.state.addClicked})
            console.log("after click state: ", this.state.addClicked)
        }else{
            console.log("before click state: ", this.state.addClicked)
            this.state.addClicked = false;
            this.setState({addClicked:this.state.addClicked})
            console.log("after click state: ", this.state.addClicked)
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
        if(this.state.addClicked === false){
            return(
                <AddIcon color="primary" onClick={()=>this.addBtnClicked()}></AddIcon>
                )
        }else{
            return (
                <Container>
                    Country: <Input onChange={(event)=>{this.countryHandler(event);}}/>
                    <br></br>
                    City: <Input onChange={(event)=>{this.cityHandler(event);}}/>
                    <br></br>
                    <SaveAltIcon color="primary" onClick={(event)=>{this.onAdd(event);}}>Add!</SaveAltIcon>
                    <CancelIcon color="secondary" onClick={()=>this.addBtnClicked()}/>
                </Container>
                );
        }
    }
}

export default Adddest;