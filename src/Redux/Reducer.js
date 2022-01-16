import { GET_USERS } from "./Types";
const initState = [];
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS:
      return [...action.payload];
    default:
      return state;
  }
};
export default Reducer
