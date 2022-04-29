// Quando clicar na viagem deve mostar um card com os detallhes
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../routes/coordinator'
import useProtectedPage from '../hooks/useProtectedPage'



export default function TripDetailsPage() {
  useProtectedPage()
  const navigate = useNavigate()

  return (
    <div>

      <h1>Trip details page</h1>
      <button onClick={()=>goBack(navigate)} >Voltar</button>
    </div>
  )
}
