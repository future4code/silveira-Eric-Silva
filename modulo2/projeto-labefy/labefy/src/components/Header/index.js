import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    height:100px;
    display:flex;
    align-items: center;
    justify-content: space-around;
`
const ButtonContainer = styled.div`
    width: 300px;
    display:flex;
    justify-content:space-between;`

const Header = (props) => {
    return (
        <HeaderContainer>
            <h1>Labefy</h1>
            <ButtonContainer>
                <button onClick={() => props.mudarPagina("criarPlaylistPage")}> Criar Playlist</button>
                <button onClick={() => props.mudarPagina("listaPlaylistPage")}> Lista de Playlists</button>
            </ButtonContainer>
        </HeaderContainer>
    )
}

export default Header