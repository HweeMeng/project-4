import React from 'react';
import Container from '@material-ui/core/Container'
import axios from 'axios';
import Button from '@material-ui/core/Button'
import Actualdestact from './actualdestact.jsx'

class Destact extends React.Component {
    constructor(){
        super();

        this.state ={
            activities:[],
            buttonClicked:false,
            editClicked:false
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

    componentDidMount(){
        console.log('component did mount runs')
        var params = this.props.id

          const url = '/destinations/'+ params + '/activities.json';
          const runWhenDone = (response) => {
            const data = response.data
            console.log("**************")
            console.log("**************")
            console.log("**************")
            console.log("**************")
            console.log( data );
            this.setState({ activities: data })
          }
          const whenError = (error) => {
              console.log("eerror", error)
          }
          axios.get(url).then(runWhenDone).catch(whenError)
        }

    render(){
        // if(this.state.buttonClicked === false){
            const activities = this.state.activities.map((activity, index)=>{
                console.log("this is activity: ", activity)
                return(<Actualdestact activity={activity}/>)
            })
                return (<div>{activities}</div>);
        // }
        // else{
        //     const activities = this.state.activities.map((activity, index)=>{
        //         console.log("this is activity: ", activity)
        //         return(<Container >
        //             <h1>edit has been clicked!</h1>
        //                  <strong>{activity.activity}</strong>
        //                  <p>Details: {activity.details}</p>
        //                  <p>Reference Links: {activity.links}</p>
        //                  <Button color="secondary" onClick={()=>{
        //                     this.handleClick();
        //                 }}> Edit!
        //                  </Button>
        //                </Container>)
        //     })
        //         return (<div>{activities}</div>);
        // }
        }
}

export default Destact;