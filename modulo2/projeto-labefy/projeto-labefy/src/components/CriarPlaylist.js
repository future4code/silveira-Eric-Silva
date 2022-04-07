import React from "react";
import axios from "axios";
import { render } from "react-dom";

export default class CriarPlaylist extends React.Component {
    state = {
        InputTitulo: ""
    }
    handleNome = (event) => {
        this.setState({ titulo: event.target.value })
    }

    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.InputTitulo
        }
    axios.post(url, body, {
        headers: {
            Authorization:"eric-silva-silveira"
    }
    }).then((res) => {
        alert("Playlist criada com sucesso!")
        this.setState({ nome: "" })
    }).catch ((err) => {
        alert(err.response.data.message)
    })
}
    render(){
    return (
    <div>
        <button onClick={this.props.irParaLista}>Ir para a lista de Playlists</button>
        <h2>Criar Playlist</h2>
        <input placeholder={"Digite o nome da Playlist"}
            value={this.state.nome}
            onChange={this.handleNome}
        />
    </div>
)

}
}
