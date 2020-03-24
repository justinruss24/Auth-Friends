import React from 'react';
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";


import './App.css';

function App() {
  return (
      
      <div className="App">
        <h1>FRIENDS</h1>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/user" component={Friends} />
        </Switch>
        
      </div>
  );
}

export default App;
