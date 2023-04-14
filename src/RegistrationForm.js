import React from 'react';
import Button from './Button';
import { useHistory } from 'react-router-dom';


function RegistrationForm(props) {
  function handleRegistration() {
    // 登録の処理を実行
  }

  const history = useHistory();
  
  function handleClickReturn() {
    history.push('/main');
  }

  return (
    
    <div>
    <form class="text-center card">
    <div class="card-body">
      <h1 class='card-title'>登録</h1>
      <p class="card-text"><input class="form-control" type="text" placeholder="ユーザー名" required/></p>
      <p class="card-text"><input class="form-control" type="email" placeholder="メールアドレス" required autofocus /></p>
      <p class="card-text"><input class="form-control" type="password" placeholder="パスワード" required /></p>
      
      
      <Button text="登録" onClick={handleRegistration} />

      
      </div>
      </form>
      <br></br>
      <button  class="form-control" onClick={handleClickReturn}>戻る</button>
    </div>


  );
}

export default RegistrationForm;
