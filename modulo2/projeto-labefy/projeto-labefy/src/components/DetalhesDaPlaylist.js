import React from "react";
import axios from "axios";
import styled from "styled-components"

const CardDetalhes = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;
`

export default class DetalhesDaPlaylist extends React.Component{
    state = {
        detalhes:[]
    }
    componentDidMount(){
        this.pegarDetalhes()
    }
    pegarDetalhes = () =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`
        axios.get(url,{
            headers:{
                Authorization: "eric-silva-silveira"
            }
        }).then((res)=>{
            this.setState({detalhes:res.data.result.track})
        }).catch((err)=>{
            alert("Ocorreu um problema, tente novamente")
        })
    }
    render(){
        console.log(this.state.detalhes)
        // const DetalhesDaPlaylists = this.state.detalhes.map((user)=>{
        //     return(
        //         <CardDetalhes key={user.id}>{user.name}</CardDetalhes>
        //     )
        // })
        return(
            <div>
                <button onClick={this.props.irParaLista} >Ir para Lista de Playlist</button>
                <h2>Detalhes da Playlist</h2>
                <p>{this.props.nomePlaylist}</p>
                {/* {DetalhesDaPlaylists} */}
            </div>
        )
    }
}
