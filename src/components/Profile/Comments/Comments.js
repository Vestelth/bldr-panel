import React, {Component} from 'react'
import SingleComment from './SingleComment/SingleComment'

import dateFormat from '../../../utils/dateFormat'
import './Comments.css'


class Comments extends Component {
  state = {
    inputText : '',
    hideComments : false,
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

  handleHideComments = (e) => {
    e.preventDefault()
    console.log('handle hide comments init');

    this.setState({
      hideComments: !this.state.hideComments
    })
  }

  render () {
    const commentsHidden = this.state.hideComments ? 'hidden' : ''


    const comments = this.state.commentList.map((comment, index) => {
      return <SingleComment key={comment.id} props={comment} />
    })

    return (
      <div className="comments tile">
        <button
          className="toggle-comments"
          onClick={this.handleHideComments}>
          {this.state.hideComments ? 'Show' : 'Hide'} comments ({this.state.commentList.length})</button>

        <div className={`comment-list ${commentsHidden}`}>
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
