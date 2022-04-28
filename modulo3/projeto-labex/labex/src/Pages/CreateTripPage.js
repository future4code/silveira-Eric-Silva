// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela
//Criar Viagem
import React, {useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import {goBack} from '../routes/coordinator'


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
export default function CreateTripPage() {
  useProtectedPage()
  const navigate = useNavigate()

  
  return (
    <div>
      <h1>PRO ADM CRIAR VIAGEM</h1>
      <button onClick={()=>goBack(navigate)} >Voltar</button>
      <button>Criar</button>
    </div>
  )
}
