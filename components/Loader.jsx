import { useState, useEffect } from "react"
import styles from "../styles/components/loader.module.scss"

const Loader = () => {
      const [viewHeight, setViewHeight] = useState(`100vh`)

      const loadStyle = {
            height: viewHeight
      }

      const handleResize = () => {
            setViewHeight(`${window.innerHeight}px`)
      }

      useEffect(() => {
            handleResize()
            window.addEventListener("resize", handleResize)
            return(() => {
                  window.removeEventListener("resize", handleResize)
            })
      }, [])

      return (
            <section style={loadStyle} className={styles.Loader}>
                  <div></div>
            </section>
      )
}

export default Loader