import React from 'react'

import Comments from './Comments/Comments'
import ProfileHeader from './ProfileHeader/ProfileHeader'

import './Profile.css'


const Profile = ({props, handleFollowClick, handleLikeClick, index}) => {

    return (
        <div className="profile tile">
            <ProfileHeader
                index={index}
                props={props}
                handleFollowClick={handleFollowClick}
                handleLikeClick={handleLikeClick}
            />

            <Comments commentData={props.comments} />
        </div>
    )
}

export default Profile
