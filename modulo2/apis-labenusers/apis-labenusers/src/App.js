import React from "react";
import CadastroUser from "./components/CadastroUser"
import ListaUser from "./components/ListaUser"


export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <CadastroUser irParaLista={this.irParaLista}/>
      case "lista":
        return <ListaUser irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro! Página não encontrada :(</div>
    }
  }

  irParaCadastro = () =>{
    this.setState({telaAtual:"cadastro"})
  }
  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render() {
    return (
      <div>
        {this.escolheTela()}
      </div>
    );
  }

}


