import React from 'react';
import "./Login.css";
import { loginUrl} from './spotify';

function Login() {
  return (
    <div className='login'>
        <img src={require('./logo.png')} alt=""/>
        
        <a href={loginUrl}> LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login