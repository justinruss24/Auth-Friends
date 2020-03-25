import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

// rest operator does this:
// const someObj = {
//   prop1: "a",
//   prop2: "b",
//   prop3: "c",
//   prop4: "d",
//   prop5: "e"
// };
