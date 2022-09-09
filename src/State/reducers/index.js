import { combineReducers } from "redux";
import userReducer from "./userReducer";
import tokenReducer from "./tokenReducer";
import { playlistsReducer, discover_weeklyReducer } from "./playlistsReducer";
import current_song from "./songReducer";
const reducers = combineReducers({
    user: userReducer,
    token: tokenReducer,
    playlists: playlistsReducer,
    discoverweekly: discover_weeklyReducer,
    currentsong: current_song,
    // playing: false,
    // item: null,
})

export default reducers