import React, { Component } from 'react'
import { postMessage } from '../../apiCalls'
import uniqueRandom from 'unique-random';

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
    this.setMessage()
  }

  setMessage = () => {
    const id = random()
    const tea_id = this.props.tea_id
    const newMessage = {
      id, 
      tea_id, 
      ... this.state
    }
    console.log(newMessage)
    postMessage(newMessage)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ user_name: '', user_message: ''})
  }

  render() {
    return (
      <form>
        <input 
          type='text'
          name='user_name'
          placeholder='Your Name'
          value={this.state.user_name}
          onChange={(event) => this.handleChange(event)}
        />
        <input 
          type='textarea'
          name='user_message'
          placeholder='Share your thoughts here'
          value={this.state.user_message}
          onChange={(event) => this.handleChange(event)}
        />
      
        <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
    </form>
  )
}

}

export default CommentForm;
