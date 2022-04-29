// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela
//Criar Viagem
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import {goBack} from '../routes/coordinator'
import useProtectedPage from '../hooks/useProtectedPage'


export default function CreateTripPage() {
  useProtectedPage()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [planet, setPlanet] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [durationInDays, setDurationInDays] = useState("")

  const token = localStorage 

  
  return (
    <div>
      <h1>PRO ADM CRIAR VIAGEM</h1>
      <button onClick={()=>goBack(navigate)} >Voltar</button>
      <button>Criar</button>
    </div>
  )
}
