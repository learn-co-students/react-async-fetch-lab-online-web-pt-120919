import React, { Component } from 'react';

export default class App extends Component {

    state = {
        spacemen: []
    }

    render() {
        return (
            <div>
               {this.state.spacemen.map((person, id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(({people}) => this.setState({
            spacemen: people
        }) )
    }
  
  }
  
