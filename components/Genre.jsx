import Card from "./Card"
import styles from "../styles/components/genre.module.scss"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { requestFailure, requestLoading, requestSuccess} from "../redux/actions"

const Genre = (props) => {
      const { loading, data, videos, error } = useSelector(state => state.card[props.genre])
      const all = useSelector(state => state.card)
      const dispatch = useDispatch()

      const [id, setId ] = useState([])

      const getFilms = () => {
            dispatch(requestLoading(props.genre))
            fetch("/films", {
                  method: "POST",
                  headers: {
                        "content-type": "application/json"
                  },
                  body: JSON.stringify({id: props.id})
            })
            .then(res => res.json())
            .then(data => {
                  dispatch(requestSuccess(props.genre, data.films.splice(0, 10), data.videoData.splice(0, 10)))
                  setId(data.videoId.splice(0, 10))
            })
            .catch(err => {
                  console.error(err)
                  dispatch(requestFailure(props.genre, err))
            })
      }

      useEffect(() => {
            getFilms()
      }, [])

      return (
            <article className={styles.Genre}>
                  <h2>{props.genre}</h2>
                  <div className={styles.Genre_cards}>
                        { data.map((x, idx) => (
                              <Card title={x.title} thumbnail={videos[idx].thumbnail_url} id={id[idx]} key={id[idx]}/>
                        )) }
                  </div>
            </article>
      )
}

export default Genre