import styles from "../styles/components/feature.module.scss"

const Feature = (props) => {

      return (
            <article className={ `${styles.Feature} ${styles[`Feature___${props.type}`]}`}>
                  <div>
                        <h1>{props.head}</h1>
                        <h2>{props.copy}</h2>
                  </div>
                  <img src={`/images/${props.src}.png`} />
            </article>
      )
}

export default Feature