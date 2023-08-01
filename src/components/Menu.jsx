import { Link } from "react-router-dom";
import Logo from "../Image/Logo.svg";
import styled from "styled-components";
import { useState } from "react";

export default function Menu() {
    const [login, setLogin] = useState(true);
    return (
        <MenuContainer>
            {login && (
                <Welcome>
                    <p className="green">Seja bem-vindo: </p>
                    <MenuLinks>
                        <Link className="gray" to="/home">Home</Link>
                        <Link className="gray" to="/ranking">Ranking</Link>
                        <Link className="gray" to="/home">Sair</Link>
                    </MenuLinks>
                </Welcome>

            )}
            {!login && (
                <MenuLinks>
                    <Link className="gray" to="/signin">Entrar</Link>
                    <Link className="gray" to="/signup">Cadastrar-se</Link>
                </MenuLinks>
            )}
            <LogoContainer>
                <p>Shortly</p>
                <img src={Logo} />
            </LogoContainer>
        </MenuContainer>
    )
}
const MenuContainer = styled.div`
    width: 1017px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto 50px;
`
const Welcome = styled.div`
    height: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        font-size: 14px;
        font-weight: 400;
        margin-top: 40px;
        color: #5D9040;
    }
`
const MenuLinks = styled.div`
    height: 18px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 40px;
    link {
        font-size: 14px;
        font-weight: 400;
    }    
    .green {
        color: #5D9040;
        text-decoration: none;
    }
    .gray {
        color: #9C9C9C;
        margin-left: 10px;
        text-decoration: none;
    }
`
const LogoContainer = styled.div`
    width: 314px;
    height: 102px;
    margin: 50px auto 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {        
        font-size: 64px;
        font-weight: 200;
        color: #000;
    }
    img {
        width: 102px;
        height: 102px;
    }
`
