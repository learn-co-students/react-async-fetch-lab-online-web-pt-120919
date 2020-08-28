import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      astronauts: []
    };
  }
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json").then(resp =>
      resp.json().then(data => this.setState({ astronauts: data.people }))
    );
  }
  render() {
    return (
      <div>
        {this.state.astronauts.map(a => (
          <h1>{a.name}</h1>
        ))}
      </div>
    );
  }
}
