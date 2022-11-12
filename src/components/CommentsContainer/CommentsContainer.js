import { Component } from "react"
import CommentForm from '../CommentForm/CommentForm'
import CommentSection from '../CommentSection/CommentSection'
import Error from '../Error/Error'
import { getComments } from '../../apiCalls'

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
        this.setState({ error: "It looks like there was a problem loading our comments but please feel free to submit your own!" }))
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
            getUpdatedComments={this.getUpdatedComments}
            />
          <CommentSection 
            teaComments={this.state.teaComments}
            returnHome={this.props.returnHome}
            />
        </div>
        {this.state.error && <h3 className='error' data-cy='error'>{this.state.error}</h3>}  
        {/* } */}
      </>
    )
  }
}

export default CommentsContainer