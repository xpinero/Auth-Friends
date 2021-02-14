import React, { useState } from 'react';
import * as authService from '../services/auth-service';
import{ useHistory } from 'react-router-dom';


const LoginPage = () => {
  const [userName, setUserName] = useState('Lambda School');
  const [passWord, setPassWord] = useState('i<3Lambd4');
  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();
    console.log('login')
    await authService.login(userName, passWord);
    history.push('/friends');
  };

  return (
    <div>
      <form onSubmit={login}>
        <input value={userName} onChange={e=>setUserName(e.target.value)}></input>
        <input value={passWord} onChange={e=>setPassWord(e.target.value)} type="password"></input>
        <button>Login</button>
      </form>
    </div>
  )
};

export default LoginPage;