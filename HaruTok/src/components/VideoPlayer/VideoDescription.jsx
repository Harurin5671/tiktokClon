import AlbumDisk from './AlbumDisk.jsx'
import styles from './styles.module.css'

export default function VideoDescription ({ albumImage, author, description }) {
  return (
    <footer className={styles.description}>
      <div>
        <strong><a href={`/user/${author}`}>@{author}</a></strong>
        <p>{description}</p>
      </div>

      <div>
        <AlbumDisk albumImage={albumImage} />
      </div>
    </footer>
  )
}
