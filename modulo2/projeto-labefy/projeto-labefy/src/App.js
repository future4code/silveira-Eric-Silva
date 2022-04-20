import React from "react";
import styled from "styled-components";
import CriarPlaylistPage from "./components/CriarPlaylistPage";
import Header from "./components/Header";
import ListaPlaylistPage from "./components/ListaPlaylistPage";




const AppContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
`

class App extends React.Component{

  state = {
    paginaAtual: "criarPlaylistPage"
  }
    mudarPagina = (paginaAtual) => {
      this.setState({paginaAtual: paginaAtual})
    }
    render(){
      const renderPaginaAtual = () =>{
        if (this.state.paginaAtual === "criarPlaylistPage") {
          return <CriarPlaylistPage/>
        } else if (this.state.paginaAtual === "listaPlaylistPage") {
          return <ListaPlaylistPage/>
        }
      }

      return(
        <AppContainer>
          <Header
            mudarPagina={this.mudarPagina}
          />
          {renderPaginaAtual()}
        </AppContainer>
      );
  }
}

export default App;