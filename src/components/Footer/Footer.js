import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';

import { Grid } from '@mui/material';
import { Slider } from '@mui/material';
import { PlaylistPlay } from '@mui/icons-material';
import { VolumeDown } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const Footer = () => {

    const currentsong = useSelector(state => state.currentsong)

    // console.log(currentsong)

    return (
        <>
            {currentsong != null &&
                <div className="Footer">
                    <div className="Footer__left">
                        <img className="Footer__albumLogo" src={currentsong?.album?.images[0]?.url} alt="" />
                        <div className="Footer__songInfo">
                            <h4>{currentsong?.album.name}</h4>
                            <p>{currentsong?.artists.map((artist) => {
                                return `${artist.name}   `
                            })}</p>
                        </div>
                    </div>
                    <div className="Footer__center">
                        <ShuffleIcon className="Footer__green" />
                        <SkipPreviousIcon className="Footer__icon" />
                        <PlayCircleOutlineIcon fontSize="large" className="Footer__icon" />
                        <SkipNextIcon className="Footer__icon" />
                        <RepeatIcon className="Footer__green" />
                    </div>
                    <div className="Footer__right">

                        <PlaylistPlay />
                        <VolumeDown className='volicon' />
                        <Slider aria-label="Volume" />

                    </div>
                </div>}
        </>

    )
}

export default Footer