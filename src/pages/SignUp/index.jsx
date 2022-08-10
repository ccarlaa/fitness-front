import { Link } from "react-router-dom";
import { useEffect,useState, useContext } from 'react';
import RenderButton from "../../components/RenderButton";
import { AuthContexts } from "../../contexts/AuthContext";
import style from "./style";

export default function SignUp() {
    const { signUp, setSignUp, postSignUp, badSignUp } = useContext(AuthContexts);
    const { username, email, password, repeatedPassword } = signUp;
    const [ disabled, setDisabled ] = useState(false);
    const [ hiddenPassword, setHiddenPassword ] = useState(true)
    const [ hiddenRepetedPassword, setHiddenRepetedPassword ] = useState(true)

    useEffect(() => {
        setDisabled(false);
    },[badSignUp]);

    function OnSubmit(e) {
        setDisabled(true);
        e.preventDefault();
        postSignUp(signUp);
    }

    return (
        <style.Container>
            <style.Logo> 
                <ion-icon name="caret-forward-outline"></ion-icon>
                fitness 
            </style.Logo>
            <style.Center>
                <style.Form onSubmit = {OnSubmit}>
                    <input
                        disabled = {disabled}
                        type = "text"
                        value = {username}
                        placeholder = "Nome"
                        autoComplete="on"
                        required
                        onChange = {(e) => setSignUp({...signUp, username: e.target.value})}
                    />
                    <input 
                        disabled = {disabled}
                        type = "email"
                        value = {email}
                        placeholder = "Email"
                        autoComplete="on"
                        required
                        onChange = {(e) => setSignUp({...signUp, email: e.target.value})}
                    />
                    <div>
                        <input className="password"
                            disabled = {disabled}
                            type = { hiddenPassword ? "password" : "text"}
                            value = {password}
                            pattern = "[0-9a-zA-Z$*_/@#]{4,}"
                            title = "A senha deve conter no mínimo 3 caracteres"
                            placeholder = "Senha"
                            required
                            onChange = {(e) => setSignUp({...signUp, password: e.target.value})}
                        />
                        {!hiddenPassword ? 
                            <ion-icon onClick={() => setHiddenPassword(!hiddenPassword)} name="eye-outline"></ion-icon> 
                            : 
                            <ion-icon onClick={() => setHiddenPassword(!hiddenPassword)} name="eye-off-outline"></ion-icon>
                        }
                    </div>
                    <div>
                        <input
                            disabled = {disabled}
                            type = { hiddenRepetedPassword ? "password" : "text"}
                            value = {repeatedPassword}
                            pattern = {password}
                            title = "Digite senhas iguais"
                            placeholder = "Confime a senha"
                            required
                            onChange = {(e) => setSignUp({...signUp, repeatedPassword: e.target.value})}
                        >
                        </input>
                        {!hiddenRepetedPassword ? 
                            <ion-icon onClick={() => setHiddenRepetedPassword(!hiddenRepetedPassword)} name="eye-outline"></ion-icon> 
                            : 
                            <ion-icon onClick={() => setHiddenRepetedPassword(!hiddenRepetedPassword)} name="eye-off-outline"></ion-icon>
                        }
                    </div>
                    <style.Button disabled={disabled} type="submit">
                        <RenderButton state={disabled} text="Cadastre-se!"/>
                    </style.Button>
                    <Link to="/">
                        <style.GoTo>Já possui cadastro? Faça login!</style.GoTo>
                    </Link>
                </style.Form >
            </style.Center>
        </style.Container>
    )
}
