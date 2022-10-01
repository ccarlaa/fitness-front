import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BottomBar from '../../components/BottomBar/index';
import { StudentsContexts } from '../../contexts/StudentsContext';
import RenderButton from '../../components/RenderButton';
import ReactInputMask from 'react-input-mask';
import style from './style';

export default function EditStudent() {
    const { 
        uniqueStudentInfos,
        setUniqueStudentInfos, 
        getUniqueStudent, 
        editStudent, 
        successfullyEdited, 
        setSuccessfullyEdited,
        studentOldName
    } = useContext(StudentsContexts);
    const { name, age, weight, height, objective, comments } = uniqueStudentInfos;
    const [ disabled, setDisabled ] = useState(false);

    const { id } = useParams()

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
        getUniqueStudent(config, id);
    },[]);


    function OnSubmit(e) {
        setDisabled(disabled);
        e.preventDefault();
        editStudent(config, id, uniqueStudentInfos);
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
                        onChange = {(e) => setUniqueStudentInfos({...uniqueStudentInfos, name: e.target.value})}
                    />
                    <ReactInputMask 
                        disabled = {disabled}
                        mask="*** \anos"
                        value = {age}
                        placeholder = "Idade"
                        title = "Insira um número válido"
                        required
                        onChange = {(e) => setUniqueStudentInfos({...uniqueStudentInfos, age: parseInt(e.target.value)})}
                    />
                    <ReactInputMask 
                        disabled = {disabled}
                        mask="*** kg"
                        value = {weight}
                        placeholder = "Peso (kg)"
                        title = "Insira um número válido"
                        required
                        onChange = {(e) => setUniqueStudentInfos({...uniqueStudentInfos, weight: parseFloat(e.target.value)})}
                    />
                    <ReactInputMask 
                        disabled = {disabled}
                        value = {height}
                        mask="*** cm"
                        placeholder = "Altura"
                        title = "Insira um número válido"
                        required
                        onChange = {(e) => setUniqueStudentInfos({...uniqueStudentInfos, height: parseFloat(e.target.value)})}
                    />
                    <input 
                        disabled = {disabled}
                        type = "text"
                        value = {objective}
                        placeholder = "Objetivo"
                        required
                        onChange = {(e) => setUniqueStudentInfos({...uniqueStudentInfos, objective: e.target.value})}
                    />
                    <input 
                        disabled = {disabled}
                        type = "text"
                        value = {comments}
                        placeholder = "Comentários"
                        onChange = {(e) => setUniqueStudentInfos({...uniqueStudentInfos, comments: e.target.value})}
                    />
                    <style.Button disabled={disabled} type="submit">
                        <RenderButton state={disabled} text="Atualizar"/>
                    </style.Button>
                </style.Form >
            </style.Center>
            {successfullyEdited ? 
                <>
                    <style.Warning></style.Warning>
                    <style.Message>
                        <h1>As informações foram atualizadas</h1>
                        <style.ButtonWarning disabled={false} onClick={() => navigate('/students')}>
                            <RenderButton state={false} text="OK"/>
                        </style.ButtonWarning>
                    </style.Message>
                </>
                : null
            }
            <BottomBar />
        </style.Container>
    )
}
