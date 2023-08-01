import styled from "styled-components";
import Trofeu from "../Image/Trofeu.svg"

export default function HomePage() {
    return (
        <HomeContainer>
            
            <RankingContainer>
                <div className="title">
                    <img src={Trofeu} />
                    <p>Ranking</p>
                </div>
                <div className="position"></div>
            </RankingContainer>
            <div className="text"><p></p></div>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text {
        width: 728px;
        height: 45px;
        p {            
            font-size: 36px;
            font-weight: 700;
            color: #000;
        }
    }
`

const RankingContainer = styled.div`
    width: 1017px;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
        width: 295px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 56px;
            height: 50px;
            margin-right: 10px;
        }
        p {            
            font-size: 36px;
            font-weight: 700;
            color: #000;
        }
    }
    .position {
        width: 100%;
        height: 241px;
        border: 1px solid #000;
        border-radius: 24px 24px 0px 0px;
        border: 1px solid rgba(120, 177, 89, 0.25);
        background: #FFF;
        box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);

    }
`