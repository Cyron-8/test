import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./LoginForm";
import Register from "./RegistrationForm";
import Main from './main';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/main" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

      </Switch>
    </Router>
  );
}

export default App;
