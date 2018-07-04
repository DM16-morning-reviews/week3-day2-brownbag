import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

import MakeChar from "./components/MakeChar/MakeChar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
    this.addCharacter = this.addCharacter.bind(this);
  }

  componentDidMount() {
    axios.get("/api/getCharacters").then(res => {
      this.setState({
        characters: res.data
      });
    });
  }

  addCharacter(name, gender) {
    let char = {
      name: name,
      gender: gender
    };
    axios.post(`/api/addCharacters`, { char }).then(res => {
      this.setState({
        characters: res.data
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MakeChar addCharacter={this.addCharacter} />
      </div>
    );
  }
}

export default App;
