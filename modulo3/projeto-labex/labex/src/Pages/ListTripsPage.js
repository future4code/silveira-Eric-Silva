// Para vermos todas as viagens
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ListTripsPage() {
  const navigate = useNavigate()

  const goToApplicationFormPage = () =>{
    navigate("/trips/application") 
  }
  const goBack = () =>{
    navigate(-1)
  }
  return (
    <div>
      <h1>ListTripsPage</h1>
      <button onClick={goToApplicationFormPage}>Inscreva-se</button>
      <button onClick={goBack}>Voltar</button>
    </div>
  )
}
