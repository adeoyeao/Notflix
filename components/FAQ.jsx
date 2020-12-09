import styles from "../styles/components/faq.module.scss"

const FAQ = (props) => {
      return (
            <div className={styles.FAQ}>
                  <div className={styles.FAQ_question}>
                        <h2>{props.question}</h2>
                        <button 
                        onClick={() => props.handleClick(props.index)}/>
                  </div>
                  { props.visible && 
                  <div className={styles.FAQ_answer}>
                        <h2>{props.answer}</h2>
                  </div> }
            </div>
      )
}

export default FAQ