import styles from "../styles/components/card.module.scss"
import Link from "next/link"

const Card = (props) => {
      const cardStyle = {
            backgroundImage: `url(${props.thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
      }

      return (
            <Link href={`/browse/${props.id}`}>
                  <a className={styles.Card} style={cardStyle}>
                        <p>{props.title}</p>
                  </a>
            </Link>
      )
}

export default Card