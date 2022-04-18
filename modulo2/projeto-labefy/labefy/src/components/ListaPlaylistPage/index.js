import React from "react";
import styled from "styled-components";
import DetalheDaPlaylist from "../DetalheDaPlaylist";
import Playlists from "../Playlists";

const ListaPlaylistContainer = styled.div`

`

class ListaPlaylistPage extends React.Component {
    state={
        paginaAtual:"playlists"
    };
    mudarPagina = (paginaAtual) => {
        this.setState({paginaAtual: paginaAtual})
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