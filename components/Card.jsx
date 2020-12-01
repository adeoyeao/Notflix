import styles from "../styles/components/card.module.scss"

const Card = (props) => {
      return (
            <div className={styles.Card}>
                  <p>{props.title}</p>
            </div>
      )
}

export default Card