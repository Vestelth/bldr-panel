import React from 'react'
import img from '../../../../assets/img/neil-hands.jpg'


const SingleComment = ({props}, index) => {
    console.log(props)
    return (
        <div key={index} className="single-comment">
            <div className="img-wrapper">
                <img className="profile-img" src={img} alt=""/>
            </div>
            <h3 className="author">{props.author}</h3>
            <span className="time">{props.time}</span>
            <p className="text">{props.text}</p>
        </div>
    )
}


export default SingleComment
