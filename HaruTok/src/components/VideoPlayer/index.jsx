import { useRef, useState } from 'react'
import styles from './styles.module.css'
import src from '../../videos/Download.mp4'

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)

  const video = useRef()

  const handlePlay = () => {
    if (playing) { video.current.pause() } else { video.current.play() }
    setPlaying(!playing)
  }

  return (
    <div>
      <video
        className={styles.video}
        controls={false}
        loop
        onClick={handlePlay}
        ref={video}
        src={src}
      />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  )
}
