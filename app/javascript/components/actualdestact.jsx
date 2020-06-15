import React from 'react';
import Container from '@material-ui/core/Container'
import axios from 'axios';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

class Actualdestact extends React.Component {
    constructor(){
        super();

        this.state ={
            activities:[],
            buttonClicked:false,
            activity:"",
            details:"",
            links:""
        }
    }

    handleClick(){
        console.log("button clicked and this is the current state: ", this.state.buttonClicked)
        if(this.state.buttonClicked == false){
        this.state.buttonClicked = true;
        this.state.activity = this.props.activity.activity;
        this.state.details = this.props.activity.details;
        this.state.links = this.props.activity.links;
        this.setState({buttonClicked:this.state.buttonClicked,
                activity:this.state.activity,
                details:this.state.details,
                links:this.state.links
        })
        console.log("This is after the set state: ", this.state.buttonClicked)
        }else{
        console.log("button clicked and this is the current state: ", this.state.buttonClicked)
        this.state.buttonClicked = false;
        this.setState({buttonClicked:this.state.buttonClicked})
        console.log("This is after the set state: ", this.state.buttonClicked)
        }
    }

    saveEdit(){
        console.log("Clicked add act!!!")
        console.log('This.state at click!: ', this.state)
        const url = /activities/ + this.props.activity.id
        axios.put(url, {
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

    deleteAct(){
        console.log("delete button clicked and the id of this loc is: ", this.props.id)
          const url = '/activities/'+ this.props.activity.id;
          const whenError = (error) => {
              console.log("eerror", error)
          }
          axios.delete(url).catch(whenError)
          window.location.reload(false);
    }

    activityHandler(event){
      console.log("change", event.target.value);
      this.state.activity = event.target.value
      this.setState({activity:this.state.activity})
      console.log("this.state.activity in form", this.state.activity)
    }

    detailsHandler(event){
      console.log("change", event.target.value);
      this.state.details = event.target.value
      this.setState({details:this.state.details})
      console.log("this.state.details in form", this.state.details)
    }

    linksHandler(event){
      console.log("change", event.target.value);
      this.state.links = event.target.value
      this.setState({links:this.state.links})
      console.log("this.state.details in form", this.state.links)
    }

    render(){
        if(this.state.buttonClicked === false){
            console.log("component ran", this.props)
                return (<Container>
                    Activity name: {this.props.activity.activity}
                    <br></br>
                    Activity details: {this.props.activity.details}
                    <br></br>
                    Activities links: {this.props.activity.links}
                    <br></br>
                    <Button color="secondary" onClick={()=>{this.handleClick()}}>Edit!</Button>
                    <Button color="secondary" onClick={()=>{this.deleteAct()}}>Delete!</Button>
                </Container>);
        }else{
            return(<Container>
            Activity: <Input onChange={(event)=>{this.activityHandler(event);}} value = {this.state.activity}></Input>
            <br></br>
            Details: <Input onChange={(event)=>{this.detailsHandler(event);}} value = {this.state.details}></Input>
            <br></br>
            Links: <Input onChange={(event)=>{this.linksHandler(event);}} value = {this.state.links}></Input>
            <br></br>
            <Button color="secondary" onClick={()=>{this.handleClick()}}>Cancel!</Button>
            <Button color="secondary" onClick={()=>{this.saveEdit()}}>Save!</Button>
            </Container>
        )}

        }
}

export default Actualdestact;