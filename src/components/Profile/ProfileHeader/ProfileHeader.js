import React, { Component } from 'react'
import StatsItem from './StatsItem/StatsItem'

import './ProfileHeader.css'

import photo from '../../../assets/img/neil-hands.jpg'
import heartFull from '../../../assets/icons/heart-full.svg'
import heart from '../../../assets/icons/heart.svg'
import share from '../../../assets/icons/share.svg'


class ProfileHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      likes: props.data.stats.likes,
      followers: props.data.stats.followers,
      userFollows: false,
      userLikes: false,
      popupVisible: false
    }
  }

  handleFollowClick = () => {
    let followers = this.state.followers

    this.state.userFollows ? followers-- : followers++
    this.setState({
      followers,
      userFollows: !this.state.userFollows
    })
  }

  handleLikeClick = () => {
    let likes = this.state.likes

    this.state.userLikes ? likes-- : likes++
    this.setState({
      likes,
      userLikes: !this.state.userLikes
    })
  }

  handleShareClick = () => {
    this.setState({
      popupVisible: !this.state.popupVisible
    })
  }

  handleClickAway = () => {
    document.body.addEventListener('click', (e) => {
      const popup = document.getElementsByClassName('share-popup')

      if (e.target !== popup && this.state.popupVisible) {
        this.setState({
          popupVisible: !this.state.popupVisible
        })
      }
    })
  }

  componentDidMount() {
    this.handleClickAway()
  }

  render() {
    const heartIcon = {backgroundImage: this.state.userLikes ? `url(${heartFull})` : `url(${heart})`}
    const shareIcon = {backgroundImage: `url(${share})`}
    const popupVisibility = this.state.popupVisible ? 'visible' : ''

    return (
      <header className="profile-header tile">

        <div className="profile-info">
          <div className="img-wrapper">
            <img className="profile-img" src={photo} alt="avatar" />
          </div>

          <div className="text-wrapper">
            <h3>{this.props.data.user}
              <button className="like" onClick={this.handleLikeClick}>
                <i style={heartIcon} className="icon heart-icon" />
              </button>
            </h3>
            <p className="location">{this.props.data.city}, {this.props.data.country}</p>
          </div>

          <button onClick={this.handleShareClick} className="share">
            <i style={shareIcon} className="icon share-icon"></i>
            <div className={'share-popup ' + popupVisibility}>
              <a href={window.location.href}>{window.location.href}</a>
            </div>
          </button>
        </div>

        <div className="profile-stats">
          <StatsItem
            customClass={'likes'}
            amount={this.state.likes} />
          <StatsItem
            customClass={'following'}
            amount={this.props.data.stats.following} />
          <StatsItem
            customClass={'followers'}
            amount={this.state.followers} />

          <button
            className="btn btn-follow"
            onClick={this.handleFollowClick}
            type="button">
            { this.state.userFollows ? 'UNFOLLOW' : 'FOLLOW' }
          </button>
        </div>

      </header>
    )
  }
}

export default ProfileHeader
