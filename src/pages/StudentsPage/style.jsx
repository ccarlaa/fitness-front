import styled from "styled-components";

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

    h1 {
        text-align: center;
    }

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

const style = {
    Container,
    TopBar,
    Center,
    Students,
    StudentsList,
    StudentInfos,
    WaitingAPI,
    Warning,
    Message,
    Button
}

export default style;