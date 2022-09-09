const current_song = (state = null, action) => {
    if (action.type === 'SET_CURRENT_SONG') {
        return action.payload
    }
    else {
        return state
    }
}

export default current_song