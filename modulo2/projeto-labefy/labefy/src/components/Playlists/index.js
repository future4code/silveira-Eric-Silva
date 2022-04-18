import React from "react";
import styled from "styled-components";
import PlaylistCard from "../PlaylistCard";

const PlaylistsContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

class Playlists extends React.Component {
    state={
        playlists: [
            {
                "id": "9be29cf2-9df7-4b17-88ab-2c2df6070a0f",
                "name": "rap"
            },
            {
                "id": "5f5b2729-1785-4a24-b407-ba3e7643fd8e",
                "name": "trap"
            },
            {
                "id": "8dcbf6cd-899a-48dc-9919-8f60d7e625af",
                "name": "lofi"
            },
            {
                "id": "aec059d2-3806-43f5-8e76-dd60f77a5740",
                "name": "rock"
            }
        ]
    }
    render(){
        const playlists = this.state.playlists.map(playlist => {
            return <PlaylistCard
                key={playlist.id}
                mudarPagina ={this.props.mudarPagina}
                name={playlist.name}
            />
        })
        return (
            <PlaylistsContainer>
                {playlists}
            </PlaylistsContainer>
        )    
    };
    
};

export default Playlists