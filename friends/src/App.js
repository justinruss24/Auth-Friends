import React from 'react';
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

import './App.css';

function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/user" component={Friends} />
        </Switch>
      </div>
  );
}

export default App;
