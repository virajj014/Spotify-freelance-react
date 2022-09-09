import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';

import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import CancelIcon from '@mui/icons-material/Cancel';
import { actionCreators } from '../../State';

const spotify = new SpotifyWebApi();

const Header = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    // console.log(user)
    const [keyword, setkeyword] = useState('')
    const [searchresult, setsearchresult] = useState('')

    // console.log(keyword)

    useEffect(() => {
        spotify.searchTracks(keyword).then((response) => {
            // console.log(response)
            setsearchresult(response.tracks.items)
        })
    }, [keyword])


    console.log(typeof (searchresult))

    const playsong = (id) => {
        console.log(id)

        spotify.getTrack(id).then((response) => {
            // console.log(response)
            dispatch(actionCreators.Setcurrent_song(response))
        })

    }


    console.log(searchresult)
    return (
        <div className="header">
            <div className="header-left">
                <div className="searchbar">
                    <SearchIcon />
                    <input placeholder="Search for Artists, Songs, Podcasts or playlists" type="text" value={keyword} onChange={(e) => setkeyword(e.target.value)} />
                    {keyword != '' && <div onClick={() => setkeyword('')}><CancelIcon /></div>}

                </div>
                {keyword != '' && <div className="searchresult">
                    {searchresult.length > 0 && searchresult.map(item => (
                        <div className="searchresult-item" onClick={() => playsong(item.id)}>
                            <img src={item.album.images[0].url} alt="" />
                            <div className="searchresult-info">
                                <h1>{item.name}</h1>
                                <p>{item.artists[0].name}</p>
                            </div>
                        </div>
                    ))}
                </div>}
            </div>


            <div className="header_right">
                <Avatar src={user?.images[0]?.url} className="userimg" />
                <p>{user?.display_name}</p>

            </div>
        </div>
    )
}

export default Header