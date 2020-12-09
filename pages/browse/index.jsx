import styles from "../../styles/layouts/browse/index.module.scss"
import Header from "../../components/Header"
import Genre from "../../components/Genre"
import Loader from "../../components/Loader"
import PlayButton from "../../components/PlayButton"
import { useSelector } from "react-redux"
import useSWR from "swr"
import { useEffect, useState } from "react"
import Head from "next/head"

const Index = () => {
      // States
      const genres = useSelector(state => state.genre.genres)

      // Featured Page
      const [ featured, setFeatured ] = useState({})
      const [ video, setVideo ] = useState({})
      const [ id, setId ] = useState([])
      const [ visible, setVisible ] = useState(false)

      const fetcher = async () => {
            const response = await fetch("/featured")
            return await response.json()
      }

      const { data: features } = useSWR("/featured", fetcher)

      const index = Math.floor(Math.random() * 20)
      useEffect(() => features && (setFeatured(features.films[index]), setVideo(features.videoData[index]), setId(features.videoId[index])), [features])

      const featuredStyle = {
            backgroundImage: `url(${video.thumbnail_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderBottom: "1rem solid white"
      }

      useEffect(() => {
            Object.keys(featured).length === 0 ? setVisible(true) : setVisible(false)
      })

      return (
            <main>
                  <Header />
                  <Head>
                        <title>Notflix</title>
                  </Head>
                  { visible && <Loader /> }
                  <section className={styles.Featured} style={featuredStyle}>
                        <h1>{ featured.title }</h1>
                        <p className={styles.Featured_overview}>{ featured.overview }</p>
                        <PlayButton id={id}/>
                  </section>
                  <section className={styles.Genres}> 
                        { genres.map(x => (
                              <Genre genre={x.name} key={x.id} id={x.id}/>
                        )) }
                  </section>
            </main>
      )
}

export default Index