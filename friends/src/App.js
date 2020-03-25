import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import { ProtectedRoute } from "./utils/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute path="/friends" component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;

