// Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ApplicationFormPage() {
  const navigate = useNavigate()

  const goBack = () =>{
    navigate(-1)
  }
  return (
    <div>
      <h1>ApplicationFormPage</h1>
      <button onClick={goBack}>Voltar</button>
    </div>
  )
}
