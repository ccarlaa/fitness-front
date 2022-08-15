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
    });
    const [ badPostStudent, setBadPostStudent ] = useState(false);
    const [ studentsList, setStudentsList ] = useState([]);
    const [ getStudentsAnswer, setGetStudentsAnswer ] = useState(false);
    const [ deleted, setDeleted ] = useState(false);
    const [ uniqueStudentInfos, setUniqueStudentInfos ] = useState({
        name: "",
        age: "", 
        weight: "", 
        height: "", 
        objective: "", 
        comments: "", 
    });
    const [ successfullyEdited, setSuccessfullyEdited ] = useState(false)
    const [ studentOldName, setStudentOldName ] = useState("")

    const navigate = useNavigate()

    const postStudent = (studentInfos, config) => {
        axios.post(`${url}/new-student`, studentInfos, config)
        .then(() => {
            navigate('/students');
        })
        .catch((e) => {
            console.log(e.response.data);
            setBadPostStudent(!badPostStudent);
            window.confirm(e.response.data);
        })
    }

    const getStudents = (config) => {
        axios.get(`${url}/students`, config)
        .then((answer) => {
            setStudentsList(answer.data);
            setGetStudentsAnswer(true);
        })
        .catch((e) => {
            console.log(e.response.data);
            window.confirm(e.response.data);
        })
    }  

    const deleteStudent = (config, id) => {
        axios.delete(`${url}/delete-student/${id}`, config)
        .then(() => {
            window.confirm("estudante deletado");
            setDeleted(!deleted)
        })
        .catch((e) => {
            console.log(e.response.data);
            window.confirm(e.response.data);
        })
    }  

    const getUniqueStudent = (config,id) => {
        axios.get(`${url}/students/${id}`, config)
        .then((answer) => {
            setUniqueStudentInfos(answer.data);
            setStudentOldName(answer.data.name);
            console.log(uniqueStudentInfos)
        })
        .catch((e) => {
            console.log(e.response.data);
            window.confirm(e.response.data);
        })
    }

    const editStudent = (config, id, infos) => {
        axios.patch(`${url}/update-student/${id}`, infos, config)
        .then(() => {
            setSuccessfullyEdited(true);
        })
        .catch((e) => {
            console.log(e.response.data);
            window.confirm(e.response.data);
        })
    }

    return (
        <StudentsContexts.Provider
            value = {{
                student,
                setStudent,
                badPostStudent,
                postStudent,
                studentsList,
                getStudents,
                getStudentsAnswer,
                deleteStudent,
                deleted,
                getUniqueStudent,
                uniqueStudentInfos,
                setUniqueStudentInfos,
                successfullyEdited,
                editStudent,
                studentOldName,
                setSuccessfullyEdited
            }}
        >
            { children }
        </StudentsContexts.Provider>
    )
}