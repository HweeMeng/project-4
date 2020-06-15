import React from 'react';
import Container from '@material-ui/core/Container'
import axios from 'axios';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';

class Destaddact extends React.Component {
    constructor(){
        super();

        this.state ={
            addClicked:false,
            header:"",
            details:"",
            links:""
        }
    }

    addAct(){
        console.log('add new act clicked! before change of state', this.state.addClicked)
        if(this.state.addClicked === false){
        this.state.addClicked = true;
        console.log('add new act clicked! before change of state', this.state.addClicked)
        this.setState({addClicked:this.state.addClicked});
        }else{
            this.state.addClicked = false;
            console.log('add new act clicked! before change of state', this.state.addClicked)
            this.setState({addClicked:this.state.addClicked});
        }
    }

    headerHandler(event){
      console.log("change", event.target.value);
      this.state.header = event.target.value
      console.log("this.state.header in form", this.state.header)
    }

    detailsHandler(event){
      console.log("change", event.target.value);
      this.state.details = event.target.value
      console.log("this.state.details in form", this.state.details)
    }

    linksHandler(event){
      console.log("change", event.target.value);
      this.state.links = event.target.value
      console.log("this.state.details in form", this.state.links)
    }

    addActBtn(event){
        console.log("Clicked add act!!!")
        console.log('This.state at click!: ', this.state)
        axios.post('/activities', {
            header: this.state.header,
            details: this.state.details,
            links: this.state.links,
            destination_id: this.props.id
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
        if(this.state.addClicked ===false){
        return (
            <Container>
                <AddIcon color="primary" onClick={()=>{this.addAct()}}>Add new activity</AddIcon>
            </Container>
            )
        }else{
        return (
            <Container>
                header!: <Input onChange={(event)=>{this.headerHandler(event);}}/>
                <br></br>
                Details: <Input onChange={(event)=>{this.detailsHandler(event);}}/>
                <br></br>
                Reference Link!: <Input onChange={(event)=>{this.linksHandler(event);}}/>
                <br></br>
                <AddIcon color="primary" onClick={()=>{this.addActBtn()}}>Add!!!!</AddIcon>
                <CancelIcon color="secondary" onClick={()=>{this.addAct()}}>Cancel</CancelIcon>
            </Container>
            )
        }
    }
}

export default Destaddact;