import styled from "styled-components";
import Menu from "../components/Menu";
import RankingComponent from "../components/Ranking";
import { useContext, useEffect, useState } from "react";
import Trash from "../Image/Trash.svg";
import { AuthContext } from "../context/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserPage() {

    const { token, login } = useContext(AuthContext);
    const [link, setLink] = useState('');
    const [reload, setReload] = useState(false);
    const [myLinks, setMyLinks] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/users/me`;
        axios.get(url, {
            headers: { authorization: `Bearer ${token}` }
        })
            .then(response => {
                setMyLinks(response.data.shortenedUrls);
                setReload(false);
            })
            .catch(e => alert(e.response.data));
    }, [reload])

    function short() {
        const url = `${import.meta.env.VITE_API_URL}/urls/shorten`;
        const body = { url: link };
        axios.post(url, body, {
            headers: { authorization: `Bearer ${token}` }
        })
            .then(() => {
                setReload(true);
            })
            .catch(e => alert(e.response.data));
    }

    function openLink(shortUrl, urlLink) {
        const url = `${import.meta.env.VITE_API_URL}/urls/open/${shortUrl}`
        axios.get(url)
            .then(() => {
                setReload(true);
                window.open(urlLink, '_blank');
            })
            .catch(e => alert(e.response.data));
    }

    function deleteUrl(id) {
        const url = `${import.meta.env.VITE_API_URL}/urls/${id}`;
        axios.delete(url, {
            headers: { authorization: `Bearer ${token}` }
        })
            .then(() => {
                setReload(true);
            })
            .catch(e => console.log(e.response.data));
    }

    return (
        <HomeContainer>
            <Menu />
            <>
                <form onSubmit={short}>
                    <input placeholder="Links que cabem no bolso" type="text" required value={link} onChange={(e) => setLink(e.target.value)} />
                    <button type="submit">Encurtar link</button>
                </form>                
                    <>
                    {!myLinks || myLinks.length === 0 && (
                        <p>Carregando...</p>
                    )}
                    {myLinks && (
                        <>
                        {myLinks.map(l => 
                            <BoxLink key={l.id}>
                                <Link>
                                    <p className="size" onClick={() => openLink(l.shortUrl, l.url)}>{l.url}</p>
                                    <p onClick={() => openLink(l.shortUrl, l.url)}>{l.shortUrl}</p>
                                    <p className="size">Quantidade de visitantes: {l.visitCount}</p>
                                </Link>
                                <TrashStyled>
                                    <img src={Trash} onClick={() => deleteUrl(l.id)} />
                                </TrashStyled>
                            </BoxLink>
                        )}
                        </>
                    )}
                        
                    </> 
            </>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`    
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
    background: #78B159;
    box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    .size {
        width: 270px;
        height: 17px;
        overflow: hidden;
        text-overflow: ellipsis; 
    }
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