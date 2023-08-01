import styled from "styled-components";
import Menu from "../components/Menu";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disabled, setDisabled] = useState(false);

    return (
        <SignUpContainer>
            <Menu />
            <form>
                <input placeholder="Nome" type="text" required value={name} onChange={(e) => setName(e.target.value)} disabled={disabled} data-test="name" />
                <input placeholder="E-mail" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled} data-test="email" />
                <input placeholder="Senha" type="password" autoComplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled} data-test="password" />
                <input placeholder="Confirme a senha" type="password" autoComplete="new-password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} disabled={disabled} data-test="conf-password" />
                <button className="top" type='submit' disabled={disabled} data-test="sign-up-submit">
                    {disabled ? (
                        <ThreeDots width={32} height={21} border-radius={4.5} background-color="#5D9040" color="#FFFFFF" font-size={9} />
                    ) : (
                        <p>Criar Conta</p>
                    )}
                </button>
            </form>
        </SignUpContainer>
    )
}

const SignUpContainer = styled.div`
    
`