import React from "react";
import axios from "axios";


export default class CriarPlaylist extends React.Component {
    state = {
        InputPlaylist: "",
    }
    handlePlaylist = (event) => {
        this.setState({ InputPlaylist: event.target.value })
    }

    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.InputPlaylist
        }
        axios.post(url, body, {
            headers: {
                Authorization: "eric-silva-silveira"
            }
        })
            .then((res) => {
                alert("Playlist criada com sucesso!")
                this.setState({ InputPlaylist: "" })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }
    render() {
        return (
            <div>
                <h2>Criar Playlist</h2>
                <button onClick={this.props.irParaLista}>Ir para a lista de Playlists</button>
                <button onClick={this.criarPlaylist}>Criar Playlist</button>

                <input placeholder={"Digite o nome da Playlist"}
                    value={this.state.InputPlaylist}
                    onChange={this.handlePlaylist}
                />
            </div>
        )

    }
}
