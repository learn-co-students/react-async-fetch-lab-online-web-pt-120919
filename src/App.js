import React, { Component } from "react";

export default class App extends Component {
  state = {
    dataApi: []
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(({ people }) => this.setState({ dataApi: people }));
  }

  render() {
    return (
      <div>
        {this.state.dataApi.map((person, id) => {
          return <h1 key={id}>{person.name}</h1>;
        })}
      </div>
    );
  }
}
