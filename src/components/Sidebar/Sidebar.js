import React from 'react'
import './Sidebar.css'
import logo from '../../media/fulllogo.png';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { AddBoxRounded } from '@mui/icons-material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useDispatch, useSelector } from 'react-redux';

import { actionCreators } from '../../State/index';
const Sidebar = ({ spotify }) => {

    const playlists = useSelector(state => state.playlists)
    const dispatch = useDispatch()

    // console.log(playlists)

    const getplaylist = (id) => {
        spotify.getPlaylist(id).then((response) => {
            dispatch(actionCreators.Setdiscover_weekly(response))
        })
        // dispatch(actionCreators.Setdiscover_weekly(playlist))
    }
    return (
        <div className="Sidebar">
            <img src={logo} />
            <div className="Sidebar_c1">
                <div className="Sidebar_c1_1">
                    <HomeIcon />
                    <p>Home</p>

                </div>
                <div className="Sidebar_c1_1">
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div className="Sidebar_c1_1">
                    <LibraryMusicIcon />
                    <p>Your Library</p>
                </div>
            </div>
            <div className="Sidebar_c1">
                <div className="Sidebar_c1_1">
                    <AddBoxRounded />
                    <p>Create Playlist</p>

                </div>
                <div className="Sidebar_c1_1">
                    <FavoriteRoundedIcon />
                    <p>Liked Songs</p>
                </div>

            </div>
            <div className="Sidebar_hr">

            </div>

            <div className="Sidebar_c1">
                {playlists?.items?.map(playlist => (
                    <div className="Sidebar_c1_2" onClick={() => getplaylist(playlist.id)}>
                        <p>{playlist.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar