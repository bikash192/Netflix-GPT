import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [signin, setSignIn] = useState(true);
  const isSignIn = () => {
    setSignIn(!signin);
  };
  const [error, setError] = useState(null);
  const email = useRef();
  const password = useRef();
  const navigate=useNavigate();

  const handleButton = () => {
    // validate the form data
    //checkValidData();

    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setError(message);
    // console.log(message);
    if (message) return;

    if (!signin) {
      // Write code for SignUp
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Write code for SignIn
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_small.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {signin ? "Sign In" : "Sign Up"}
        </h1>
        {!signin && (
          <input
            type="text"
            placeholder="Enter your Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Add Email"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg "
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButton}
        >
          {signin ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500 text-bold">{error}</p>
        <p className="p-2 m-2 cursor-pointer" onClick={isSignIn}>
          {signin ? "New to Netflix?Sign up now." : "Already a User"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;

