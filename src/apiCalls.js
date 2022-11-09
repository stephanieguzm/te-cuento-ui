const getTeas = () => {
  return fetch('http://localhost:9000/api/v1/teas')
    .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText)
    }
    console.log(resp)
    return resp.json()
  })
}

const postMessage = (newMessage) => {
  return fetch('http://localhost:9000/api/v1/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMessage)
  })
  .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText)
    }
    console.log(resp)
    return resp.json()
  })
}

export { getTeas, postMessage }