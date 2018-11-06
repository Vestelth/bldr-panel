import React from 'react'
import data from '../../data.json'

import Comments from './Comments/Comments'
import ProfileHeader from './ProfileHeader/ProfileHeader'

import './Profile.css'

const Profile = () => {
  return (
    <div className="profile tile">
      <ProfileHeader data={data}/>
      <Comments commentData={data.comments} />
    </div>
  )
}

export default Profile
