import styles from "../styles/components/header.module.scss"
import Logo from "./Logo"
import { useState, useEffect } from "react"

const Header = ({ children }) => {
      const [ y, setY ] = useState()

      const handleScroll = () => {
            setY(window.scrollY)
      }

      useEffect(() => {
            handleScroll()
            window.addEventListener("scroll", handleScroll)
            return (() => window.removeEventListener("scroll", handleScroll))
      })

      const headerStyle = y > 30 ? {
            background: "rgba( 0, 0, 0, 0.9)"
      } : {
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.9), rgba( 0, 0, 0, 0))"
      }

      return (
            <header className={styles.Header} style={headerStyle}>
                  <Logo />
                  { children }
            </header>
      )
}

export default Header