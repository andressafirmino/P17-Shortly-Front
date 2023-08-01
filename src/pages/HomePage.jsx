import styled from "styled-components";
import Menu from "../components/Menu";
import RankingComponent from "../components/Ranking";
import { useState } from "react";
import Trash from "../Image/Trash.svg";

export default function HomePage() {
    const [login, setLogin] = useState(true);

    return (
        <HomeContainer>
            <Menu />
            {login && (
                <>
                    <form>
                        <input type="text" />
                        <button>Encurtar link</button>
                    </form>
                    <BoxLink>
                        <Link>
                        </Link>
                        <TrashStyled>
                            <img src={Trash}/>
                        </TrashStyled>
                    </BoxLink>
                    <BoxLink>
                        <Link>
                        </Link>
                        <TrashStyled>
                        </TrashStyled>
                    </BoxLink>
                    <BoxLink>
                        <Link>
                        </Link>
                        <TrashStyled>
                        </TrashStyled>
                    </BoxLink>
                </>
            )}
            {!login && (
                <>
                    <RankingComponent />
                    <div className="text"><p>Crie sua conta para usar nosso serviço!</p></div>
                </>
            )}
        </HomeContainer>
    )
}

const HomeContainer = styled.div`    
    .text {
        width: 728px;
        height: 45px;
        margin: 0 auto;
        p {            
            font-size: 36px;
            font-weight: 700;
            color: #000;
        }
    }
    form {
        width: 1017px;
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`
const BoxLink = styled.div`
    width: 1017px;
    margin: 50px auto 40px;
    display: flex;
`
const Link = styled.div`
    width: 887px;
    height: 60px;
    border-radius: 12px 0px 0px 12px;
    background: #80CC74;
    box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
    color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const TrashStyled = styled.div`
    width:130px;
    height: 60px;
    border-radius: 0px 12px 12px 0px;
    background: #FFF;
    box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 22px;
        height: 26px;
    }
`