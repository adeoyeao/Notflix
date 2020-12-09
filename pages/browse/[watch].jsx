import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import styles from "../../styles/layouts/browse/watch.module.scss"
import Head from "next/head"

const Watch = () => {
      const router = useRouter()
      const watch = router.query.watch

      const [ viewHeight, setViewHeight] = useState(`100vh`)
      const [ visible, setVisible ] = useState(true)

      const handleResize = () => {
            setViewHeight(`${window.innerHeight}px`)
      }

      const handleMouseMove = () => setVisible(true)
      const handleMouseOver = () => setVisible(true)

      const mainStyle = {
            height: viewHeight
      }

      useEffect(() => {
            handleResize()
            window.addEventListener("resize", handleResize)
            window.addEventListener("mousemove", handleMouseMove)
            return(() => {
                  window.removeEventListener("resize", handleResize)
                  window.removeEventListener("mousemove", handleMouseMove)
            })
      }, [])

      useEffect(() => {
            setTimeout(() => setVisible(false), 3000)
      })

      return (
            <main style={mainStyle} className={styles.Watch}>
                  <Head>
                        <title>Notflix</title>
                  </Head>
                  { visible && <Link href="/browse"><a onMouseOver={handleMouseOver}>Back to Browse</a></Link> }
            <div style={{width: "100%"}}>
                  <iframe style={{width: "100%", height: "100%"}}
                  frameborder="0" type="text/html" 
                  src={`https://www.dailymotion.com/embed/video/${watch}?autoplay=1&queue-autoplay-next=0e&queue-enable=0&sharing-enable=0&ui-logo=0`} 
                  width="100%" height="100%"   
                  allow="autoplay" allowfullscreen>
                  </iframe>
             </div>
            </main>
      )
}

export default Watch