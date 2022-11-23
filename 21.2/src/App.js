//import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from "axios";

class App extends React.Component {

  state = {countries : [], filtered :[]}

  componentDidMount(){
    this.getCountries();
    

  }
  getCountries = async () => {
    const response = await axios.get(
      "https://restcountries.com/v2/all"
    );
    const countries = response.data.map((c) => c.name);
    this.setState({countries : countries, filtered : countries});
  };

  filterCountries = (value) => {
    this.setState({filtered :
      this.state.countries.filter((c) =>
        c.toLowerCase().includes(value.toLowerCase())
      )
  });
  }

  render(){
    return(
     <>
      <label>Search</label>
      <input onChange={(event) => this.filterCountries(event.target.value)} />
      <ul>
        {this.state.filtered.map((c) => {
          console.log(c);
          return <li>{c}</li>;
        })}
      </ul>
      </>

    );
  }


  

}

export default App;
