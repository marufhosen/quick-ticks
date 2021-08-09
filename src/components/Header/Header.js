import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./Header.css";
import logo from "../../images/logo.PNG";

import { Link, useHistory } from "react-router-dom";
import { userContext } from "../../App";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  media: {
    width: 185,
    color: "black",
  },
  navBackground: {
    backgroundColor: "white",
    color: "black",
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleLoginBtn = () => {
    history.push("/login");
  };
  const [userLoggedIn, setUserLoggedIn] = useContext(userContext);
  const handleLogOutBtn = () => {
    setUserLoggedIn({});
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.navBackground}>
          <img className={classes.media} src={logo} alt="" />
          <Typography className={classes.title}></Typography>
          <Link className="component-link" to="/home">
            Home
          </Link>
          <Link className="component-link" to="/destination">
            Destination
          </Link>
          <Link className="component-link" to="/contact">
            Contact
          </Link>
          {userLoggedIn.success ? (
            <Button
              onClick={handleLogOutBtn}
              className="login-btn"
              variant="contained"
              style={{ backgroundColor: "#ac1a1a", color: "#ffffff" }}
            >
              Log Out
            </Button>
          ) : (
            <Button
              onClick={handleLoginBtn}
              className="login-btn"
              variant="contained"
              style={{ backgroundColor: "#ac1a1a", color: "#ffffff" }}
            >
              Login
            </Button>
          )}
          {userLoggedIn.success && (
            <p style={{ color: "#ac1a1a", marginLeft: 10 }}>
              {userLoggedIn.name}
            </p>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
