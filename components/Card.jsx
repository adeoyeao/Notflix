import styles from "../styles/components/card.module.scss"
import Link from "next/link"
import { useState, useEffect } from "react"

const Card = (props) => {
      const [id, setId ] = useState("")

      useEffect(() => props.id && setId(props.id), [])
      
      const cardStyle = {
            backgroundImage: `url(${props.thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
      }

      return (
            <Link href={`/browse/${id}`}>
                  <a className={styles.Card} style={cardStyle}>
                        <p>{props.title}</p>
                  </a>
            </Link>
      )
}

export default Card