import React, { Component } from 'react';
import data from '../data.json'

import Profile from '../components/Profile/Profile'

class App extends Component {
  state = {data}
  
  logData = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <Profile data={this.state.data[0]} />
      </div>
    )
  }
}

export default App;
