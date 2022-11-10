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
        this.setState({ error: `${error.message}. It looks like we don't have comments for this tea. Why don't you start the conversation?` }))
  }

  getUpdatedComments = (newComment) => {
    this.setState({ teaComments: [newComment, ...this.state.teaComments] })
  }

  render() {
    return (
      <> 
      {!this.state.teaComments.length 
        ? <Error 
          errorMessage={this.state.error} 
          returnHome={this.props.returnHome} />
        : <div className='comments-container'>
        <CommentForm 
          tea_id={this.props.tea_id} 
          getUpdatedComments={this.getUpdatedComments}
          />
        <CommentSection 
          teaComments={this.state.teaComments}
          returnHome={this.props.returnHome}
        />
      </div>
        }
      </>
    )
  }
}

export default CommentsContainer