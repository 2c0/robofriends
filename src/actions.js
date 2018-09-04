import { CHANGE_SERCHFIELD } from './constants.js';

export const searchField (text) => ({
    type: CHANGE_SERCHFIELD,
    payload: text
})