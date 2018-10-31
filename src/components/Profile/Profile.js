import React from 'react'

import Comments from './Comments/Comments'
import ProfileHeader from './ProfileHeader/ProfileHeader'

import './Profile.css'
import photo from '../../assets/img/neil-hands.jpg'

// import heartFull from '../../assets/icons/heart-full.svg'
import heart from '../../assets/icons/heart.svg'
import share from '../../assets/icons/share.svg'


const Profile = ({data, handleFollowClick, handleLikeClick, index}) => {
    // icon bgs
    const heartIcon = {
        backgroundImage: `url(${heart})`
    }
    // const heartFullIcon = {
        // backgroundImage: `url(${heartFull})`
    // }
    const shareIcon = {
        backgroundImage: `url(${share})`
    }

    return (
        <div className="profile tile">
            <ProfileHeader />

            <header className="profile-header tile">

                <div className="profile-info">
                    <div className="img-wrapper">
                        <img className="profile-img" src={photo} alt="avatar"/>
                    </div>
                    <div className="text-wrapper">
                        <h3>{data.user}<a href="#" onClick={(event) => handleLikeClick(event, index)}><i style={ heartIcon } className="icon heart-icon" /></a></h3>
                        <p className="location">{data.city}, {data.country}</p>
                    </div>

                    <a href="#"><i style={shareIcon} className="icon share-icon"></i></a>
                </div>

                <div className="profile-stats">
                    <div className="stats-elem likes">
                        <span className="amount">{data.stats.likes}</span> 
                        <span className="text">Likes</span>
                    </div>
                    <div className="stats-elem following">
                        <span className="amount">{data.stats.following}</span> 
                        <span className="text">Following</span>
                    </div>
                    <div className="stats-elem followers">
                        <span className="amount">{data.stats.followers}</span> 
                        <span className="text">Followers</span>
                    </div>

                    <button onClick={() => handleFollowClick(index)} className="btn btn-follow" type="button">Follow</button>
                </div>

            </header>

            <Comments data={data.comments} />
        </div>
    )
}

export default Profile