import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 100%;
background: #A2C169;
font-family: 'Questrial', sans-serif;
`
const TopBar = styled.div`
width: 100%;
height: 80px;
font-family: 'Questrial', sans-serif;
display: flex;
align-items: center;
padding-left: 20px;

ion-icon {
    color: #A2C169;
    border-radius: 50%;
    padding: 10px;
    background-color: white;
}
`

const Center = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: flex-end;
justify-content: flex-start;
padding-top: 50px;
flex-direction: column;
background-color: white;
border-radius: 40px 40px 0px 0px;
`
const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

input {
    width: 80%;
    height: 50px;
    border: none;
    border-bottom: 1px solid #A2C169;
    box-sizing: border-box;
    margin-bottom: 10px;
    padding-left: 10px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: grey;
}

div {
    width: 100%;
    height: 50px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: grey;

    ion-icon {
        position: absolute;
        right: 13%;
        margin-bottom: 10px;
    }
}

`
const Button = styled.button`
width: 80%;
height: 50px;
border-radius: 10px;
background: #A2C169;
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
border: none;
font-size: 21px;
font-style: normal;
font-weight: 700;
line-height: 26px;
color: white;

&:disabled {
opacity: 0.7;
}
`

const style = {
    Container,
    TopBar,
    Center,
    Form,
    Button
}

export default style;