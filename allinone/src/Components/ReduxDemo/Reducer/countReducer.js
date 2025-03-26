// countReducer.js
import { INCREMENT, DECREMENT } from '../Action/ActionType';

const initialState = {
  count: 0,
};

export const countReducer = (state = initialState, {type, payload} ) => {  
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + payload };
    case DECREMENT:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};
