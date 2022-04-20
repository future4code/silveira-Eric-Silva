import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.png"

const HeaderContainer = styled.div`
    background-color: #18ac4d;
    height:100px;
    display:flex;
    align-items: center;
    justify-content: space-around;
    img{
        width: 50px;
    }
    button{
        background-color:#202022;
        color: white;
    }
`
const ButtonContainer = styled.div`
    width: 300px;
    display:flex;
    justify-content:space-between;`

const Header = (props) => {
    return (
        <HeaderContainer>
            <img src={logo} alt="logo"/>
            <h1>Labefy</h1>
            <ButtonContainer>
                <button onClick={() => props.mudarPagina("criarPlaylistPage")}> Criar Playlist</button>
                <button onClick={() => props.mudarPagina("listaPlaylistPage")}> Lista de Playlists</button>
            </ButtonContainer>
        </HeaderContainer>
    )
}

export default Header