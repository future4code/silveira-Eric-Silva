// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {goToCreateTripPage, goBack, goTripDetailsPage} from '../routes/coordinator'
import axios from 'axios'
import useProtectedPage from '../hooks/useProtectedPage'




export default function AdminHomePage() {
  useProtectedPage()
  const navigate = useNavigate()

  const goTripDetailsPage = (id) =>{
    navigate(`/admin/trips/${id}`)
  }

  const [trips, setTrips]= useState([])
  
  useEffect(()=>{
    const token = localStorage.getItem('token')
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/eric-silva-silveira/trips')
    .then((res)=>{
      setTrips(res.data.trips)
    })
    .catch((err)=>{
      alert("Ocorreu um erro, tente novamente")
    })
  },[])

  const deleteViagem=(id) =>{
    const token = localStorage.getItem("token")
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/eric-silva-silveira/trips/${id}`,
    {
  
      headers: {
        auth: token
      }
    })
    .then((res) => {
      alert("Viagem excluída com sucesso!")
    }).catch((err) => {
      alert("Ocorreu um erro, tente novamente")
    })
  }
  const tripsList = trips.map((list)=>{
    return(
      <div>
        <button onClick={()=>goTripDetailsPage(list.id)}>{list.name}</button>
        <button onClick={()=>deleteViagem(list.id)}>X</button>
      </div>
    )
  })

  return (
    <div>
      <h1>AdminHomePage</h1>
      <button onClick={()=>goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button onClick={()=>goBack(navigate)}>Voltar</button>
      <button>Logout</button>
        {tripsList}
    </div>
  )
}
