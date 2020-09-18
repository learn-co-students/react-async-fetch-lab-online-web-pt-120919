// create your App component here
import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }

    componentDidMount(){
        fetch(`http://api.open-notify.org/astros.json`)
        .then(res => res.json())
        .then(json => console.log(json))
    }
}

export default App;