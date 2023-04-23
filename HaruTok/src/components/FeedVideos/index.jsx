import { useEffect, useState } from 'react'
// import srcVideo from '../../videos/Download.mp4'
// import srcVideo1 from '../../videos/Download1.mp4'
import VideoPlayer from '../VideoPlayer/index.jsx'
import { getVideos } from '../../services/index.js'
import styles from './styles.module.css'

export default function FeedVideos () {
  const [videos, setVideos] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getVideos().then(([videos, error]) => {
      if (error) return setError(error)
      setVideos(videos)
    })
  }, [])

  if (error) {
    return (
      <span>{error}</span>
    )
  }

  return (
    videos.map(video => {
      const { users = {} } = video
      const { avatar, username } = users
      return (<div key={video.id} className={styles.item}><VideoPlayer {...video} avatar={avatar} username={username} /></div>)
    })
  )
}
