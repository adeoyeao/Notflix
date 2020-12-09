import { useState, useEffect } from "react"
import styles from "../styles/layouts/index.module.scss"
import Header from "../components/Header"
import Login from "../components/Login"
import Head from "next/head"

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
                  <Head>
                        <title>Notflix</title>
                  </Head>
                  <Header />
                  <Login />
            </main>
      )
}

export default Index