// actions.js
import axios from 'axios';
import { INCREMENT, DECREMENT, GET, GETSUCCESS, GETERROR } from './ActionType';

// Count Actions
export const increment = (data) => ({ type: INCREMENT, payload: data});
export const decrement = (data) => ({ type: DECREMENT, payload: data });

// Data fetching actions using Redux Thunk
export const getDataAction = () => ( { type: GET });

export const getDataFromAction = () => async (dispatch) => {
  dispatch(getDataAction());
  try {
    const response = await axios.get("https://reqres.in/api/users");
    dispatch({ type: GETSUCCESS, payload: response.data.data });  // Accessing 'data' from the response
  } catch (error) {
    dispatch({ type: GETERROR, error: error.message });
  }
};
