import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Logo from '../../img/Logo.png'

const MapResult = styled.div``
const ContainerMaster = styled.div``
const ContainerMatches = styled.div``
const Header = styled.div``
const Lista = styled.div``

const urlGetMatches = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eric-silva-silveira/matches'
// Retorna um array de perfis que deram match com você.
const urlClear = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eric-silva-silveira/clear'
// Limpa todos os matches e perfis vistos.
export default function Matches(props) {

  const [matches, setMatches] = useState([])

  useEffect(()=>{
    getMatches()
  }, [])

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
            <img src={Logo}/>
            <p>AstroMatch</p>
          </Header>
            <button onClick={props.irParaHome}>Voltar</button>
          <Lista>
            {matchList}
          </Lista>
            <button onClick={clearMatches}>Limpar lista de matches </button>

        </ContainerMatches>

      </ContainerMaster>
  )
}