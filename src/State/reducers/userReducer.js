const userReducer = (state = null, action) => {
    if (action.type === 'SET_USER') {
        return action.payload
    }
    else {
        return state
    }
}

export default userReducer