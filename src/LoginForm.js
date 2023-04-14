import React from 'react';
import Button from './Button';
import { useHistory } from 'react-router-dom';
import './Login.css';



function LoginForm(props) {
  function handleLogin() {
    // ログインの処理を実行
  }

  const history = useHistory();
  
  function handleClickReturn() {
    history.push('/main');
  }

  return (
    <div class='deza'>
      {/* <input type="text" placeholder="ユーザー名" />
      <input type="password" placeholder="パスワード" />
      <Button text="ログイン" onClick={handleLogin} /> */}
      <form class="text-center card">
      <div class="card-body">
      <h1 class="card-title">ログイン</h1>
      <p class="card-text"><input class="form-control" type="email" placeholder="メールアドレス" required autofocus /></p>
      <p class="card-text"><input class="form-control" type="password" placeholder="パスワード" required /></p>
      {/* <p class="card-text"><a href="#">パスワードをお忘れの場合</a></p> */}
      {/* <p class="card-text"><button class="btn btn-primary" type="submit">ログイン</button></p> */}
      <Button text="ログイン" onClick={handleLogin} />

      </div>
      </form>

      <br></br>
      <button class="form-control" onClick={handleClickReturn}>戻る</button>
    </div>
  );
}

export default LoginForm;
