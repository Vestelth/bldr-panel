import React, { Component } from 'react';
import data from '../data.json'

import Profile from '../components/Profile/Profile'

class App extends Component {
  state = {data}
  
  logData = () => {
    console.log(this.state)
  }

  handleFollowClick = (index) => {
    const profileData = {...this.state.data[index]}

    profileData.stats.followers = parseInt(profileData.stats.followers) + 1

    this.setState({
      profileData
    })
  }

  handleLikeClick = (e, index) => {
    e.preventDefault()
    const profileData = {...this.state.data[index]}

    profileData.stats.likes = parseInt(profileData.stats.likes) + 1

    this.setState({
      profileData
    })
  }
  
  render() {
    const renderProfiles = this.state.data.map((profile, index) => {
      return <Profile 
                key={profile.id}
                index={index}
                data={profile}
                handleFollowClick={this.handleFollowClick}
                handleLikeClick={this.handleLikeClick}
              />
    })

    this.logData()
      
    return (
      <div className="App">
        {renderProfiles}
      </div>
    )
  }
}

export default App;
