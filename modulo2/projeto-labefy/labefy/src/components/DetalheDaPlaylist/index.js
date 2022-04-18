import React from "react";
import styled from "styled-components";
import TrackCard from "../TrackCard";

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
        tracks: [
            {
                "id": "841ce23c-79fb-4ee3-98c5-3de2ac3c0182",
                "name": "Sonho das Esquinas",
                "artist": "BK, Filipe Ret",
                "url": "https://open.spotify.com/track/4GvOLMwaQBdFyK9UyJNJok?si=3243dac3315741d8"
            },
            {
                "id": "b708e2ba-9425-4b82-bd30-a05cb5bace1f",
                "name": "Vida Loka, Pt.1",
                "artist": "Racionais",
                "url": "https://open.spotify.com/track/6m8AgjfI28ER6odzMxmHtR?si=c3b2852e828f48ed"
            }
        ]
    }
    render() {
        const tracks = this.state.tracks.map(track => {
            return <TrackCard
                key={track.id}
                trackName={track.name}
                artist={track.artist}
                url={track.url}
            />
        })
        return (
            <DetalheDaPlaylistContainer>
                <AddMusicaForm>
                    <div>
                        <label>Nome da música</label>
                        <input />
                    </div>
                    <div>
                        <label>Artista</label>
                        <input />
                    </div>
                    <div>
                        <label>Url da música</label>
                        <input />
                    </div>
                    <button type="submit">Adicionar música</button>
                </AddMusicaForm>
                {tracks}
                <button onClick={() => this.props.mudarPagina("playlists")}>Voltar para Playlists</button>
            </DetalheDaPlaylistContainer>
        )
    };

};

export default DetalheDaPlaylist