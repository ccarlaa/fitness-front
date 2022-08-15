import styled from 'styled-components';

const Bar = styled.div`
width: 100vw;
height: 55px;
background-color: #3B5900;
position: absolute;
bottom: 0;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const StudentButton = styled.div `
color: ${props => props.color};
background-color: ${props => props.background};
border-radius: 50%;

ion-icon {
    font-size: 25px;
    border-radius: 50%;
    padding: 8px;
} 
`
const ClassesButton = styled.div `
color: ${props => props.color};
background-color: ${props => props.background};
border-radius: 50%;

ion-icon {
    font-size: 25px;
    border-radius: 50%;
    padding: 8px;
} 
`
const HomeButton = styled.div `
color: ${props => props.color};
background-color: ${props => props.background};
border-radius: 50%;

ion-icon {
    font-size: 25px;
    border-radius: 50%;
    padding: 8px;
} 
`

const style = {
    Bar,
    StudentButton,
    HomeButton,
    ClassesButton
}

export default style;