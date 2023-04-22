import AlbumDisk from '../VideoDescription/AlbumDisk.jsx'
import styles from './styles.module.css'

export default function VideoDescription ({ albumImage, userName, description }) {
  return (
    <footer className={styles.description}>
      <div>
        <strong><a href={`/user/${userName}`}>@{userName}</a></strong>
        <p>{description}</p>
      </div>

      <div>
        <AlbumDisk albumImage={albumImage} />
      </div>
    </footer>
  )
}
