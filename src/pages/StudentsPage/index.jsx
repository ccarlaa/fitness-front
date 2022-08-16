import { useNavigate } from "react-router-dom";
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
import style from "./style";

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
        <style.Container>
            <style.TopBar>
                <h1>Alunos</h1>
                <ion-icon onClick={() => navigate('/new-student')} name="add-outline"></ion-icon>
            </style.TopBar>
            <style.Center>
                {getStudentsAnswer ? 
                <style.Students>
                    <style.StudentsList>
                        {studentsList.map((student) => {
                        return (
                            <style.StudentInfos key={student.id}>
                                <TreeView
                                aria-label="file system navigator"
                                defaultCollapseIcon={<ion-icon name="chevron-down-outline"></ion-icon>}
                                defaultExpandIcon={<ion-icon name="chevron-forward-outline"></ion-icon>}
                                sx={{ height: 'auto', flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                                >
                                    <TreeItem nodeId="1" label={student.name}>
                                        <h1>Idade: <b>{student.age} anos</b></h1>
                                        <h1>Peso: <b>{student.weight} kg</b></h1>
                                        <h1>Altura: <b>{student.height} cm</b></h1>
                                        <h1>Objetivo: <b>{student.objective}</b></h1>
                                        {student.comments == "" ? null : <h1>Comentários: <b>{student.comments}</b></h1>}
                                        <div className="editDelete">
                                            <div className="delete">
                                                <ion-icon name="trash-outline" onClick={() => setShowWarning(true)}></ion-icon>
                                            </div>
                                            <div className="edit">
                                                <ion-icon name="create-outline" onClick={() => navigate(`/edit-student/${student.id}`)}></ion-icon>
                                            </div>
                                        </div>
                                        {showWarnig ? 
                                            <>
                                                <style.Warning></style.Warning>
                                                <style.Message>
                                                    <div>
                                                        <ion-icon name="close-outline" onClick={() => setShowWarning(false)}></ion-icon>
                                                    </div>
                                                    <h1>Deseja deletar o aluno <b>{student.name}</b></h1>
                                                    <style.Button disabled={false} onClick={() => deleteStudent(config, student.id)}>
                                                        <RenderButton state={false} text="Deletar"/>
                                                    </style.Button>
                                                </style.Message>
                                            </>
                                            : null
                                        }
                                    </TreeItem>
                                </TreeView>
                            </style.StudentInfos>)
                            })
                        }
                    </style.StudentsList>
                </style.Students>
                :            
                <style.WaitingAPI>
                    <Loading />
                </style.WaitingAPI>}
            </style.Center>
            <BottomBar />
        </style.Container>
    )
}