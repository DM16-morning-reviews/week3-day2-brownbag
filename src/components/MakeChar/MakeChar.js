import React, { Component } from "react";

class MakeChar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: ""
    };
    // this.handleNameInput = this.handleNameInput.bind(this);
    // this.handleGenderInput = this.handleGenderInput.bind(this);
  }

  handleNameInput = val => {
    this.setState({
      name: val
    });
  };

  handleGenderInput = val => {
    this.setState({
      gender: val
    });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Insert New Name"
          onChange={e => this.handleNameInput(e.target.value)}
        />
        <input
          placeholder="Insert Gender"
          onChange={e => this.handleGenderInput(e.target.value)}
        />
        <button
          onClick={() =>
            this.props.addCharacter(this.state.name, this.state.gender)
          }
        >
          Make Character
        </button>
      </div>
    );
  }
}

export default MakeChar;
