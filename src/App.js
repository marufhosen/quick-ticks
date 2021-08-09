import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Destination from "./components/Destination/Destination";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const userContext = createContext();

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({});
  return (
    <userContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/destination/:title">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
