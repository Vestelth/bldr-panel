import React from 'react'
import dateDiff from '../../../../utils/dateDiff'

import img from '../../../../assets/img/neil-hands.jpg'


const SingleComment = ({props}, index) => {
  const time = dateDiff(props.time) > 0 ? dateDiff(props.time) + 'd' : 'Today'

  return (
    <div key={index} className="single-comment">
      <div className="img-wrapper">
        <img className="profile-img" src={img} alt=""/>
      </div>

      <div className="text-box">
        <h3 className="author">
          {props.author}
          <span className="time">{time}</span>
        </h3>
        <p className="text">{props.text}</p>
      </div>
    </div>
  )
}


export default SingleComment
