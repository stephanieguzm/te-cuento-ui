const getTeas = () => {
  return fetch('http://localhost:9000/api/v1/teas')
    .then((resp) => {
    if (!resp.ok) {
      throw new Error(`${resp.statusCode}: Oh, no! We're busy taking care of a kettle that's boiling over! Please visit us again later.`)
    }
    return resp.json()
  })
}

const getComments = () => {
  return fetch('http://localhost:9000/api/v1/comments')
    .then((resp) => {
    if (!resp.ok) {
      throw new Error(`${resp.statusCode}: It looks like we don't have comments for this tea. Why don't you start the conversation?`)
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
      throw new Error(`${resp.statusCode}: Oops, we encountered an issue submitting your comment. Please try again.`)
    }
    return resp.json()
  })
}

export { getTeas, postComment, getComments }