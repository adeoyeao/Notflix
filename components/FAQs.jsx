import FAQ from "./FAQ"
import styles from "../styles/components/FAQS.module.scss"
import { useState } from "react"

const FAQS = () => {
      const defaultState = {
            0: false,
            1: false,
            2: false,
            3: false,
            4: false 
      }

      const [ visible, setVisible ] = useState({
            ...defaultState
      })

      const openFaq = (idx) => {
            setVisible(prev => ({
                  ...defaultState,
                  [idx]: !prev[idx]
            }))
      }

      return (
            <div className={styles.FAQS}>
                  <FAQ 
                  question="What is Notflix?"
                  answer="Notflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices."
                  handleClick={openFaq}
                  index={0}
                  visible={visible[0]}/>
                  <FAQ 
                  question="How much does Notflix cost?"
                  answer="Notflix, unlike a certain other streaming site, is completely free. No costs. No contracts."
                  handleClick={openFaq}
                  index={1}
                  visible={visible[1]}/>
                  <FAQ 
                  question="Where can I watch?"
                  answer="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Notflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
                  handleClick={openFaq}
                  index={2}
                  visible={visible[2]}/>
                  <FAQ 
                  question="What can I watch on Notflix?"
                  answer="Notflix has an extensive library of feature films, documentaries, TV programmes, anime, and more. Watch as much as you want, any time you want."
                  handleClick={openFaq}
                  index={3}
                  visible={visible[3]}/>
                  <FAQ 
                  question="How do I cancel?"
                  answer="Notflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time."
                  handleClick={openFaq}
                  index={4}
                  visible={visible[4]}/>
            </div>
      )
}

export default FAQS