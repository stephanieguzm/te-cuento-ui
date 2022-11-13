import { Component } from "react"
import PropTypes from 'prop-types'
import CommentForm from '../CommentForm/CommentForm'
import CommentSection from '../CommentSection/CommentSection'
import { getComments } from '../../apiCalls'

import './CommentsContainer.css'

class CommentsContainer extends Component {
  constructor() {
    super()
    this.state = {
      teaComments: [],
      error: '',
    }
  }

  componentDidMount = () => {
    getComments()
      .then(data => {
        const filteredComments = data.filter(comment => comment.tea_id === this.props.tea_id)
        this.setState({ teaComments: filteredComments })
      })
      .catch(error => 
        this.setState({ error: "It looks like there was a problem loading our comments but please add your own." }))
  }

  getUpdatedComments = (newComment) => {
    this.setState({ teaComments: [newComment, ...this.state.teaComments] })
  }

  render() {
    return (
      <> 
        {!this.state.teaComments.length && !this.state.error && <p className="spinner" data-cy='spinner'></p>}
        <div className='comments-container' data-cy='comments-container'>
          <CommentForm 
            tea_id={this.props.tea_id} 
            getUpdatedComments={this.getUpdatedComments}/>
          <CommentSection 
            teaComments={this.state.teaComments}/>
        </div>
        {this.state.error && <h3 className='error' data-cy='error'>{this.state.error}</h3>}  
      </>
    )
  }
}

export default CommentsContainer

CommentsContainer.propTypes = {
  tea_id: PropTypes.number.isRequired
}