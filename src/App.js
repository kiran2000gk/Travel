import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Pages/Home";
import NavBar from "./components/layout/NavBar";
import DestinationReview from "./components/DestReview/DestinationReview";
import Summaryrev from "./components/DestReview/Summaryrev";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Error from "./components/Error";
import Profile from "./components/Profiles/Profile";
import Updateprofile from "./components/Profiles/Updateprofile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route
            exact
            path="/destinationreview"
            component={DestinationReview}
          />
          <Route exact path="/summaryrev" component={Summaryrev} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/updateprofile" component={Updateprofile} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
