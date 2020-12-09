import styles from "../styles/components/logo.module.scss"
import Link from "next/link"

const Logo = () => (
      <Link href="/">
            <img src="/images/logo.svg" 
            className={styles.Logo}/>
      </Link>
)

export default Logo