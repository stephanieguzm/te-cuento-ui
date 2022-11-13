const getTeas = () => {
  return fetch('http://localhost:9000/api/v1/teas')
    .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusCode)
    }
    return resp.json()
  })
}

const getTea = (id) => {
  return fetch(`http://localhost:9000/api/v1/teas/${id}`)
    .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusCode)
    }
    return resp.json()
  })
}

const getComments = () => {
  return fetch('http://localhost:9000/api/v1/comments')
    .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusCode)
    }
    return resp.json()
  })
}

const postComment = (newComment) => {
  return fetch('http://localhost:9000/api/v1/comments', {
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
