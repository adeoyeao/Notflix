import { FETCH_REQUEST_FAILURE, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_LOADING} from "./cardtypes"

const requestLoading = (genre) => ({ type: FETCH_REQUEST_LOADING, genre: genre })
const requestSuccess = (genre, data) => ({type: FETCH_REQUEST_SUCCESS, genre: genre, data: data})
const requestFailure = (genre, error) => ({type: FETCH_REQUEST_FAILURE, genre: genre, error: error})

export { requestFailure, requestLoading, requestSuccess}