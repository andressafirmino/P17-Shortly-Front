import styled from "styled-components";
import Trofeu from "../Image/Trofeu.svg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RankingComponent() {

    const [rank, setRank] = useState([]);
    let count = 1;
    
    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/ranking`;
        axios.get(url)
            .then(response => {
                setRank(response.data);
            })
            .catch(e => alert(e.response.data));

    }, [])
    return (
        <>
            <RankingContainer>
                <div className="title">
                    <img src={Trofeu} />
                    <p>Ranking</p>
                </div>
                <div className="position">
                    {rank.map(pos => 
                        <p key={pos.id}>{count++}. {pos.name} - {pos.linksCount} links - {pos.visitCount} visualizações</p>
                    )}
                </div>
            </RankingContainer>
        </>
    )
}

const RankingContainer = styled.div`
    width: 1017px;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    .title {
        width: 295px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
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
        border: 1px solid #000;
        border-radius: 24px 24px 0px 0px;
        border: 1px solid rgba(120, 177, 89, 0.25);
        background: #FFF;
        box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
        margin-bottom: 30px;
        padding: 15px;
        p {
            font-size: 20px;
            font-weight: 400;
            color: #000;
        }
    }
`