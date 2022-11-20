
import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {seconds: 0 ,minutes: 0 ,hours: 0 };
  }

  handleMinutes=(event)=>{
    let n = Math.floor(event.target.value);
    this.setState({seconds: n*60 ,minutes: n,hours: n/60});
  }
  handleSeconds=(event)=>{
    let n = Math.floor(event.target.value);
    this.setState({seconds: n ,minutes: n/60,hours: n/(60*60)});
  }
  handleHours=(event)=>{
    let n = Math.floor(event.target.value);
    this.setState({seconds: n*60*60 ,minutes: n*60,hours: n});
  }



  render(){
    return(
      <div>
        <label htmlFor='seconds'>Seconds</label>
        <input  id="seconds" onChange={() => this.handleSeconds}/>
        <label htmlFor='minutes'>Minutes</label>
        <input  id="minutes" onChange={this.handleMinutes}/>
        <label htmlFor='hours'>Hours</label>
        <input  id="hours" onChange={this.handleHours}/>
        <h2>seconds : {this.state.seconds} , minutes : {this.state.minutes} ,hours : {this.state.hours}</h2>
      </div>
    );
  }
  
}

export default App;
