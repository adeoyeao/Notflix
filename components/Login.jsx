import styles from "../styles/components/login.module.scss"

import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

const Login = () => {
      const [ heading, setHeading ] = useState("Sign In")
      const [ input, setInput ] = useState({
            email: "",
            password: ""
      })

      const router = useRouter()

      const handleChange = (e) => {
            const { name, value } = e.target 
            setInput(prev => ({
                  ...prev,
                  [name]: value
            }))
      } 

      const handleSubmit = (e) => {
            e.preventDefault()
            fetch(`/login`, {
                  method: "POST",
                  headers: {
                        "content-type": "application/json"
                  },
                  body: JSON.stringify({username: input.email, password: input.password})
            })
            .then(res => res.json())
            .then(response => {
                  setHeading(response.message)
                  setTimeout(() => router.push("/browse"), 500)
            })
            .catch(err => {
                  console.error(err)
                  setHeading(`Login failed`)
                  setInput({
                        email: "",
                        password: ""
                  })
            })
      }

      const handleOAuth = (oauth) => {
            router.push(`/auth/${oauth}`)
      }

      return (
            <form className={styles.Login} onSubmit={handleSubmit}>
                  <h1>{heading}</h1>

                  <div className={styles.Login_inputContainer}>
                        <input 
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        value={input.email}
                        onChange={handleChange} 
                        className={styles.Login_input}
                        autoComplete="off"
                        autoCapitalize="off"
                        required/>
                        <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={input.password}
                        onChange={handleChange} 
                        className={styles.Login_input}
                        autoComplete="off"
                        required/>
                  </div>

                  <button 
                  type="submit"
                  className={styles.Login_submitBtn}>Sign In</button>
                  
                  <div className={styles.Login_socialBtns}>
                        <p onClick={() => handleOAuth("facebook")}>Sign in with Facebook</p>
                        <img src={`/icons/facebook.svg`} 
                              className={styles.Login_socialBtn___facebook} 
                              onClick={() => handleOAuth("facebook")}/>
                        <span />
                        <p onClick={() => handleOAuth("google")}>Sign in with Google</p>
                        <img src={`/icons/google.svg`} 
                              className={styles.Login_socialBtn___google} 
                              onClick={() => handleOAuth("google")}/>
                  </div>

                  <Link href="/register"><a>New to Notflix? Click to join us now!</a></Link>
            </form>
      )
}

export default Login