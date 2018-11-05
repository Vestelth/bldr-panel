import React, {Component} from 'react'
import SingleComment from './SingleComment/SingleComment'

import dateFormat from '../../../utils/dateFormat'
import './Comments.css'


class Comments extends Component {
  state = {
    inputText : '',
    showComments : true,
    commentList : this.props.commentData
  }

  handleCommentText = (e) => {
    let inputText = e.target.value
    this.setState({
      inputText
    })
  }

  handleSubmitComment = (e) => {
    e.preventDefault()
    let actualLength = this.state.commentList.length + 1
    let id = this.state.commentList.length > 8 ? (
        String(actualLength)
      ) : (
        '0' + actualLength
      )

    const newComment = {
      id,
      author: 'Me',
      avatar: 'avatar.png',
      time: dateFormat(),
      text: this.state.inputText
    }

    const commentList = [...this.state.commentList, newComment]

    this.setState({
      commentList
    })
  }

  render () {
    const comments = this.state.commentList.map((comment, index) => {
      return <SingleComment key={comment.id} props={comment} />
    })

    return (
      <div className="comments tile">
        <a href="" className="hide-comments">Hide comments ({this.state.commentList.length})</a>

        <div className="comment-list">
          { comments }
        </div>

        <form onSubmit={this.handleSubmitComment} className="form add-comment">
          <input onInput={this.handleCommentText} type="text" placeholder="Add a comment" />
          <button className="btn">Add</button>
        </form>
      </div>
    )
  }
}

export default Comments
