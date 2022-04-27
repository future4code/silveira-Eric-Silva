// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela
//Criar Viagem
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {goBack} from '../routes/coordinator'

export default function CreateTripPage() {
  const navigate = useNavigate()
  
  return (
    <div>
      <h1>CreateTripPage</h1>
      <button onClick={()=>goBack(navigate)} >Voltar</button>
      <button>Criar</button>
    </div>
  )
}
