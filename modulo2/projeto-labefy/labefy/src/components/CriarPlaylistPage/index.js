import React from "react";
import styled from "styled-components";
import axios from "axios"
import { baseUrl, axiosConfig } from "../../constants";

const CriarPlaylistContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CriarPlaylistform = styled.form`   
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

class CriarPlaylistPage extends React.Component {
    state = {
        inputNameValue: ""
    }

    changeInputnameValue = (event) => {
        this.setState({inputNameValue: event.target.value})
    }

    createPlaylist = (event) => {
        event.preventDefault();
        const body = {
            name: this.state.inputNameValue
        };

        axios.post(baseUrl, body, axiosConfig).then(() => {
            alert('Playlist cadastrada com sucesso')
        }).catch(err => [
            console.log(err)
        ]);
        this.setState({inputNameValue: ""});
    };
    
    render () {
        return (
            <CriarPlaylistContainer>
                <h1>Cadastrar nova Playlist</h1>
                <CriarPlaylistform onSubmit={this.createPlaylist} >
                    <label>Nova playlist</label>
                    <input 
                        placeholder="Nome da Playlist"
                        type="text"
                        value={this.state.inputNameValue}
                        onChange={this.changeInputnameValue}
                    />
                    <button type="submit">Cadastrar Playlist</button>
                </CriarPlaylistform>
            </CriarPlaylistContainer>
        );
    };
};

export default CriarPlaylistPage