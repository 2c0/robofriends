import {CHANGE_SERCHFIELD} from "./constants";
import {searchField} from "./actions";

const initialState = {
    searchField = '';
}

export const searchRobots (state=initialState, action={} ) => {
    switch (action.type) {
        case: CHANGE_SERCHFIELD:
            return Object.assign({}, state, searchField: action.payload);
        default:
            return state;
    }
}