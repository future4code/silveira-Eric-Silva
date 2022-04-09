import React from "react";
import axios from "axios";

export default class AddMusica extends React.Component{
    state = {
        InputMusica:"",
        InputArtista:"",
        InputURL:""
    }
    handleMusica = (event)=> {
        this.setState({ InputMusica: event.target.value})
    }
    handleArtista = (event)=> {
        this.setState({InputArtista: event.target.value})
    }
    handleURL = (event) => {
        this.setState({InputURL: event.target.value})
    }
    addMusica = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
        const body ={
            name: this.state.InputMusica,
            artista:this.state.InputArtista,
            urlDaMusica:this.state.InputURL
        }
        axios.post(url, body, {
            headers:{
                Authorization: "eric-silva-silveira"
            }
        }).then((res)=>{
            alert("Música adicionada com sucesso!")
            this.setState({InputMusica:"", InputArtista:"", InputURL:""})
        }).catch((err)=>{
            alert(err.response.data.message)
        })
    }
    render() {
        return (
            <div>
                <h2>Adicionar música a Playlist</h2>
                <button onClick={this.state.InputMusica}>Adicionar Música</button>

                <input placeholder="Digite o nome da Música"
                    value={this.state.InputMusica} 
                    onChange={this.handleMusica}/>

                <input placeholder="Digite o nome do Artista"
                    value={this.state.InputArtista} 
                    onChange={this.handleArtista}/>

                <input placeholder="Digite o Link"
                    value={this.state.InputURL} 
                    onChange={this.handleURL}/>
            </div>
        )
    }
}