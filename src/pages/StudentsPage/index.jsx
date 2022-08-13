import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BottomBar from "../../components/BottomBar";
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { StudentsContexts } from "../../contexts/StudentsContext";
import { useContext } from "react";
import Loading from "../../components/Loading";
import { useEffect } from "react";
import LocalStorageInfos from "../../utils/LocalStorage";
import RenderButton from "../../components/RenderButton";
import { useState } from "react";

export default function StudentsPage() {
    const { studentsList, getStudents, getStudentsAnswer, deleteStudent, deleted } = useContext(StudentsContexts);
    const [ showWarnig, setShowWarning ] = useState(false)
    
    const config = LocalStorageInfos();

    useEffect(() => {
        getStudents(config);
        setShowWarning(false);
    },[deleted]);

    const navigate = useNavigate();

    return (
        <Container>
            <TopBar>
                <h1>Alunos</h1>
                <ion-icon onClick={() => navigate('/new-student')} name="add-outline"></ion-icon>
            </TopBar>
            <Center>
                {getStudentsAnswer ? 
                <Students>
                    <StudentsList>
                        {studentsList.map((student) => {
                        return (
                            <StudentInfos>
                                <TreeView
                                aria-label="file system navigator"
                                defaultCollapseIcon={<ion-icon name="chevron-down-outline"></ion-icon>}
                                defaultExpandIcon={<ion-icon name="chevron-forward-outline"></ion-icon>}
                                sx={{ height: 'auto', flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                                >
                                    <TreeItem nodeId="1" label={student.name}>
                                        <h1>Idade: <b>{student.age}</b></h1>
                                        <h1>Peso: <b>{student.weight} kg</b></h1>
                                        <h1>Altura: <b>{student.height} cm</b></h1>
                                        <h1>Objetivo: <b>{student.objective}</b></h1>
                                        {student.comments == "" ? null : <h1>Comentários: <b>{student.comments}</b></h1>}
                                        <div className="editDelete">
                                            <div className="delete">
                                                <ion-icon name="trash-outline" onClick={() => setShowWarning(true)}></ion-icon>
                                            </div>
                                            <div className="edit">
                                                <ion-icon name="create-outline"></ion-icon>
                                            </div>
                                        </div>
                                        {showWarnig ? 
                                            <>
                                                <Warning></Warning>
                                                <Message>
                                                    <div>
                                                        <ion-icon name="close-outline" onClick={() => setShowWarning(false)}></ion-icon>
                                                    </div>blu
                                                    <h1>Deseja deletar o aluno </h1>
                                                    <Button disabled={false} onClick={() => deleteStudent(config, student.id)}>
                                                        <RenderButton state={false} text="Deletar"/>
                                                    </Button>
                                                </Message>
                                            </>
                                            : null
                                        }
                                    </TreeItem>
                                </TreeView>
                            </StudentInfos>)
                            })
                        }
                    </StudentsList>
                </Students>
                :            
                <WaitingAPI>
                    <Loading />
                </WaitingAPI>}
            </Center>
            <BottomBar />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: column;
    background: #A2C169;
    font-family: 'Questrial', sans-serif;
`
const TopBar = styled.div`
    width: 100%;
    height: 80px;
    font-family: 'Questrial', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

ion-icon {
    color: #A2C169;
    font-size: 35px;
    border-radius: 50%;
    background-color: white;
}

h1 {
        color: white;
        font-weight: 700;
        font-size: 25px;
    }
`
const Center = styled.div`
    width: 100%;
    height: calc(100% - 80px);
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
`
const Students = styled.div`
    width: 100%;
    height: 100%;
    background-color: #A2C169;
    display: flex;
    justify-content: center;

`
const StudentsList = styled.div`
    width: 90%;
    max-height: calc(100% - 55px);
    overflow: scroll;
`
const StudentInfos = styled.div`
    width: 100%;
    height: auto;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
    color: #545454;

    ion-icon {
        color: #A2C169;
    }

    h1 {
        line-height: 150%;
    }
    
    .editDelete {
        padding: 10px;
        display: flex;
        justify-content: flex-end;

        .delete ion-icon {
            font-size: 25px;
            color: white;
            background-color: #FFBD59;
            padding: 7px;
            border-radius: 5px;
            margin-left: 10px;

        }

        .edit ion-icon {
            font-size: 25px;
            color: white;
            background-color: #A2C169;
            padding: 7px;
            border-radius: 5px;
            margin-left: 10px;

        }

    }
`
const WaitingAPI = styled.div`
    width: 100%;
    height: 100%;
    background-color: #A2C169;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
`

const Warning = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: white;
    opacity: 70%;
`
const Message = styled.div`
    width: 65%;
    height: auto;
    background-color: #A2C169;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;
    top: 200px;
    right: 20%;
    border-radius: 10px;
    padding: 10px;
    color: #545454;

    div {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;

        ion-icon {
            font-size: 30px;
            color: white;
        }
    }


`
const Button = styled.button`
    width: 80%;
    height: 35px;
    border-radius: 10px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    border: none;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    color: #A2C169;
    cursor: pointer;

    &:disabled {
    opacity: 0.7;
    cursor: default;
}
`