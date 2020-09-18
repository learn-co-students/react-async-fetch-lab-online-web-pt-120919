// create your App component here
import React from 'react'


class App extends React.Component {

    state = {
        astronauts: []
    }

componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data=> { this.setState({astronauts: data.people }) })
}

    render(){
        return(
            <div>
                {this.state.astronauts.map(person => <div>{person.name}</div>)}
            </div>
        )
    }
}

export default App 