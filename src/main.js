import React from 'react';
import {useHistory } from 'react-router-dom';




function MainPage(){

  const history = useHistory();
  
  function handleClickRegister() {
    history.push('/register');
  }
  
  function handleClickLogin() {
    history.push('/login');

  }

  return (
    <div class='te'>
      <div class="text-center card">
      <div class="card-body">
      <h1>Main Page</h1>
      <br></br>
      <button class="btn btn-outline-dark" onClick={handleClickRegister}>Register</button>
      <br></br>
      <br></br>
      <button class="btn btn-outline-danger" onClick={handleClickLogin}>Login</button>
      </div>
    </div>
    </div>
  );
}

export default MainPage;