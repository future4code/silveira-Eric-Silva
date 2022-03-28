import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state= {
    Post:[
        {
        nomeUsuario:"paulinha",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost:"https://picsum.photos/200/150"
        },
        {
        nomeUsuario:"irineu",
        fotoUsuario:"https://picsum.photos/50/60",
        fotoPost: "https://picsum.photos/200/160"
        },
        {
        nomeUsuario:"hommer",
        fotoUsuario:"https://picsum.photos/50/70",
        fotoPost:"https://picsum.photos/200/170"
        }
      ],
      valorInputNome:"",
      valorInputFotoPerfil:"",
      valorInputFotoPost:""
    };
      adicionaPessoa = () => {
        const novaPessoa = {
          nomeUsuario: this.state.valorInputNome,
          fotoUsuario: this.state.valorInputFotoPerfil,
          fotoPost: this.state.valorInputFotoPost
        }
      }

render() {
  const arrayDeComponentes = this.state.Post.map((item) => {

    return (
      <Post
        {...item}
      />
    )
  })

    return (
      <MainContainer>
        {arrayDeComponentes}
      </MainContainer>
    );
  }
}


export default App;
