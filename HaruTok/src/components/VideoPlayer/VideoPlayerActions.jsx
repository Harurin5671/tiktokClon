import { Heart } from '../Icons/Heart.jsx'
import { Comment } from '../Icons/Comment.jsx'
import { Share } from '../Icons/Share.jsx'
import styles from './styles.module.css'

export default function VideoPlayerActions ({ username, avatar, likes = 2041, comments = 333, shares = 50, hearted = false }) {
  // console.log("🚀 ~ file: VideoPlayerActions.jsx:7 ~ VideoPlayerActions ~ username, avatar:", username, avatar)
  const handleLike = () => { window.alert('Like') }

  const handleComment = () => { window.alert('Comment') }

  const handleShare = () => { window.alert('Share') }

  return (
    <aside className={styles.actions}>
      <div className={styles.user}>
        <img src={avatar} alt={username} />
        <img src='https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg' width='24' />
      </div>
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
