import React, { Component } from "react"
import CommentForm from '../CommentForm/CommentForm'
// import CommentSection from '../CommentSection'

class CommentsContainer extends Component {
  constructor() {
    super()
    this.state = {
      teaComments: [],
      error: false,
      // loading: true
    }
  }

  componentDidMount = () => {

  }

  render() {
    return (
      <div className='comments-container'>
        <CommentForm tea_id={this.props.tea_id} />
        {/* <CommentSection tea_id={this.props.tea_id} /> */}
      </div>
    )
  }
}

export default CommentsContainer