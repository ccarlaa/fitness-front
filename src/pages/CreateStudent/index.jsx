import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomBar from '../../components/BottomBar/index';
import { StudentsContexts } from '../../contexts/StudentsContext';
import RenderButton from '../../components/RenderButton';
import ReactInputMask from 'react-input-mask';
import style from './style';

export default function CreateStudent() {
    const { student, setStudent, postStudent, badPostStudent } = useContext(StudentsContexts);
    const { name, age, weight, height, objective, comments } = student;
    const [ disabled, setDisabled ] = useState(false);

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.token;

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
    };

    useEffect(() => {
        setDisabled(false);
    },[badPostStudent]);

    function OnSubmit(e) {
        setDisabled(disabled);
        e.preventDefault();
        postStudent(student, config);
    }

    return (
        <style.Container>
            <style.TopBar>
                <ion-icon onClick={() => navigate('/students')} name="chevron-back-outline"></ion-icon>
            </style.TopBar>
            <style.Center>
                <style.Form onSubmit = {OnSubmit}>
                    <input
                        disabled = {disabled}
                        type = "text"
                        value = {name}
                        placeholder = "Nome"
                        autoComplete="on"
                        required
                        onChange = {(e) => setStudent({...student, name: e.target.value})}
                    />
                    <input 
                        disabled = {disabled}
                        type = "number"
                        value = {age}
                        placeholder = "Idade"
                        title = "Insira um número válido"
                        required
                        onChange = {(e) => setStudent({...student, age: parseInt(e.target.value)})}
                    />
                    <ReactInputMask 
                        disabled = {disabled}
                        mask="*** kg"
                        value = {weight}
                        placeholder = "Peso (kg)"
                        title = "Insira um número válido"
                        required
                        onChange = {(e) => setStudent({...student, weight: parseFloat(e.target.value)})}
                    />
                    <ReactInputMask 
                        disabled = {disabled}
                        value = {height}
                        mask="*** cm"
                        placeholder = "Altura"
                        title = "Insira um número válido"
                        required
                        onChange = {(e) => setStudent({...student, height: parseFloat(e.target.value)})}
                    />
                    <input 
                        disabled = {disabled}
                        type = "text"
                        value = {objective}
                        placeholder = "Objetivo"
                        required
                        onChange = {(e) => setStudent({...student, objective: e.target.value})}
                    />
                    <input 
                        disabled = {disabled}
                        type = "text"
                        value = {comments}
                        placeholder = "Comentários"
                        onChange = {(e) => setStudent({...student, comments: e.target.value})}
                    />
                    <style.Button disabled={disabled} type="submit">
                        <RenderButton state={disabled} text="Cadastrar"/>
                    </style.Button>
                </style.Form >
            </style.Center>
            <BottomBar />
        </style.Container>
    )
}
