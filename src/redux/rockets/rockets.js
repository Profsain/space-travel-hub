const ROCKETS_FETCH_BEGIN = "ROCKETS_FETCH_BEGIN";
const ROCKETS_FETCH_SUCCESS = "ROCKETS_FETCH_SUCCESS";
const ROCKETS_FETCH_ERROR = "ROCKETS_FETCH_ERROR";
// initial store
const store = {
  rockets: [],
  loading: false,
  error: null,
}

// rockets reducers
const rocketsReducer = (state = store, action) => {
  switch(action.type) {
    case ROCKETS_FETCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ROCKETS_FETCH_SUCCESS:
      return {
        ...state,
        rockets: action.payload.rocketArr,
        loading: false,
      };
    case ROCKETS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

// rockets action creators
export const rocketsFetchBegin = () => ({
  type: ROCKETS_FETCH_BEGIN,
});

export const rocketsFetchSuccess = (rocketArr) => ({
  type: ROCKETS_FETCH_SUCCESS,
  payload: { rocketArr },
});

export const rocketsFetchError = (error) => ({
  type: ROCKETS_FETCH_ERROR,
  payload: { error },
});

export default rocketsReducer;
