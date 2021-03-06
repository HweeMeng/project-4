import React from 'react';
import Container from '@material-ui/core/Container'
import axios from 'axios';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

class Actualdestact extends React.Component {
    constructor(){
        super();

        this.state ={
            activities:[],
            buttonClicked:false,
            header:"",
            details:"",
            links:""
        }
    }

    handleClick(){
        console.log("button clicked and this is the current state: ", this.state.buttonClicked)
        if(this.state.buttonClicked == false){
        this.state.buttonClicked = true;
        this.state.header = this.props.activity.header;
        this.state.details = this.props.activity.details;
        this.state.links = this.props.activity.links;
        this.setState({buttonClicked:this.state.buttonClicked,
                header:this.state.header,
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

    deleteAct(){
        console.log("delete button clicked and the id of this loc is: ", this.props.id)
          const url = '/activities/'+ this.props.activity.id;
          const whenError = (error) => {
              console.log("eerror", error)
          }
          axios.delete(url).catch(whenError)
          window.location.reload(false);
    }

    headerHandler(event){
      console.log("change", event.target.value);
      this.state.header = event.target.value
      this.setState({header:this.state.header})
      console.log("this.state.header in form", this.state.header)
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
                    Activity: {this.props.activity.header}
                    <br></br>
                    Details: {this.props.activity.details}
                    <br></br>
                    Links: {this.props.activity.links}
                    <br></br>
                    <div id="destacteditdel">
                    <EditIcon color="primary" fontSize="small" onClick={()=>{this.handleClick()}}>Edit!</EditIcon>
                    <DeleteIcon color="secondary" fontSize="small" onClick={()=>{this.deleteAct()}}>Delete!</DeleteIcon>
                    </div>
                </Container>);
        }else{
            return(<Container>
            Activity: <Input id="input10" onChange={(event)=>{this.headerHandler(event);}} value = {this.state.header}></Input>
            <br></br>
            Details: <Input  id="input11" onChange={(event)=>{this.detailsHandler(event);}} value = {this.state.details}></Input>
            <br></br>
            Links: <Input  id="input12" onChange={(event)=>{this.linksHandler(event);}} value = {this.state.links}></Input>
            <br></br>
            <div id="destacteditdel">
            <SaveAltIcon color="primary" fontSize="small" onClick={()=>{this.saveEdit()}}>Save!</SaveAltIcon>
            <CancelIcon color="secondary" fontSize="small" onClick={()=>{this.handleClick()}}>Cancel!</CancelIcon>
            </div>
            </Container>
        )}

        }
}

export default Actualdestact;