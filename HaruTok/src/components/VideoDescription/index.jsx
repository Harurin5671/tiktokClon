import AlbumDisk from './AlbumDisk.jsx'
import SongTicker from '../SongTicker/index.jsx'
import styles from './styles.module.css'

export default function VideoDescription ({ albumImage, username, description, songTitle }) {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <section>
          <strong>
            <a className={styles.author} href={`/user/${username}`}>
              @{username}
            </a>
          </strong>
          <p className={styles.text}>
            {description}
          </p>
        </section>
        <SongTicker songTitle={songTitle} />
      </div>

      <div>
        <AlbumDisk albumImage={albumImage} />
      </div>

    </footer>
  )
}
