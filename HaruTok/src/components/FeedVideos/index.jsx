import srcVideo from '../../videos/Download.mp4'
import srcVideo1 from '../../videos/Download1.mp4'
import VideoPlayer from '../VideoPlayer/index.jsx'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'Haru',
    description: 'ajajja',
    likes: 123,
    shares: 123,
    comments: 333,
    songTitle: 'prueba',
    albumImage: 'https://www.lonestardigital.com/EOS_D30/Sample_Pix/D30_Img_3771(400x400_Crop).jpg',
    src: srcVideo
  },
  {
    id: 2,
    author: 'Haru',
    description: 'ajajja1',
    likes: 245,
    shares: 123,
    comments: 333,
    songTitle: 'prueba',
    albumImage: 'https://previews.123rf.com/images/saphatthachat/saphatthachat1609/saphatthachat160900112/62384368-ilustración-de-los-pescados-del-diseño-del-arte-del-pixel.jpg',
    src: srcVideo1
  }
]

export default function FeedVideos () {
  return (
    VIDEOS.map(video => {
      return (<div key={video.id} className={styles.item}><VideoPlayer {...video} /></div>)
    })
  )
}
