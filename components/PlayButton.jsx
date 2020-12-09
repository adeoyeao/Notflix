import Link from "next/link"
import styles from "../styles/components/playbutton.module.scss"

const PlayButton = (props) => {
      return (
            <Link href={`/browse/${props.id}`}>
                  <a className={styles.PlayButton}>
                        <div />
                        <p>Play</p>
                  </a>
            </Link>
      )
}

export default PlayButton