import * as type from '../types';

const initialState = {
    data: [],
    loading: false,
    error: null,
}

export default function users(state = initialState, action) {
    switch (action.type) {
        case type.GET_USERS:
            return {
                ...state,
                loading: true
            }
        case type.GET_USERS_SUCCESS:
            return {
                ...state,
                data: action.users,
                loading: false
            }
        case type.GET_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state
    }
}
