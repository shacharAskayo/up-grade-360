

const initialState = {
    user: null,
    feed: {
        moments: [],
        posts: []
    },
    isLoading: false
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.user }
        case 'LOGOUT':
            return { ...state, user: null }
        case 'LOAD_USER':
            return { ...state, user: action.user }
        default:
            return state
    }
}