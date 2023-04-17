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
    albumCover: 'https://www.lonestardigital.com/EOS_D30/Sample_Pix/D30_Img_3771(400x400_Crop).jpg',
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
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b490d4645c8b7a4fea02327f1f30f30a~c5_720x720.jpeg?x-expires=1681858800&x-signature=fH1nNIZWFCBVtzxSBvkle%2FTlEI0%3D',
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
