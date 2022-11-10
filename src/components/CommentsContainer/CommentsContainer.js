import React, { Component } from "react"
import CommentForm from '../CommentForm/CommentForm'
import CommentSection from '../CommentSection/CommentSection'
import { getComments } from '../../apiCalls'

class CommentsContainer extends Component {
  constructor() {
    super()
    this.state = {
      teaComments: [],
      error: false,
      loading: true
    }
  }

  componentDidMount = () => {
    getComments()
      .then(data => {
        const filteredComments = data.filter(comment => comment.tea_id === parseInt(this.props.tea_id))
        this.setState({ teaComments: filteredComments })
        }

      )}
  

  render() {
    return (
      <div className='comments-container'>
        <CommentForm tea_id={parseInt(this.props.tea_id)} />
        <CommentSection teaComments={this.state.teaComments} />
      </div>
    )
  }
}

export default CommentsContainer