import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './style';

export default function BottomBar() {
    const [ studentsButton, setStudentsButton ] = useState(false);
    const [ homeButton, setHomeButton ] = useState(true);
    const [ classesButton, setClassesButton ] = useState(false);

    const navigate = useNavigate()

    return (
        <style.Bar>
            <style.StudentButton 
                background={studentsButton ? "#A2C169" : "#3B5900" }
                color={studentsButton ? 'white' : '#A2C169'}
                onClick={() => {
                    setStudentsButton(true);
                    setHomeButton(false);
                    setClassesButton(false);
                    // navigate('/students');
                }}
            >
                <ion-icon name="people-outline" ></ion-icon>
            </style.StudentButton>
            <style.HomeButton 
                background={homeButton ? "#A2C169" : "#3B5900" }
                color={homeButton ? 'white' : '#A2C169'}
                onClick={() => {
                    setStudentsButton(false);
                    setHomeButton(true);
                    setClassesButton(false);
                    // navigate('/homepage');
                }}
            >
                <ion-icon name="home-outline"></ion-icon>
            </style.HomeButton>
            <style.ClassesButton 
                background={classesButton ? "#A2C169" : "#3B5900" }
                color={classesButton ? 'white' : '#A2C169'}
                onClick={() => {
                    setStudentsButton(false);
                    setHomeButton(false);
                    setClassesButton(true);
                    // navigate('/classes');
                }}
            >
                <ion-icon name="barbell-outline"></ion-icon>
            </style.ClassesButton>
        </style.Bar>
    )
}
