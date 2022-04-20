import React from "react";
import styled from "styled-components";
import TrackCard from "../TrackCard";
import axios from "axios";
import { axiosConfig, baseUrl } from "../../constants";

const DetalheDaPlaylistContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const AddMusicaForm = styled.form`
    width: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    div{
        display: flex;
        flex-direction: column;
    }
`

class DetalheDaPlaylist extends React.Component {
    state = {
        tracks: [],
        trackName: "",
        artist: "",
        url: ""
    };

    componentDidMount = () => {
        this.fetchTracks()
    };

    fetchTracks = () => {
        axios.get(`${baseUrl}/${this.props.playlistId}/tracks`, axiosConfig).then(response => {
            this.setState({ tracks: response.data.result.tracks })
        }).catch(err => {
            console.log(err)
        });
    };

    removeTrackFromPlaylist = (trackId) => {
        axios.delete(`${baseUrl}/${this.props.playlistId}/tracks/${trackId}`, axiosConfig).then(response => {
            this.fetchTracks()
        }).catch(err => {
            console.log(err)
        })
    }
    changeInputValues = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    addTrackinPlaylist = (event) =>{
        event.preventDefault()

        const body = {
            name: this.state.trackName,
            artist: this.state.artist,
            url: this.state.url

        }
        axios.post(`${baseUrl}/${this.props.playlistId}/tracks`, body, axiosConfig).then(response=>{
            this.fetchTracks();
            this.setState({trackName:"", artist:"", url:""})
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        const tracks = this.state.tracks.map(track => {
            return <TrackCard
                key={track.id}
                trackName={track.name}
                artist={track.artist}
                url={track.url}
                trackId={track.id}
                removeTrackFromPlaylist={this.removeTrackFromPlaylist}
            />
        })
        return (
            <DetalheDaPlaylistContainer>
                <AddMusicaForm onSubmit={this.addTrackinPlaylist}>
                    <div>
                        <label>Nome da música</label>
                        <input
                            placeholder="Nome da música"
                            name="trackName"
                            value={this.state.trackName}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <div>
                        <label>Artista</label>
                        <input
                            placeholder="Artista"
                            name="artist"
                            value={this.state.artist}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <div>
                        <label>Url da música</label>
                        <input
                            placeholder="Url"
                            name="url"
                            value={this.state.url}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <button type="submit">Adicionar música</button>
                </AddMusicaForm>
                {tracks}
                <button onClick={() => this.props.mudarPagina("playlists", "")}>Voltar para Playlists</button>
            </DetalheDaPlaylistContainer>
        )
    };

};

export default DetalheDaPlaylist
