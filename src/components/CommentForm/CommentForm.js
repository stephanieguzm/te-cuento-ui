import { Component } from 'react'
import PropTypes from 'prop-types'
import uniqueRandom from 'unique-random';
import { postComment } from '../../apiCalls'

const random = uniqueRandom(35, 5000);

class CommentForm extends Component {
  constructor() {
    super()
    this.state = {
      user_name: '',
      user_message: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.user_name && this.state.user_message) {
      this.submitComment()
    } else {
      this.setState({ error: `Please fill out all fields.` })
    }
  }

  submitComment = () => {
    const id = random()
    const tea_id = this.props.tea_id
    const user_name = this.state.user_name
    const user_message = this.state.user_message
    const newComment = { id, tea_id, user_name, user_message }
  
    postComment(newComment)
      .catch(error => {
        this.setState({ error: `Oops, we encountered an issue submitting your comment. Please try again.` })
      })
    
    this.props.getUpdatedComments(newComment)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ user_name: '', user_message: '', error: '' })
  }

  render() {
    return (
      <>
        <h2 className='title' data-cy='comments-title'>Share Your Thoughts with Us</h2>
        <form className='comment-form' data-cy='comment-form'>
          <input 
            type='text'
            name='user_name'
            placeholder='Your Name'
            data-cy='user_name'
            value={this.state.user_name}
            onChange={(event) => this.handleChange(event)}
            required
          />
          <textarea 
            wrap='hard'
            name='user_message'
            placeholder='Share your thoughts here'
            data-cy='user_message'
            value={this.state.user_message}
            onChange={(event) => this.handleChange(event)}
            required
          />
          <button 
            className='form-button' 
            data-cy='form-button' 
            onClick={(event) => this.handleSubmit(event)}>SUBMIT</button>
        </form>
        {this.state.error && <h3 className='error-message' data-cy='error-message'>{this.state.error}</h3>}        
      </>
    )
  }

}

export default CommentForm

CommentForm.propTypes = {
  getUpdatedComments: PropTypes.func.isRequired,
  tea_id: PropTypes.number.isRequired
}