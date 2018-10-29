import React from 'react'
import './Profile.css'
import photo from '../../assets/img/neil-hands.jpg'
import heart from '../../assets/icons/heart.svg'
import fullHeart from '../../assets/icons/heart-full.svg'

const Profile = ({data}) => {
    const logFunction = () => {
        console.log(data)
    }

    logFunction()

    return (
        <div className="Profile tile">
            <header className="Profile-header tile">

                <div className="Profile-info">
                    <div className="img-wrapper">
                        <img className="Profile-img" src={photo} alt="avatar"/>
                    </div>
                    <div className="text-wrapper">
                        <h1>{data.user} <img src={heart} alt=""/></h1>
                        <p className="location">{data.city}, {data.country}</p>
                    </div>

                    <span className="share-profile">[=]</span>
                </div>

                <div className="Profile-stats">
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
                        <span className="text">Likes</span>
                    </div>

                    <button className="btn btn-follow" type="button">Follow</button>
                </div>

            </header>

            <div className="Profile-comments tile">
                <div className="comment">
                    <p>comment here</p>
                </div>
                {/* <Comment /> */}
            </div>
        </div>
    )
}

export default Profile