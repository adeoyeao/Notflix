import genreReducer from "./genre/genrereducer"
import cardReducer from "./card/cardreducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
      genre: genreReducer,
      card: cardReducer
})

export default rootReducer