import {CHANGE_SEARCH_FIELD} from "./constants";

// set initial state here instead of the container component
const initialState = {
  searchField: ''
};

export const searchRobots = (state = initialState, action = {}) => {
  console.log(action.type);
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload});
      //return an object with the initial state, plus new searchField property
      // this is coming from actions.js file, type and payload
    default:
      return state;
  }
};