import React from "react";
import styled from "styled-components";
import PlaylistCard from "../PlaylistCard";
import axios from "axios";
import { axiosConfig, baseUrl } from "../../constants";

const PlaylistsContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

class Playlists extends React.Component {
    state={
        playlists: []
    }

    componentDidMount = () => {
        this.fetchPlaylists()
    }

    fetchPlaylists = () =>{
        axios.get(baseUrl, axiosConfig).then(response => {
            this.setState({playlists: response.data.result.list})
        }).catch( err => {
            console.log(err)
        }); 
    };

    deletePlaylist = (playlistId)=>{
        axios.delete(`${baseUrl}/${playlistId}`, axiosConfig).then(response => {
            this.fetchPlaylists()
        }).catch(err => {
            console.log(err)
        });
    };
    render(){
        const playlists = this.state.playlists.map(playlist => {
            return <PlaylistCard
                key={playlist.id}
                mudarPagina ={this.props.mudarPagina}
                name={playlist.name}
                playlistId={playlist.id} 
                deletePlaylist={this.deletePlaylist}
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