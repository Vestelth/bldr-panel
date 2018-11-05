import React, {Component} from 'react'
import './Comments.css'

import SingleComment from './SingleComment/SingleComment'


class Comments extends Component {
  state = {
    inputText : '',
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

    // id setup
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
      time: 'day',
      text: this.state.inputText
    }

    // date setup
    const now = new Date()
    console.log(now)

    const commentList = [...this.state.commentList, newComment]

    this.setState({
      commentList
    })
  }

  render () {
    const comments = this.state.commentList.map((comment, index) => {
      return (
        <SingleComment key={index} props={comment} />
      )
    })

    return (
      <div className="comments tile">
        <a href="  " className="hide-comments">Hide comments (comments_number_here)</a>

        {
          comments
        }

        <form onSubmit={this.handleSubmitComment} className="form add-comment">
          <input onInput={this.handleCommentText} type="text" placeholder="Add a comment" />
          <button className="btn">Add</button>
        </form>
      </div>
    )
  }
}

export default Comments
