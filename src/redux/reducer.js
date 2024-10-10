const initialState = {
    count: 0,
    isAuthenticated: false,
    user: null,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + action.payload };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
            case 'LOGIN':
                return { ...state, isAuthenticated: true, user: action.payload };
            case 'LOGOUT':
                return { ...state, isAuthenticated: false, user: null };
                
        default:
            return state;
    }
};

export default counterReducer;
