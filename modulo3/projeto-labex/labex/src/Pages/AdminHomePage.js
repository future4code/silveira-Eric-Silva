// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {goToCreateTripPage, goBack} from '../routes/coordinator'
import axios from 'axios'


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

export default function AdminHomePage() {
  useProtectedPage()
  const navigate = useNavigate()
  
  useEffect(()=>{
    const token = localStorage.getItem('token')
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/eric-silva-silveira/trip/:id', {
      headers: {
        auth: token
      }
    })
    .then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log('Deu erro: ', err.res)
    })
  }, [])


  return (
    <div>
      <h1>AdminHomePage</h1>
      <button onClick={()=>goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button onClick={()=>goBack(navigate)}>Voltar</button>
      <button>Logout</button>
    </div>
  )
}
