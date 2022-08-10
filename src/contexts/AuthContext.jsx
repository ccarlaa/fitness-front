import React, { createContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContexts = createContext({});

export const AuthProvider = ({ children }) => {
    const [ signUp, setSignUp ] = useState({
        username: "",
        email: "",
        password: "",
        repeatedPassword: ""
    });
    const [ badSignUp, setbadSignUp ] = useState(true);
    const [ infosLogin, setInfosLogin ] = useState({
        email: "", 
        password: "",
    });

    const [ badSignIn, setBadSignIn ] = useState(false);

    const navigate = useNavigate();

    const postSignUp = (signUp) => {
        const body = {
            name: signUp.username,
            email: signUp.email,
            password: signUp.password
        }
        axios.post("http://localhost:5000/sign-up", body)
        .then(() => navigate('/sign-in'))
        .catch((e) => {
            console.log(e.response.data);
            setbadSignUp(!badSignUp);
            window.confirm(e.response.data);
        })
    }

    const postSignIn = (infosLogin) => {
        axios.post("http://localhost:5000/sign-in", infosLogin)
        .then((answer) => {
            localStorage.setItem("user", JSON.stringify({
                name: answer.data.name,
                token: answer.data.token,
            }));
            navigate('/homePage');
        })
        .catch((e) => {
            console.log(e.response.data);
            setBadSignIn(!badSignIn);
            window.confirm(e.response.data)
        });
    }

    return (
        <AuthContexts.Provider
            value = {{
                postSignUp,
                signUp,
                setSignUp,
                badSignUp,
                setBadSignIn,
                badSignIn,
                setInfosLogin,
                infosLogin,
                postSignIn
            }}
        >
            { children }
        </AuthContexts.Provider>
    )
}