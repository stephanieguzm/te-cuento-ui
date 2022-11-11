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
    <section className='comments-section' data-cy='comments-section'>
      {commentCards}
    </section>
  )
}

export default CommentSection

