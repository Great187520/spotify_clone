import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();


function App() {
  //Run code based on given condition
  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    
    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      //setToken(_token);


      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('0X3EtJrXWz1Jl6BzJGRa3w').then(response => 
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }

  }, []);

  console.log('smile', user);
  console.log('arien', token);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
      
    </div>
  );
}

export default App;
