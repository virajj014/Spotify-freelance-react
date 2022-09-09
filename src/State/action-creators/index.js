export const Setuser = (userdata) => {
    return (dispatch) => {
        dispatch({
            type: "SET_USER",
            payload: userdata,
        });
    }
}

export const Settoken = (token) => {
    return (dispatch) => {
        dispatch({
            type: "SET_TOKEN",
            payload: token,
        });
    }
}


export const Setplaylists = (playlists) => {
    return (dispatch) => {
        dispatch({
            type: "SET_PLAYLISTS",
            payload: playlists,
        });
    }
}


export const Setdiscover_weekly = (discover_weekly) => {
    return (dispatch) => {
        dispatch({
            type: "SET_DISCOVER_WEEKLY",
            payload: discover_weekly,
        });
    }
}

export const Setcurrent_song = (current_song) => {
    return (dispatch) => {
        dispatch({
            type: "SET_CURRENT_SONG",
            payload: current_song,
        });
    }
}