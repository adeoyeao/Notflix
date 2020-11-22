import { useState, useEffect } from "react"
import styles from "../styles/layouts/index.module.scss"
import Header from "../components/Header"
import Login from "../components/Login"

const Index = () => {
      const [ viewHeight, setViewHeight ] = useState(`100vh`)

      const handleResize = () => {
            setViewHeight(`${window.innerHeight}px`)
      }

      useEffect(() => {
            handleResize()
            window.addEventListener("resize", handleResize)
            return (() => window.removeEventListener("resize", handleResize))
      })

      const mainStyle = {
            minHeight: viewHeight
      }

      return (
            <main style={mainStyle} className={styles.Index}>
                  <Header />
                  <Login />
            </main>
      )
}

export default Index