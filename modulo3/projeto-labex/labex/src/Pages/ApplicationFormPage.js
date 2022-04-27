// Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {goBack} from '../routes/coordinator'

export default function ApplicationFormPage() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>ApplicationFormPage</h1>
      <button onClick={()=>goBack(navigate)}>Voltar</button>
    </div>
  )
}
