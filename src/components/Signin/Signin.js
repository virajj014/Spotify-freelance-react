import React, { useEffect, useState } from 'react'
import './Signin.css'
import logo from '../../media/fulllogo.png';
import { getToken, loginUrl } from '../../spotify/Spotify';

const Signin = () => {

    return (
        <div className="signin">
            <img src={logo} />
            <button>
                <a href={loginUrl}>Sign in with Spotify</a>
            </button>
        </div>
    )
}

export default Signin