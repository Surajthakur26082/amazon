import React from "react";
import './Login.css';
import {Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";


function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth(app);

    const login = (event) => {
        event.preventDefault() ; // prevents page from refreshing
        signInWithEmailAndPassword(auth, email, password)
            .then((_auth) => {
                history('/');
            })
            .catch((event) => alert(event.message));
    }

    const signUp = (event) => {
        event.preventDefault() ;
        createUserWithEmailAndPassword(auth, email, password)
        .then((_auth) => {
            history('/');
        })
        .catch((event) => alert(event.message));
    }

    return(
        <div className="login">
            <Link to="/" >
            <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>

            <div className="login_form">
                <h1>Sign In</h1>
                <form>
                    <h5>Email Address</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login_signIn">Sign In</button>
                </form>
                <p>By signing-in you agree to amazon's Terms of services and Privacy policy</p>
                <button onClick={signUp} className="login_signUp">Sign up</button>
            </div>

        </div>
    );
}

export default Login;