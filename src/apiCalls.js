const getTeas = () => {
  return fetch('https://te-cuento.herokuapp.com/api/v1/teas')
    .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusCode)
    }
    return resp.json()
  })
}

const getTea = (id) => {
  return fetch(`https://te-cuento.herokuapp.com/api/v1/teas/${id}`)
    .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusCode)
    }
    return resp.json()
  })
}

const getComments = () => {
  return fetch('https://te-cuento.herokuapp.com/api/v1/comments')
    .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusCode)
    }
    return resp.json()
  })
}

const postComment = (newComment) => {
  return fetch('https://te-cuento.herokuapp.com/api/v1/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newComment)
  })
  .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusCode)
    }
    return resp.json()
  })
}

export { getTeas, getTea, postComment, getComments }
