import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Logo from '../../img/Logo.png'
import styled from 'styled-components'

const ContainerMaster = styled.div`
`
const ContainerHome = styled.div`
`
const Header = styled.div`
`
const Perfil = styled.div`
`
const Botoes = styled.div`
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
          <img src={Logo} />
          <h2>AstroMatch</h2>
          <button onClick={props.matches}>Matches</button>
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