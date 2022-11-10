import React, { Component } from 'react'
import CommentsContainer from '../CommentsContainer/CommentsContainer'
import './TeaPage.css';

class TeaPage extends Component {
  constructor() {
    super()
    this.state = {
      tea: {},
      error: false
    }
  }
  
  componentDidMount() {
    fetch(`http://localhost:9000/api/v1/teas/${this.props.selectedTea}`)
      .then( response=> {
        if (!response.ok) {
          throw new Error()
        }
        return response.json() 
      })
      .then( data => this.setState({ tea: data[0] }))
      .catch( error => {
        if (error) {
          this.setState({ error: true })
        }
      })
  }

  render() {
    const tea = this.state.tea
    return (
      <div className='tea-page-container'>
        <div className='tea-info' id={tea.id}>
          <h3>{tea.name}</h3>
          <p>{tea.description}</p>
          <p>Originated from {tea.origin}</p>
          <h4>Make the perfect cup</h4>
          <p>Brew at {tea.temperature} for {tea.brewTime} minutes</p>
          <img src={tea.img} alt={tea.name}/>
        </div>
        <div className='comments-container'>
          <CommentsContainer tea_id={this.props.selectedTea}/>
        </div>
      </div>
    )
  }

}

export default TeaPage;
