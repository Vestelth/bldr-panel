import React, { Component } from 'react'

import './ProfileHeader.css'

import photo from '../../../assets/img/neil-hands.jpg'
import heartFull from '../../../assets/icons/heart-full.svg'
import heart from '../../../assets/icons/heart.svg'
import share from '../../../assets/icons/share.svg'


class ProfileHeader extends Component {
  constructor(props) {
    super(props)
    console.log(props.data.stats.following)

    this.state = {
      likes: props.data.stats.likes,
      followers: props.data.stats.followers,
      userFollows: false,
      userLikes: false
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

  render() {
    const heartIcon = {backgroundImage: this.state.userLikes ? `url(${heartFull})` : `url(${heart})`}
    const shareIcon = {backgroundImage: `url(${share})`}

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

          <button className="share">
            <i style={shareIcon} className="icon share-icon"></i>
            <div className="share-popup">{window.location.href}</div>
          </button>
        </div>

        <div className="profile-stats">

          <div className="stats-elem likes">
            <span className="amount">{this.state.likes}</span>
            <span className="text">Likes</span>
          </div>

          <div className="stats-elem following">
            <span className="amount">{this.props.data.stats.following}</span>
            <span className="text">Following</span>
          </div>

          <div className="stats-elem followers">
            <span className="amount">{this.state.followers}</span>
            <span className="text">Followers</span>
          </div>

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
