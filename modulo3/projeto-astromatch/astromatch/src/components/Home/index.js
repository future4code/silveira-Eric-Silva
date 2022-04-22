import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Logo from '../../img/Logo.png'
import styled from 'styled-components'

const ContainerMaster = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 98vh;
background-color:#CACACA; 
`

const ContainerHome = styled.div`
background-color: #202022;
width: 40vw;
display: flex;
flex-direction: column;
justify-content: center;
border: 2px solid #e84670;
border-radius: 12px;
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.50), 0 17px 50px 0 rgba(0,0,0,0.60);
`
const Header = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

img{
  width: 35px;
}
h2{
  color: #CACACA;
}
button{
  background-color: #CACACA;
  border-radius: 10px;
  border: 2px solid #e84670;
}
`

const Perfil = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
  max-height: 50vh;
  width: 40vw;
  border: 2px solid #e84670;
}
p{
  width: 20vw;
  text-align: center;
  color: #CACACA;
}
`
const Botoes = styled.div`
display: flex;
justify-content: space-around;
border: 2px solid #e84670;
border-radius: 10px;
background-color: #202022;
`

const urlProfileToChoose = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eric-silva-silveira/person"
// Retorna um perfil que ainda não foi visto por você.
const urlChoose = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eric-silva-silveira/choose-person"
// Recebe um id e uma escolha (choice). A escolha é a opção do usuário no momento do swipe. Deve ser true ou false.

export default function Home(props) {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = () => {
    axios.get(urlProfileToChoose).then((res) => {
      setProfile(res.data.profile)
    }).catch((err) => {
      alert(err)
    })
  }

  const choosePerson = (boolean) => {
    const body = {
      "id": profile.id,
      "choice": boolean
    }
    axios.post(urlChoose, body).then((res) => {
      getProfile()
    }).catch((err) => {
      alert(err)
    })
  }

  return (
    <ContainerMaster>

      <ContainerHome>

        <Header>

          <img src={Logo} alt='logo-tinder'/>
          <h2>AstroMatch</h2>
          <button onClick={props.irParaMatches}>Matches</button>

        </Header>

        <Perfil>
          <img src={profile.photo} alt={profile.name} />
          <p> {profile.name}, {profile.age} </p>
          <p>{profile.bio}</p>
        </Perfil>

        <Botoes>
          <button onClick={() => choosePerson(false)}>❌</button>
          <button onClick={() => choosePerson(true)}>✔</button>
        </Botoes>

      </ContainerHome>

    </ContainerMaster>
  )
}