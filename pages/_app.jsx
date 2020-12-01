import App from "next/app"
import "../styles/settings/global.scss"
import store from "../redux/store"
import { Provider } from "react-redux"

const MyApp = ({ Component, pageProps }) => {
      return (
      <Provider store={store}>
            <Component {...pageProps} />
      </Provider>
      )
}

export default MyApp
