import { RECEIVE_MERCHANTS } from "../actions/merchants"; 

export default function merchants(state = {}, action) {
    switch (action.type) {
        case RECEIVE_MERCHANTS:
            return {
                ...state,
                ...action.merchants
            }
        default:
            return state;
    }
}