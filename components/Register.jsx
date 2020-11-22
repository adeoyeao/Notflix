import { useState } from "react"
import styles from "../styles/components/register.module.scss"
import { useRouter } from "next/router"

const Register = () => {
      const router = useRouter()
      
      const [ input, setInput ] = useState({
            email: "",
            password: ""
      })

      const handleChange = (e) => {
            const { name, value } = e.target
            setInput(prev => ({
                  ...prev,
                  [name]: value
            }))
      }

      const handleSubmit = (e) => {
            e.preventDefault()
            fetch("/register", {
                  method: "POST",
                  headers: {
                        "content-type": "application/json"
                  },
                  body: JSON.stringify({username: input.email, password: input.password})
            })
            .then(res => res.json())
            .then(() => setTimeout(() => router.push("/browse"), 500))
            .catch(err => console.error(err))

      }

      return (
            <form className={styles.Register} onSubmit={handleSubmit}>
                  <input 
                  type="text" 
                  name="email"
                  value={input.email}
                  placeholder="Email Address"
                  onChange={handleChange} 
                  autoComplete="off"/>

                  <input 
                  type="password" 
                  name="password"
                  value={input.password}
                  placeholder="Password"
                  onChange={handleChange}
                  autoComplete="off"/>

                  <button type="submit">Sign Up</button>
            </form>
      )
}

export default Register