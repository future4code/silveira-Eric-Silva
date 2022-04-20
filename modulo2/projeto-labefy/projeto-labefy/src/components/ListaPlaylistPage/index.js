import React from "react";
import styled from "styled-components";
import DetalheDaPlaylist from "../DetalheDaPlaylist";
import Playlists from "../Playlists";

const ListaPlaylistContainer = styled.div`
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #cacaca;
    h2{
        color: white;
    }
    label{
        color: white;
    }
    button{
        background-color: #18ac4d;
        color: white;
    }

`

class ListaPlaylistPage extends React.Component {
    state={
        paginaAtual:"playlists",
        playlistId: ""
    };

    mudarPagina = (paginaAtual, playlistId) => {
        this.setState({
            paginaAtual: paginaAtual,
            playlistId: playlistId
        })
    }
    mudarPagina = (paginaAtual, playlistId) => {
        this.setState({
            paginaAtual: paginaAtual,
             playlistId: playlistId})
      }
    render () {
        const renderPaginaAtual = () =>{
            if (this.state.paginaAtual==="playlists") {
                return <Playlists
                mudarPagina={this.mudarPagina}
                />
                
            }else if (this.state.paginaAtual === "detalheDaPlaylist") {
                return <DetalheDaPlaylist
                mudarPagina={this.mudarPagina}
                playlistId={this.state.playlistId}
                />
                
            }
        }

        return (
            <ListaPlaylistContainer>
                {renderPaginaAtual()}

            </ListaPlaylistContainer>
        )    
    };
    
};

export default ListaPlaylistPage