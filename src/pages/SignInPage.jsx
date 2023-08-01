import { useState } from "react";
import Menu from "../components/Menu";
import { ThreeDots } from "react-loader-spinner";

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    return (
        <>
            <Menu />
            <form>
                <input placeholder="E-mail" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled} data-test="email" />
                <input placeholder="Senha" type="password" autoComplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled} data-test="password" />
                <button className="top" type='submit' disabled={disabled} data-test="sign-up-submit">
                    {disabled ? (
                        <ThreeDots width={32} height={21} border-radius={4.5} background-color="#5D9040" color="#FFFFFF" font-size={9} />
                    ) : (
                        <p>Entrar</p>
                    )}
                </button>
            </form>
        </>
    )
}