import React from "react";
import { Route, Redirect } from "react-router-dom";
import _ from "lodash";

function requireAuth(userNameKey) {
  return JSON.parse(localStorage.getItem(userNameKey)).isUserLoggedIn;
}

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        var username = localStorage.getItem("appLoggedinUser") 
        // if (!username){
        //   username =  _.get(props.location, "state.userName")
        // }
        // if (
        //   _.get(props.location, "state.userName") &&
        //   requireAuth(props.location.state.userName)
        // ) 
        if (
          username &&
          requireAuth(username)
        ) 
        {
          props.loggedinUser= JSON.parse(localStorage.getItem(username));
          return <Component {...props} />;
          // <Home {...props}>
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          );
        }
      }}
    />
  );
};
