import styled from "styled-components";
import Menu from "../components/Menu";
import RankingComponent from "../components/Ranking";
import { useContext, useEffect, useState } from "react";
import Trash from "../Image/Trash.svg";
import { AuthContext } from "../context/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

    return (
        <HomeContainer>
            <Menu />
            <RankingComponent />
            <div className="text"><p>Crie sua conta para usar nosso serviço!</p></div>
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
`