
import './App.css';
import React from "react";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={list : [
      { name: "CSS", completed: true },
      { name: "JavaScript", completed: true },
      { name: "Learn React", completed: false },
      { name: "Learn mongoDB", completed: false },
      { name: "Learn Node JS", completed: false },
      ]};
  }
  on_click(e){
    let newtodo = this.state.list.map(el => {
      return el.name === e.name ? {name: e.name, completed: !e.completed} : el;
    })
    this.setState({list : newtodo})  

  }
  
  
  render(){
    return(
      <div>
       {this.state.list.map((e) => {
      console.log(e);
      return(
        <div className={e.completed ? "task-v" : "task-x"}>
            <h3>{e.name}-</h3>
            <h3 onClick={() => this.on_click(e)}>
              {e.completed ? "V" : "X"}
            </h3>
        </div>

      )
     }
    )}
      </div>
      // <button onClick={this.displayTodoList}>ToDo list</button>
      
     
    );
  };
}
export default App;
