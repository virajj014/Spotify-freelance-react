const playlistsReducer = (state = null, action) => {
    if (action.type === 'SET_PLAYLISTS') {
        return action.payload
    }
    else {
        return state
    }
}

const discover_weeklyReducer = (state = null, action) => {
    if (action.type === 'SET_DISCOVER_WEEKLY') {
        return action.payload
    }
    else {
        return state
    }
}

export { playlistsReducer, discover_weeklyReducer }