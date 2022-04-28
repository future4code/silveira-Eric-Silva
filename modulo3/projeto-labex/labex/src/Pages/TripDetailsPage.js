// Quando clicar na viagem deve mostar um card com os detallhes
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../routes/coordinator'

const useProtectedPage = () =>{
  const navigate = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if (token===null) {
      console.log('Não está logado!!!')
      navigate('/login')
    }
  },[])
}

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
