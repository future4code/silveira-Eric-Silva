import React from "react";
import styled from "styled-components";

const PlaylistCardContainer = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
`
const NameContainer = styled.p`
    margin: 5px;
`

const DeleteContainer = styled.p`
    color: red;
`

const PlaylistCard = (props) => {
    return (
        <PlaylistCardContainer>
            <button onClick={() => props.mudarPagina("detalheDaPlaylist")} >Abrir Playlist</button>
            <NameContainer>{props.name}</NameContainer>
            <DeleteContainer>X</DeleteContainer>
        </PlaylistCardContainer>
    )
}

export default PlaylistCard