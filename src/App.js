import React, { Component } from 'react'

export default class App extends Component {
    state = {
        astros: []
    }
    
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                astros: data.people
            })
        })
    }
    
    render(){
        const astros = this.state.astros.map(astro => astro.name)
        return (
            <div>Current Astronauts in Space: {astros.join(", ")}</div>
        )
    }
}