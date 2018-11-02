import React from 'react'
import './Comments.css'

import img from '../../../assets/img/neil-hands.jpg'

const Comments = ({ props }) => {
    console.log(props)
    
    // const commentSort = () => {}

    const comments = props.map((comment, index) => {
        return (
            <div key={index} className="single-comment">
                <div className="img-wrapper">
                    <img className="profile-img" src={img} alt=""/>
                </div>
                <h3 className="author">{comment.author}</h3>
                <span className="time">{comment.time}</span>
                <p className="text">{comment.text}</p>
            </div>
        )
    })

    return (
        <div className="comments tile">
            {comments}

            <form className="form add-comment">
                <input type="text" placeholder="Add a comment" />
                <button className="btn">Add</button>
            </form>
        </div>
    )
}

export default Comments
