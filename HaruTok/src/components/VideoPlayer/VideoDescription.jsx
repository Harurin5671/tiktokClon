import AlbumDisk from '../VideoDescription/AlbumDisk.jsx'
import styles from './styles.module.css'

export default function VideoDescription ({ albumImage, username, description }) {
  return (
    <footer className={styles.description}>
      <div>
        <strong><a href={`/user/${username}`}>@{username}</a></strong>
        <p>{description}</p>
      </div>

      <div>
        <AlbumDisk albumImage={albumImage} />
      </div>
    </footer>
  )
}
