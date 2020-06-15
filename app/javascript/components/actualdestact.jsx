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
            buttonClicked:false
        }
    }

    handleClick(){
        console.log("button clicked and this is the current state: ", this.state.buttonClicked)
        if(this.state.buttonClicked == false){
        this.state.buttonClicked = true;
        this.setState({buttonClicked:this.state.buttonClicked})
        console.log("This is after the set state: ", this.state.buttonClicked)
        }else{
        console.log("button clicked and this is the current state: ", this.state.buttonClicked)
        this.state.buttonClicked = false;
        this.setState({buttonClicked:this.state.buttonClicked})
        console.log("This is after the set state: ", this.state.buttonClicked)
        }
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
                </Container>);
        }else{
            return(<Container>
            Activity: <Input />
            <br></br>
            Details: <Input />
            <br></br>
            Links: <Input />
            <br></br>
            <Button color="secondary" onClick={()=>{this.handleClick()}}>Cancel!</Button>
            <Button color="secondary" onClick={()=>{this.handleClick()}}>Save!</Button>
            </Container>
        )}

        }
}

export default Actualdestact;