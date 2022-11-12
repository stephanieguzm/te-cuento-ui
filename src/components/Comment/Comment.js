const Comment = ({ id, user_name, user_message }) => {
  return (
    <div className='comment-card' data-cy='comment-card' id={id}>
      <p className='comment-name'>{user_name}</p>
      <p className='comment-message'>{user_message}</p>
    </div>
  )
}

export default Comment