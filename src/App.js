import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Records from "./Components/Records";
import Profile from "./Components/Profile";
import OrderHistory from "./Components/OrderHistory";
import RequestStock from "./Components/RequestStock";
import NotFound from "./Components/NotFound";
import NavBar from "./Components/NavBar";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // state = {};
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/records" component={Records}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/requeststock" component={RequestStock}></Route>
            <Route path="orderhistory" component={OrderHistory}></Route>
            <Route path="not-found" component={NotFound}></Route>
            <Redirect from="/" eaxact to="/records" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
