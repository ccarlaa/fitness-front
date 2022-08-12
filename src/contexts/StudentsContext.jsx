import React, { createContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const StudentsContexts = createContext({});

export const StudentsProvider = ({ children }) => {
    const url = "http://localhost:5000"
    const [ student, setStudent ] = useState({
        name: "",
        age: "", 
        weight: "", 
        height: "", 
        objective: "", 
        comments: "", 
    })
    const [ badPostStudent, setBadPostStudent ] = useState(false);

    const navigate = useNavigate()

    const postStudent = (studentInfos, config) => {
        axios.post(`${url}/new-student`, studentInfos, config)
        .then((answer) => {
            navigate('/students');
        })
        .catch((e) => {
            console.log(e.response.data);
            setBadPostStudent(!badPostStudent);
            window.confirm(e.response.data)
        })
    }

    return (
        <StudentsContexts.Provider
            value = {{
                student,
                setStudent,
                badPostStudent,
                postStudent
            }}
        >
            { children }
        </StudentsContexts.Provider>
    )
}