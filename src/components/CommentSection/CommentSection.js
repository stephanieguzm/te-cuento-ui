import Comment from '../Comment/Comment'

const CommentSection = ({ teaComments }) => {
  const commentCards = teaComments.map( comment => {
    return <Comment 
      id={comment.id}
      key={comment.id}
      user_name={comment.user_name}
      user_message={comment.user_message}
    />
  }) 
  return (
    <section className='comment-section' data-cy='comment-section'>
      <h2 className='subtitle' data-cy='comment-section-title'>Share Your Thoughts with Us!</h2>
      {commentCards}
    </section>
  )
}

export default CommentSection

