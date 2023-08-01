import { Link } from "react-router-dom";
import Logo from "../Image/Logo.svg";
import styled from "styled-components";

export default function Menu() {
    return (
        <MenuContainer>
            <MenuLinks>
                <Link className="login" to="/login">Entrar</Link>
                <Link className="signup" to="/signup">Cadastro</Link>
            </MenuLinks>
            <LogoContainer>
                <p>Shortly</p>
                <img src={Logo} />
            </LogoContainer>
        </MenuContainer>
    )
}
const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const MenuLinks = styled.div`
    width: 150px;
    height: 18px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    right: 250px;
    top: 60px;
    link {
        font-size: 14px;
        font-weight: 400;
    }
    .login {
        color: #5D9040;
    }
    .signup {
        color: #9C9C9C;
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
