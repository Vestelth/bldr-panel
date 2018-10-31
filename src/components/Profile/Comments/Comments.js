import React from 'react'
import './Comments.css'

const Comments = (data) => {
    // const commentSort = () => {}
    console.log(data)

    return (
        <div className="comments tile">
            <div className="single-comment">
                <p>comments here</p>
                {/* <Comment /> */}
            </div>
            <div className="add-comment">
                <input type="text" placeholder="Add a comment" />
            </div>
        </div>
    )
}

export default Comments
