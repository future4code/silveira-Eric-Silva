import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Logo from '../../img/Logo.png'


const ContainerMaster = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const ContainerMatches = styled.div`
border: 2px solid #e84670;
border-radius: 12px;
`

const MapResult = styled.div`
img{
  width: 10vw;
}
background-color:#202022;
display: flex;
flex-direction: row;
border: 2px solid #e84670;
align-items: center;
justify-content: flex-start;
p{
  color: #cacaca;
}
`



const Header = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
background-color: #202022;
border-radius: 10px;
img{
  width: 35px;
}
h2{
  color:#CACACA;
}
`


const Lista = styled.div`
`


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
            <h2>AstroMatch</h2>
            <button onClick={props.irParaHome}>Voltar</button>
          </Header>
          <Lista>
            {matchList}
          </Lista>
            <button onClick={clearMatches}>Limpar</button>

        </ContainerMatches>

      </ContainerMaster>
  )
}