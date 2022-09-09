
import { useEffect, useState } from 'react';
import './App.css';
import Signin from './components/Signin/Signin';
import { getToken } from './spotify/Spotify';

import SpotifyWebApi from 'spotify-web-api-js';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from './State/index';
import MainScreen from './components/MainScreen/MainScreen';

const spotify = new SpotifyWebApi();

function App() {
  const user = useSelector(state => state.user)
  const token = useSelector(state => state.token)
  const dispatch = useDispatch()

  useEffect(() => {
    const tokenfull = getToken()
    window.location.hash = ""
    // console.log(tokenfull)
    const acctoken = tokenfull.access_token;

    if (acctoken) {

      dispatch(actionCreators.Settoken(acctoken))
      spotify.setAccessToken(acctoken)

      spotify.getMe().then(userdata => {
        // console.log(userdata)
        dispatch(actionCreators.Setuser(userdata))
      })

      spotify.getUserPlaylists().then(playlists => {
        dispatch(actionCreators.Setplaylists(playlists))
      })


      spotify.getPlaylist('37i9dQZEVXbLZ52XmnySJg').then(response => {
        // console.log(response)
        dispatch(actionCreators.Setdiscover_weekly(response))
      })


    }

    // console.log("Token: ", token)




  }, [])


  // console.log(user)
  // console.log(token)
  return (
    <div className="App">
      {
        token ? <MainScreen spotify={spotify} /> : <Signin />
      }
    </div>
  );
}

export default App;
