import React, { useContext, useState } from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import {
  createedUsers,
  initFirebase,
  signInUsers,
  signInWithGoogle,
} from "./LoginManager";

initFirebase();

const Login = () => {
  const [userLoggedIn, setUserLoggedIn] = useContext(userContext);
  const [createUser, setCreateUser] = useState(false);
  const [newUser, setNewUser] = useState({});

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/login" } };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((res) => {
      setUserLoggedIn(res);
      history.replace(from);
    });
  };
  const handleOnBlur = (e) => {
    let validInput = true;
    if (e.target.name === "email") {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
      if (emailValid) {
        validInput = true;
      } else {
        setEmailError(true);
      }
    }
    if (e.target.name === "password") {
      const passValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/.test(
        e.target.value
      );
      if (passValid) {
        validInput = true;
      } else {
        setPasswordError(true);
      }
    }
    if (validInput) {
      const validUsers = { ...newUser };
      validUsers[e.target.name] = e.target.value;
      setNewUser(validUsers);
    }
  };
  const handleOnSubmit = (e) => {
    if (createUser && newUser.email && newUser.password) {
      createedUsers(newUser.email, newUser.password, newUser.name).then(
        (res) => {
          setUserLoggedIn(res);
        }
      );
    }
    if (!createUser && newUser.email && newUser.password) {
      signInUsers(newUser.email, newUser.password).then((res) => {
        setUserLoggedIn(res);
        history.replace(from);
      });
    }
    e.preventDefault();
  };
  return (
    <div>
      <div className="input-form">
        <h4>{createUser ? "Sign Up" : "Sign In"}</h4>
        <form onSubmit={handleOnSubmit}>
          {createUser && (
            <input
              onBlur={handleOnBlur}
              type="text"
              name="name"
              id=""
              placeholder="Name"
              required
            />
          )}
          <br />
          <input
            onBlur={handleOnBlur}
            type="text"
            name="email"
            placeholder="Enter valid email address"
            required
          />
          {emailError && (
            <p style={{ color: "red" }}>Enter valid email address</p>
          )}
          <br />
          <input
            onBlur={handleOnBlur}
            type="password"
            name="password"
            id=""
            placeholder="Passwod"
          />
          {passwordError && (
            <p style={{ color: "red" }}>
              Password atleast 1 uppercase, 1 lowercase letter and 1 number
            </p>
          )}
          <br />
          <input type="submit" value={createUser ? "Sign Up" : "Sign In"} />
          <br />
          {userLoggedIn.createSuccess && (
            <p>User {createUser ? "Created" : "Log In"} Successfully</p>
          )}
          <p style={{ color: "red" }}>{userLoggedIn.error}</p>
          <br />
          <p>
            Don't have an account?{" "}
            <span
              className="create-account"
              onClick={() => setCreateUser(!createUser)}
            >
              Create an account
            </span>
          </p>
        </form>
      </div>
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <h4>Or</h4>
        <Button
          onClick={handleGoogleSignIn}
          variant="contained"
          style={{ backgroundColor: "#ac1a1a" }}
          color="primary"
        >
          <EmailIcon style={{ marginRight: 10 }}></EmailIcon>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
