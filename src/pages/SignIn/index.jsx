import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import RenderButton from "../../components/RenderButton";
import { AuthContexts } from "../../contexts/AuthContext";
import style from "./style";

export default function SignIn() {
    const { infosLogin, setInfosLogin, badSignIn, postSignIn } = useContext(AuthContexts);
    const { email, password } = infosLogin;
    const [ disabled, setDisabled ] = useState(false);
    const [ hiddenPassword, setHiddenPassword ] = useState(true)


    useEffect(() => {
        setDisabled(false);
    },[badSignIn]);

    function OnSubmit(e) {
        setDisabled(true);
        e.preventDefault();
        postSignIn(infosLogin);
    }

    return (
        <style.Container>
            <style.CenterLogo>
                <style.Logo> 
                    <ion-icon name="caret-forward-outline"></ion-icon>
                    fitness
                </style.Logo>
            </style.CenterLogo>
            <style.Center>
                <style.Form onSubmit={OnSubmit} >
                    <input
                        disabled={disabled}
                        type="email"
                        value={email}
                        placeholder="email"
                        required
                        onChange={(e) => setInfosLogin({...infosLogin, email: e.target.value})}
                    />
                    <div>
                        <input
                            disabled={disabled}
                            type={ hiddenPassword ? "password" : "text"}
                            value={password}
                            placeholder="senha"
                            pattern = "[0-9a-zA-Z]{3,30}"
                            title = "A senha deve conter no mínimo 4 caracteres e um número"
                            required
                            onChange={(e) => setInfosLogin({...infosLogin, password: e.target.value})}
                        />
                        {!hiddenPassword ? 
                            <ion-icon onClick={() => setHiddenPassword(!hiddenPassword)} name="eye-outline"></ion-icon> 
                            : 
                            <ion-icon onClick={() => setHiddenPassword(!hiddenPassword)} name="eye-off-outline"></ion-icon>
                        }
                    </div>
                    <style.Button disabled={disabled} type="submit">
                        <RenderButton state={disabled} text="Entrar"/>
                    </style.Button>
                </style.Form >
                    <Link to="/sign-up">
                        <style.GoTo>Não tem uma conta? Cadastre-se!</style.GoTo>
                    </Link>
            </style.Center>
        </style.Container>
    )

}