import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};

var provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      var user = result.user;
      const newUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        success: true,
      };
      return newUser;
    })
    .catch((error) => {
      var errorMessage = error.message;
      const newUser = {
        error: errorMessage,
        success: false,
      };
      return newUser;
    });
};

export const createedUsers = (email, password, name) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const newUser = {
        error: "",
        createSuccess: true,
      };
      updateUserName(name);
      return newUser;
    })
    .catch((error) => {
      var errorMessage = error.message;
      const newUser = {
        error: errorMessage,
        success: false,
      };
      return newUser;
    });
};

export const signInUsers = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const newUser = {
        name: res.user.displayName,
        email: res.user.email,
        success: true,
        error: "",
        createSuccess: true,
      };
      return newUser;
    })
    .catch((error) => {
      var errorMessage = error.message;
      const newUser = {
        error: errorMessage,
        success: false,
      };
      return newUser;
    });
};

const updateUserName = (name) => {
  const user = firebase.auth().currentUser;
  user
    .updateProfile({
      displayName: name,
    })
    .then(() => {
      // Update successful
      console.log("User Name Update Successfully");
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
};
