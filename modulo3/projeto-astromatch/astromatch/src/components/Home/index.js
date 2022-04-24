import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from '../../img/Logo.png';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Arrow  from '@material-ui/icons/ArrowForwardIos';
import Favorite from '@material-ui/icons/Favorite';
import Close from '@material-ui/icons/Close';



const ContainerMaster = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color:#ffffff;
`

const ContainerHome = styled.div`
background-color: #202022;
width: 41vh;
display: flex;
flex-direction: column;
justify-content: center;
border: 2px solid #ed639d;
border-radius: 12px;
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.50), 0 17px 50px 0 rgba(0,0,0,0.60);
`
const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;


img{

  width: 35px;
  display: flex;
}
h3{
  color: #ffffff;
}
Button{
  align-items: center;
  text-align: center;
}
`

const Perfil = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
img{
  max-height: 50vh;
  width: 40vh; 
  border-radius: 10px;
  border: 2px solid #ed639d;
 
}
p{

  color: #ffffff;
}
`
const Botoes = styled.div`
display: flex;
justify-content: space-around;

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
          <h3>AstroMatch</h3>
          <Button variant="outlined" size='small' color="primary"  endIcon={<Arrow/>} onClick={props.irParaMatches}>Matches</Button>
        </Header>

        <Perfil>
          <img src={profile.photo} alt={profile.name} />
          <p> {profile.name}, {profile.age} </p>
          <p>{profile.bio}</p>
        </Perfil>
        <Botoes>
          <Button color="primary" aria-label='like'  onClick={() => choosePerson(true)}><Favorite fontSize="large"/></Button>
          <Button  color="primary" aria-label='no like' onClick={() => choosePerson(false)}><Close fontSize="large"/></Button>
        </Botoes>
        

      </ContainerHome>

    </ContainerMaster>
  )
}