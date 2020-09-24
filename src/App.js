// create your App component here
import React, { Component } from "react";

export default class App extends Component {
    state = {
        peopleInSpace: []
    }

    // componentDidMount() {
    //     fetch('http://api.open-notify.org/astros.json')
    //         .then(resp => resp.json())
    //         .then(data => {
    //             peopleInSpace: data.people
            
    //         })
    // }

    async componentDidMount() {
        const resp = await fetch('http://api.open-notify.org/astros.json');
        const data = await resp.json();
        peopleInSpace: data.people;
    }

    render() {
        return (
            <div>
                {this.state.peopleInSpace.map(person => person.name)}
            </div>
        )
    }
}