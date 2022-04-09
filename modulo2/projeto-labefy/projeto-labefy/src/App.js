import React from "react";
import ListaDePlaylists from "./components/ListaDePlaylists"
import DetalhesDaPlaylist from "./components/DetalhesDaPlaylist"
import CriarPlaylist from "./components/CriarPlaylist"
import AddMusica from "./components/AddMusica"

export default class App extends React.Component {
  state = {
    telaAtual: "criarplaylist"
  }
  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "criarplaylist":
        return <CriarPlaylist irParaLista={this.irParaLista} />
      case "lista":
        return <ListaDePlaylists irParaCriarPlaylist={this.irParaCriarPlaylist} />
      default:
        return <div>Erro! Página não encontrada :( </div>
    }
  }
  irParaCriarPlaylist = () => {
    this.setState({ telaAtual: "criarplaylist" })
  }
  irParaLista = () => {
    this.setState({ telaAtual: "lista" })
  }
  render() {
    return (
      <div>{this.escolheTela()}</div>
    )
  }
}