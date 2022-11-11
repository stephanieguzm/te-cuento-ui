import { Component } from 'react'
import { postComment } from '../../apiCalls'
import uniqueRandom from 'unique-random';
import Error from '../Error/Error'

import './CommentForm.css';

const random = uniqueRandom(35, 1000);

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
    this.submitComment()
  }

  submitComment = () => {
    const id = random()
    const tea_id = this.props.tea_id
    const newComment = {
      id, 
      tea_id,
      ...this.state
    }
    console.log(newComment)
    postComment(newComment)
      .catch(error => {
        this.setState({ error: `Oops, we encountered an issue submitting your comment. Please try again.` })
      })
    
    this.props.getUpdatedComments(newComment)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ user_name: '', user_message: ''})
  }

  render() {
    return (
      <>
        <h2 className='title' data-cy='comments-title'>Share Your Thoughts with Us!</h2>
        <form className='comment-form' data-cy='comment-form'>
          <input 
            type='text'
            name='user_name'
            placeholder='Your Name'
            value={this.state.user_name}
            onChange={(event) => this.handleChange(event)}
            data-cy='user_name'
            required
          />
          <input 
            type='textarea'
            name='user_message'
            placeholder='Share your thoughts here'
            value={this.state.user_message}
            onChange={(event) => this.handleChange(event)}
            data-cy='user_message'
            required
          />
          <button className='form-button' data-cy='form-button' onClick={(event) => this.handleSubmit(event)}>Submit</button>
        </form>
        {this.state.error && <Error 
          errorMessage={this.state.error}
          returnHome={this.props.returnHome}
        />}
      </>
    )
  }

}

export default CommentForm;
