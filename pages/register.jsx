import Header from "../components/Header"
import RegisterForm from "../components/Register"
import Feature from "../components/Feature"
import FAQS from "../components/FAQs"
import styles from "../styles/layouts/register.module.scss"


import { useState, useEffect } from "react"

const Register = () => {
      const [ viewHeight, setViewHeight ] = useState(`100vh`)
      
      const handleResize = () => {
            setViewHeight(`${window.innerHeight}px`)
      }

      useEffect(() => {
            handleResize
            window.addEventListener("resize", handleResize)
            return(() => window.removeEventListener("resize", handleResize))
      })

      const sectionStyle = {
            minHeight: viewHeight
      }

      return (
            <main className={styles.Register}>
                  <Header />
                  <section style={sectionStyle} >
                        <div>
                              <h1>Unlimited films, TV programmes and more.</h1>
                              <h3>Watch anywhere. Cancel at any time.</h3>
                              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                              <RegisterForm />
                        </div>
                  </section>
                  <Feature 
                  type="left"
                  head="Enjoy on your TV."
                  copy="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                  src="notflix-tv"/>
                  <Feature 
                  type="right"
                  head="Download your progammes to watch offline."
                  copy="Save your favourites easily and always have something to watch."
                  src="notflix-phone"/>
                  <Feature 
                  type="left"
                  head="Watch everywhere."
                  copy="Stream unlimited films and TV programmes on your phone, tablet, laopt and TV without paying more."
                  src="notflix-laptop"/>
                  <section className={styles.FAQs_section}>
                        <h1>Frequently Asked Questions</h1>
                        <FAQS />
                        <div className={styles.RegisterForm}>
                              <h3>Watch anywhere. Cancel at any time.</h3>
                              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                              <RegisterForm />
                        </div>
                  </section>
            </main>
      )
}

export default Register