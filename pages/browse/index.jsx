import styles from "../../styles/layouts/browse/index.module.scss"
import Header from "../../components/Header"
import Genre from "../../components/Genre"
import { useSelector } from "react-redux"
import useSWR from "swr"
import { useEffect, useState } from "react"

const Index = () => {
      const genres = useSelector(state => state.genre.genres)
      const [ featured, setFeatured ] = useState({})

      const fetcher = async () => {
            const response = await fetch("/featured")
            return await response.json()
      }

      const { data: features } = useSWR("/featured", fetcher)

      const index = Math.floor(Math.random() * 20)
      useEffect(() => features && setFeatured(features.films[index]), [features])

      return (
            <main>
                  <Header />
                  <section className={styles.Featured}>
                        <h1>{ featured.title }</h1>
                  </section>
                  <section className={styles.Genres}> 
                        { genres.map( x => (
                              <Genre genre={x.name} key={x.id} id={x.id}/>
                        )) }
                  </section>
            </main>
      )
}

export default Index