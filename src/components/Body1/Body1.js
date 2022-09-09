import { MoreHoriz } from '@mui/icons-material'

import FavoriteRounded from '@mui/icons-material/FavoriteRounded'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Header/Header'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './Body1.css'
import SpotifyWebApi from 'spotify-web-api-js'
import { actionCreators } from '../../State'


const spotify = new SpotifyWebApi();

const Body1 = () => {
    const dispatch = useDispatch()

    const discoverweekly = useSelector(state => state.discoverweekly)

    // console.log(discoverweekly?.images[0]?.url)

    const playsong = (id) => {
        // console.log(id)

        spotify.getTrack(id).then((response) => {
            // console.log(response)
            dispatch(actionCreators.Setcurrent_song(response))
        })

    }

    // console.log(discoverweekly)
    return (
        <div className='Body1'>
            <Header spotify={spotify} />

            <div className='body-in'>
                {discoverweekly?.images[0]?.url != undefined ? <img src={discoverweekly.images[0].url} alt="" /> : ''}
                <div className='body-description'>
                    <h1>{discoverweekly?.type}</h1>
                    <h2>{discoverweekly?.name}</h2>
                    <p>{discoverweekly?.description}</p>
                </div>
            </div>

            <div className='body-songs'>
                <div className='body-icons'>
                    <PlayCircleIcon />
                    <FavoriteRounded className='body-favorite' fontSize='large' />
                    <MoreHoriz className='body-more' />

                </div>
                {/* List of songs */}
                {discoverweekly?.tracks?.items && discoverweekly?.tracks?.items?.map(item => (
                    <div className='songrow' onClick={() => playsong(item.track.id)}>
                        <div className='songrow-left'>
                            <img src={item.track.album?.images[0]?.url} alt="" />
                            <div className='songrow-info'>
                                <h1>{item.track.name}</h1>
                                <p>
                                    {item.track.artists.map((artist) => artist.name).join(", ")}
                                    {item.track.album.name}
                                </p>
                            </div>
                        </div>


                        <div className='songrow-right'>
                            <PlayCircleIcon className='body-playicon' />
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default Body1