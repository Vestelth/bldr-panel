import React from 'react'

import './ProfileHeader.css'

import photo from '../../../assets/img/neil-hands.jpg'
import heartFull from '../../../assets/icons/heart-full.svg'
import heart from '../../../assets/icons/heart.svg'
import share from '../../../assets/icons/share.svg'


const ProfileHeader = ({props, index, handleFollowClick, handleLikeClick}) => {
  const heartIcon = {backgroundImage: props.stats.doYouLike ? `url(${heartFull})` : `url(${heart})`}
  const shareIcon = {backgroundImage: `url(${share})`}
  const followBtnText = props.stats.doYouFollow ? 'UNFOLLOW' : 'FOLLOW'

  return (
    <header className="profile-header tile">

      <div className="profile-info">

        <div className="img-wrapper">
          <img className="profile-img" src={photo} alt="avatar"/>
        </div>

        <div className="text-wrapper">
          <h3>{props.user}
            <button className="like" onClick={(event) => handleLikeClick(index)}>
              <i style={heartIcon} className="icon heart-icon" />
            </button>
          </h3>
          <p className="location">{props.city}, {props.country}</p>
        </div>

        <button className="share"><i style={shareIcon} className="icon share-icon"></i></button>

      </div>

      <div className="profile-stats">

        <div className="stats-elem likes">
          <span className="amount">{props.stats.likes}</span>
          <span className="text">Likes</span>
        </div>

        <div className="stats-elem following">
          <span className="amount">{props.stats.following}</span>
          <span className="text">Following</span>
        </div>

        <div className="stats-elem followers">
          <span className="amount">{props.stats.followers}</span>
          <span className="text">Followers</span>
        </div>

        <button
          className="btn btn-follow"
          onClick={() => handleFollowClick(index)}
          type="button">
          {followBtnText}
        </button>

      </div>

    </header>
  )
}

export default ProfileHeader
