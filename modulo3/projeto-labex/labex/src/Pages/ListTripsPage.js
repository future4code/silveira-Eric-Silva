// Para vermos todas as viagens
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {goToApplicationFormPage, goBack} from '../routes/coordinator'

export default function ListTripsPage() {
  const navigate = useNavigate()

  const [trips, setTrips] = useState([]);
  
  const getTrips = () =>{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/eric-silva-silveira/trips")
    .then((res)=>{
      setTrips(res.data.trips)
    }).catch((err)=>{
      alert("Ocorreu um erro, por favor tente novamente!")
    })
  }

  useEffect(() => {
    getTrips()
  }, [])

  const listTrips = trips.map((list) => {
    return(
      <div key={list.id}>
        <p>Nome: {list.name}</p>
        <p>Descrição: {list.description}</p>
        <p>Planeta: {list.planet}</p>
        <p>Duração: {list.durationInDays}</p>
        <p>Data: {list.date}</p>
      </div>
    )
  })

  return (
    <div>
      <h1>LISTA DE VIAGENS</h1>
      {listTrips}
      <button onClick={()=>goToApplicationFormPage(navigate)}>Inscreva-se</button>
      <button onClick={()=>goBack(navigate)}>Voltar</button>
    </div>
  )
}
