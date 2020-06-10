import React from 'react';
import Container from '@material-ui/core/Container'
import axios from 'axios';

class Showact extends React.Component {
    constructor(){
        super();

        this.state ={
            activities:[]
        }
    }

    componentDidMount(){
        console.log('component did mount runs')
          const url = '/activities.json';
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
        const activities = this.state.activities.map((activity, index)=>{
            console.log("this is activity: ", activity)
            return(<Container >
                     <strong>{activity.activity}</strong>
                     <p>Details: {activity.details}</p>
                     <p>Reference Links: {activity.links}</p>
                   </Container>)
        })
        return (<div>{activities}</div>);
    }
}

export default Showact;