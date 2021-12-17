import React from "react" // allows us to use all of the features that come with the react library
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationView";
import { NavBar } from "./components/nav/NavBar";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import "./InMyFeelings.css";

export const InMyFeelings = () => { //function/component that will render html with browser
  return (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("feelings_user")) {
            return (
              <>
                <h1>All In My Feelings</h1>
                <NavBar />
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
</>
    
  )
}
//simply contains other components that are responsible for the presentation and behavior of the application