import { Heart } from '../Icons/Heart.jsx'
import { Comment } from '../Icons/Comment.jsx'
import { Share } from '../Icons/Share.jsx'
import styles from './styles.module.css'

export default function VideoPlayerActions ({ likes = 2041, comments = 333, shares = 50, hearted = false }) {
  const handleLike = () => { window.alert('Like') }

  const handleComment = () => { window.alert('Comment') }

  const handleShare = () => { window.alert('Share') }

  return (
    <aside className={styles.actions}>
      <button onClick={handleLike} className={styles.action}>
        <Heart width='45' />
        <span title='like'>{likes}</span>
      </button>

      <button onClick={handleComment} className={styles.action}>
        <Comment width='45' />
        <span title='comments'>{comments}</span>
      </button>

      <button onClick={handleShare} className={styles.action}>
        <Share width='45' />
        <span title='shares'>{shares}</span>
      </button>

    </aside>
  )
}
