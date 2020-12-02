import { FETCH_REQUEST_FAILURE, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_LOADING} from "./cardtypes"

const initialState = {
      Action: {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      Adventure: {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      Animation: {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      Comedy: {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      Crime: {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      Documentary: {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      Drama: {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      Family: {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      Fantasy: {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      History: {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      Horror: {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      Music: {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      Mystery: {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      Romance: {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      'Science Fiction': {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      'TV Movie': {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      Thriller: {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      War: {
            loading: false,
            data: [],
            videos: [],
            error: ""
      },
      Western: {
            loading: false,
            data: [],
            videos: [],
            error: ""
      }
}

const cardReducer = (state = initialState, action ) => {
      switch(action.type) {
            case FETCH_REQUEST_LOADING: return {
                  ...state,
                  [action.genre]: {
                        ...state[action.genre],
                        loading: true
                  }
            }
            case FETCH_REQUEST_SUCCESS: return {
                  ...state,
                  [action.genre]: {
                        ...state[action.genre],
                        loading: false,
                        data: action.data,
                        videos: action.videos
                  }
            }
            case FETCH_REQUEST_FAILURE: return {
                  ...state,
                  [action.genre]: {
                        ...state[action.genre],
                        loading: false,
                        error: action.error
                  }
            }
            default: return state
      }
}

export default cardReducer