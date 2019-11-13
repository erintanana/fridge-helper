import * as TYPES from './types';

const initialState = {
  isLoading: true,
  session: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload,
      };
    case TYPES.SET_SESSION_NUMBER:
      return {
        ...state,
        session: action.payload,
      };
  }

  return state;
}
