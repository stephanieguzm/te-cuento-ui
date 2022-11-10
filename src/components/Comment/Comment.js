const Comment = ({ id, user_name, user_message }) => {
  return (
    <div className='comment-card' id={id}>
      <p>{user_name}</p>
      <p>{user_message}</p>
    </div>
  )
}

export default Comment