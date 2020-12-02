import { FETCH_REQUEST_FAILURE, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_LOADING} from "./cardtypes"

const requestLoading = (genre) => ({ type: FETCH_REQUEST_LOADING, genre: genre })
const requestSuccess = (genre, data, videos) => ({type: FETCH_REQUEST_SUCCESS, genre: genre, data: data, videos: videos})
const requestFailure = (genre, error) => ({type: FETCH_REQUEST_FAILURE, genre: genre, error: error})

export { requestFailure, requestLoading, requestSuccess}