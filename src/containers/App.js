import React, { Component } from 'react';
import profileData from '../data.json'
import './App.css';

import Profile from '../components/Profile/Profile'

class App extends Component {
  state = profileData
  
  logData = () => {
    console.log(this.state.data)
  }

  render() {
    return (
      <div className="App">
        <Profile data={this.state['harvey_spencer']} />
      </div>
    )
  }
}

export default App;
