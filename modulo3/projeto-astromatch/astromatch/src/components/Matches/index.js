import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Logo from '../../img/Logo.png'
import Button from '@material-ui/core/Button'
import Delete from '@material-ui/icons/Delete'
import KeyboardReturn  from '@material-ui/icons/KeyboardReturn'



const ContainerMaster = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color:#ffffff;
`

const ContainerMatches = styled.div`
background-color: #202022;
width: 41vh;
display: flex;
flex-direction: column;
justify-content: center;
border: 2px solid #ed639d;
border-radius: 12px;
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.50), 0 17px 50px 0 rgba(0,0,0,0.60);
`

const MapResult = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
img{
  max-height: 50vh;
  width: 35vh; 
  border-radius: 10px;
  border: 2px solid #ed639d;
 
}
p{
  width: 20vw;
  color: #ffffff;
}

`

const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
img{

  width: 35px;
  display: flex;
}
h2{
  color: #ffffff;
}
`
const Botoes = styled.div`
display: flex;
flex-direction:row;
justify-content: space-around;
`


const urlGetMatches = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eric-silva-silveira/matches'
// Retorna um array de perfis que deram match com você.
const urlClear = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eric-silva-silveira/clear'
// Limpa todos os matches e perfis vistos.
export default function Matches(props) {

  const [matches, setMatches] = useState([]);

  useEffect(()=>{
    getMatches()
  }, []);

  const getMatches = () =>{
    axios.get(urlGetMatches).then((res)=>{
      setMatches(res.data.matches)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const clearMatches = () =>{
    axios.put(urlClear).then((res)=>{
      getMatches()
      alert("Sua lista de Matches foi limpa com sucesso!")
    }).catch((err)=>{
      alert(err)
    })
  }

  const matchList = matches.map((user)=>{
    return(
      <MapResult>
        <img src={user.photo} alt={user.name}/>
        <p>{user.name}</p>
      </MapResult>
  
    )
  
  })

  return (
      <ContainerMaster>

        <ContainerMatches>
          <Header>
            <img src={Logo} alt="Logo"/>
            <h2>AstroMatch</h2>
          </Header>

            {matchList}
         
          <Botoes>
            <Button  color='primary' onClick={props.irParaHome}><KeyboardReturn fontSize="large"/></Button>
            <Button  color='primary' onClick={clearMatches}><Delete fontSize="large"/></Button>
          </Botoes>
            
          

        </ContainerMatches>

      </ContainerMaster>
  )
}