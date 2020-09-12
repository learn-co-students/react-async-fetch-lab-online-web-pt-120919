// create your App component here
import React, { Component } from 'react';

class App extends Component {
  state = {
    astronauts: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        astronauts: data.people
      })
    })
  }

  render() {
    return <div>
              {this.state.astronauts.map(astronaut => astronaut.name)}
           </div>
  }
}

export default App
