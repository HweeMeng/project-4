import React from 'react';
import Container from '@material-ui/core/Container'
import axios from 'axios';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

class Destaddact extends React.Component {
    constructor(){
        super();

        this.state ={
            addClicked:false,
            activity:"",
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

    activityHandler(event){
      console.log("change", event.target.value);
      this.state.activity = event.target.value
      console.log("this.state.activity in form", this.state.activity)
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
            // activity: this.state.activity,
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
          // window.location.reload(false);

    }

    render(){
        if(this.state.addClicked ===false){
        return (
            <Container>
                <Button color="secondary" onClick={()=>{this.addAct()}}>Add new activity</Button>
            </Container>
            )
        }else{
        return (
            <Container>
                <h1>Testing!</h1>
                Activity!: <Input onChange={(event)=>{this.activityHandler(event);}}/>
                <br></br>
                Details: <Input onChange={(event)=>{this.detailsHandler(event);}}/>
                <br></br>
                Reference Link!: <Input onChange={(event)=>{this.linksHandler(event);}}/>
                <br></br>
                <Button color="secondary" onClick={()=>{this.addAct()}}>Cancel</Button>
                <Button color="secondary" onClick={()=>{this.addActBtn()}}>Add!!!!</Button>
            </Container>
            )
        }
    }
}

export default Destaddact;