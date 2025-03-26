// dataReducer.js
import { GET, GETSUCCESS, GETERROR } from '../Action/ActionType';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return { ...state, loading: true };
    case GETSUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case GETERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
