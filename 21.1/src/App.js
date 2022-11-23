import React from "react";
import Box from "./Box";
import "./index.css";



class App extends React.Component {
  
  render() {
    return (
      <div>
        <Box/>
        <Box theClass="small-box"/>
        <Box theClass="middle-box"/>
      </div>
    );
  }
}
export default App;