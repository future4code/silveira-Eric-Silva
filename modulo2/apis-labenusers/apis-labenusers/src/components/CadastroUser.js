import React from "react";
import styled from "styled-components"
import axios from "axios";


const  ContainerCadastro = styled.div`
background-color: pink;

`
const headers = {
    headers: {
      Authorization: "eric-silva-silveira"
    }
  };
  const urlCriateUser = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"  

export default class CadastroUser extends React.Component {
    state={
        inputNome:"",
        inputEmail:""
    }
    criarUser= () =>{
        const body = {
                "nome":this.state.inputNome,
                "email":this.state.inputEmail
        }
    }
    render() {
        return(
            <div>
                <button>Trocar de tela</button>
                <input
                placeholder="Nome:"
                onChange={this.onChange.n}
                />
                <input
                id="email"
                placeholder="E-mail:"
                />
                <button>Criar Usuário</button>
            </div>
            
            
        )
    }
}

