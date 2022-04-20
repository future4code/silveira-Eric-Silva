import React from "react";
import axios from "axios";
import styled from "styled-components"
import DetalhesDaPlaylist from "./DetalhesDaPlaylist";

const CardPlaylist = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;
`

export default class ListaDePlaylists extends React.Component {
    state = {
        lista: [],
        telaAtual:"lista",
        playlistId:"",
        nomePlaylist:""
    }
    componentDidMount() {
        this.pegarPlaylist()
    }

    pegarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "eric-silva-silveira"
            }
        }).then((res) => {
            this.setState({ lista: res.data.result.list })
        }).catch((err) => {
            alert("Ocorreu um problema, tente novamente")
        })
    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "eric-silva-silveira"
            }
        }).then((res) => {
            alert("Usuario(a) deletado(a) com sucesso!")
            this.pegarPlaylist()
        }).catch((err) => {
            alert("Ocorreu um problema, tente novamente")
        })
    }
    trocarTela = (id,nome) =>{
        if (this.state.telaAtual==="lista") {
            this.setState({
                telaAtual:"detalhes",
                playlistId:id,
                nomePlaylist:nome
            })
        } else {
            this.setState({
                telaAtual:"lista",
                playlistId:"",
                nomePlaylist:""
            })
        }
    }
    render() {
        const ListaDePlaylists = this.state.lista.map((playlist) => {
            return( <CardPlaylist key={playlist.id}>
                    <p onClick={()=>this.trocarTela(playlist.id, playlist.name)}>{playlist.name}</p>
                    <button onClick={() => this.deletarPlaylist(playlist.id)}>X</button>
                 </CardPlaylist>
            )
        })
        return (
            <div>
                {this.state.telaAtual==="lista"?(
                    <div>
                    <button onClick={this.props.irParaCriarPlaylist}>Ir para Criar Playlist</button>
                    <h2>Lista de Playlists</h2>
                    {ListaDePlaylists}
                    </div>
                ) :<DetalhesDaPlaylist playlistId={this.state.playlistId} nomePlaylist={this.state.nomePlaylist}/>}
            </div>

        )
    }
}