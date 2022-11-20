import React from "react";
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={count :0};

  }

  handleIncrement = () => {
    if(this.state.count < 10){
      this.setState({ count: this.state.count + 1 });
    }
  };

  handleDecrement = () => {
    if(this.state.count > -10){
      this.setState({ count: this.state.count - 1 });
    }
  };
  class_name = ()=>{
     return this.state.count > 0 ? "green" : "red";
  }

  render(){
    return(
      <div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <br></br>
        <div className={this.class_name()}>
          {this.state.count}

        </div>
      </div>


    );

  }
  

}
export default App;
