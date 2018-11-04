const initialState = {
    user: "unknown user",
    year: 2015,
    name: ''
}


export default function userInfo (state = initialState, action) {
    switch (action.type) {
        case 'SET_YEAR':
            return {...state, year: action.payload}
            break;
        case 'SET_NAME':
            return {...state, name: action.payload}
            break;
        default:
            return state
    }
}