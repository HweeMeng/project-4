import React from 'react';
import axios from 'axios';
import Destact from './destact.jsx';
import Destaddact from './destaddact.jsx';
import Button from '@material-ui/core/Button'
import Deletedest from './deletedest.jsx';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Input from '@material-ui/core/Input'
import Container from '@material-ui/core/Container'
import CancelIcon from '@material-ui/icons/Cancel';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import PageviewIcon from '@material-ui/icons/Pageview';

class Destwithedit extends React.Component {
    constructor(){
        super();

        this.state ={
            destinations:[],
            editClicked:false,
            country:"",
            city:"",
            showClicked:false
        }
    }

    showButton(){
        console.log("show button clicked!! ", this.state.showClicked)
        if(this.state.showClicked === false){
        this.state.showClicked = true;
        this.setState({showClicked:this.state.showClicked})
        console.log("after set state!! ", this.state.showClicked)
        }else{
            this.state.showClicked = false;
            this.setState({showClicked:this.state.showClicked})
            console.log("after set state!! ", this.state.showClicked)
        }
    }

    deleteDest(){
        console.log("delete button clicked and the id of this loc is: ", this.props.destinations.id)
          const url = '/destinations/'+ this.props.destinations.id;
          const whenError = (error) => {
              console.log("eerror", error)
          }
          axios.delete(url).catch(whenError)
          window.location.reload(false);
    }

    handleClick(){
        console.log("button clicked and this is the current state: ", this.state.editClicked)
        if(this.state.editClicked == false){
        this.state.editClicked = true;
        this.state.country = this.props.destinations.country;
        this.state.city = this.props.destinations.city;
        this.setState({editClicked:this.state.editClicked,
                country:this.state.country,
                city:this.state.city,
        })
        console.log("This is after the set state: ", this.state.editClicked)
        }else{
        console.log("button clicked and this is the current state: ", this.state.editClicked)
        this.state.editClicked = false;
        this.setState({editClicked:this.state.editClicked})
        console.log("This is after the set state: ", this.state.editClicked)
        }
    }

    countryHandler(event){
      console.log("change", event.target.value);
      this.state.country = event.target.value
      this.setState({country:this.state.country})
      console.log("this.state.country in form", this.state.country)
    }

    cityHandler(event){
      console.log("change", event.target.value);
      this.state.city = event.target.value
      this.setState({city:this.state.city})
      console.log("this.state.city in form", this.state.city)
    }

    saveEdit(){
        console.log("Clicked add act!!!")
        console.log('This.state at click!: ', this.state)
        const url = /destinations/ + this.props.destinations.id
        axios.put(url, {
            country: this.state.country,
            city: this.state.city,
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
        if(this.state.showClicked === false){
        if (this.state.editClicked === false){
        console.log('this is where the this.props are for destwithedit!!!!!!!!', this.props.destinations)
        console.log("!@#$%^&*(^%$#@!#$%^&*  look here!!!", this.props.destinations.id)
            return(<div>
                     <p>Country Name: {this.props.destinations.country}</p>
                     <p>City Name: {this.props.destinations.city}</p>
                     <div id="destDelete">
                     <PageviewIcon color="primary" onClick={()=>{this.showButton()}}/>
                     <EditIcon color="primary" onClick={()=>{this.handleClick()}}>Edit!</EditIcon>
                     <DeleteIcon color = "secondary" onClick = {(event)=>{this.deleteDest(event)}}/>
                    </div>
                   </div>)
        }else{
            return(<Container>
            Details: <Input onChange={(event)=>{this.countryHandler(event);}} value = {this.state.country}></Input>
            <br></br>
            Links: <Input onChange={(event)=>{this.cityHandler(event);}} value = {this.state.city}></Input>
            <br></br>
            <div id="destacteditdel">
            <SaveAltIcon color="primary" fontSize="small" onClick={()=>{this.saveEdit()}}>Save!</SaveAltIcon>
            <CancelIcon color="secondary" fontSize="small" onClick={()=>{this.handleClick()}}>Cancel!</CancelIcon>
            </div>
            <Destaddact id={this.props.destinations.id}/>
            <Destact id={this.props.destinations.id} />
            </Container>
        )}
    }else{
        if (this.state.editClicked === false){
        console.log('this is where the this.props are for destwithedit!!!!!!!!', this.props.destinations)
        console.log("!@#$%^&*(^%$#@!#$%^&*  look here!!!", this.props.destinations.id)
            return(<div>
                     <p>Country Name: {this.props.destinations.country}</p>
                     <p>City Name: {this.props.destinations.city}</p>
                     <div id="destDelete">
                     <PageviewIcon color="primary" onClick={()=>{this.showButton()}}/>
                     <EditIcon color="primary" onClick={()=>{this.handleClick()}}>Edit!</EditIcon>
                     <DeleteIcon color = "secondary" onClick = {(event)=>{this.deleteDest(event)}}/>
                    </div>
                    <Destaddact id={this.props.destinations.id}/>
                    <Destact id={this.props.destinations.id} />
                   </div>)
        }else{
            return(<Container>
            Details: <Input onChange={(event)=>{this.countryHandler(event);}} value = {this.state.country}></Input>
            <br></br>
            Links: <Input onChange={(event)=>{this.cityHandler(event);}} value = {this.state.city}></Input>
            <br></br>
            <div id="destacteditdel">
            <SaveAltIcon color="primary" fontSize="small" onClick={()=>{this.saveEdit()}}>Save!</SaveAltIcon>
            <CancelIcon color="secondary" fontSize="small" onClick={()=>{this.handleClick()}}>Cancel!</CancelIcon>
            </div>
            <Destaddact id={this.props.destinations.id}/>
            <Destact id={this.props.destinations.id} />
            </Container>
        )}
    }
    }
}

export default Destwithedit;