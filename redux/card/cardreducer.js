import { FETCH_REQUEST_FAILURE, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_LOADING} from "./cardtypes"

const initialState = {
      Action: {
            loading: false,
            data: [],
            error: ""
      },
      Adventure: {
            loading: false,
            data: [],
            error: ""
      },
      Animation: {
            loading: false,
            data: [],
            error: ""
      },
      Comedy: {
            loading: false,
            data: [],
            error: ""
      },
      Crime: {
            loading: false,
            data: [],
            error: ""
      },
      Documentary: {
            loading: false,
            data: [],
            error: ""
      },
      Drama: {
            loading: false,
            data: [],
            error: ""
      },
      Family: {
            loading: false,
            data: [],
            error: ""
      },
      Fantasy: {
            loading: false,
            data: [],
            error: ""
      },
      History: {
            loading: false,
            data: [],
            error: ""
      },
      Horror: {
            loading: false,
            data: [],
            error: ""
      },
      Music: {
            loading: false,
            data: [],
            error: ""
      },
      Mystery: {
            loading: false,
            data: [],
            error: ""
      },
      Romance: {
            loading: false,
            data: [],
            error: ""
      },
      'Science Fiction': {
            loading: false,
            data: [],
            error: ""
      },
      'TV Movie': {
            loading: false,
            data: [],
            error: ""
      },
      Thriller: {
            loading: false,
            data: [],
            error: ""
      },
      War: {
            loading: false,
            data: [],
            error: ""
      },
      Western: {
            loading: false,
            data: [],
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
                        data: action.data
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