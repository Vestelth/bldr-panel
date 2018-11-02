import React, { Component } from 'react';
import data from '../data.json'

import Profile from '../components/Profile/Profile'

class App extends Component {
  state = {data}
  
  logData = () => {
    console.log(this.state)
  }

  handleFollowClick = (index) => {
    const profile = {...this.state.data[index]}
    
    profile.stats.doYouFollow = !profile.stats.doYouFollow

    if (profile.stats.doYouFollow) {
      profile.stats.followers = parseInt(profile.stats.followers) + 1
    } else {
      profile.stats.followers = parseInt(profile.stats.followers) - 1
    }

    this.setState({
      profile
    })
  }

  handleLikeClick = (index) => {
    const profile = {...this.state.data[index]}

    profile.stats.doYouLike = !profile.stats.doYouLike

    if (profile.stats.doYouLike) {
      profile.stats.likes = parseInt(profile.stats.likes) + 1
    } else {
      profile.stats.likes = parseInt(profile.stats.likes) - 1
    }

    this.setState({
      profile
    })
  }

  handleAddComment = (index) => {
    const comments = { ...this.state.data[index] }
    console.log(comments)
  }
  
  render() {
    const renderProfiles = this.state.data.map((profile, index) => {
      return <Profile 
                key={profile.id}
                index={index}
                props={profile}
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
