// Quando clicar na viagem deve mostar um card com os detallhes
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../routes/coordinator'
import useProtectedPage from '../hooks/useProtectedPage'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export default function TripDetailsPage() {
  useProtectedPage()
  const navigate = useNavigate()

  const params = useParams()

  const[trip, setTrip]= useState([])
  const [candidate, setCandidate] = useState([])

  useEffect(()=>{
    const token = localStorage.getItem("token")
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/eric-silva-silveira/trip/${params.id}`,
      {
      headers:{
        auth:token
      }
    }).then((res)=>{
      setTrip(res.data.trip)
      setCandidate(res.data.trip.candidates)
    }).catch((err)=>{
      alert("Ocorreu um erro, tente novamente")
    })
  },[])

  const candidato = (id, choice) => {
    const token = localStorage.getItem("token")
    
    const body = {approve: choice}
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/eric-silva-silveira/trips/${trip.id}/candidates/${id}/decide`, body,
    {
      headers:{
          auth:token 
        }
      }).then((res)=>{
        if (choice===true) {
          alert("Candidato aprovado")
        }else{
          alert("Candidato reprovado")
        }
      }).catch((err)=>{
        console.log(err.response)
        alert("Ocorreu um erro, tente novamente")
      })
  }

  const approvedCandidates = trip.approved && trip.approved.map((candidate) => {
    return (
      <div key={candidate.id}>
         {candidate.name} 
      </div>
    )
  })

  const listCandidates = candidate.map((list)=>{
    return(
      <div key={list.id}>
        <p>Nome: {list.name}</p>
        <p>Idade: {list.age}</p>
        <p>País: {list.country}</p>
        <p>Texto de candidatura: {list.applicationText}</p>
        <p>Profissão: {list.profession}</p>
        <button onClick={()=> candidato(list.id, true)}>Aprovar</button>
        <button onClick={()=> candidato(list.id, false)}>Reprovar</button>
      </div>
    )
  })

  return (
    <div>
      
      <h1>Trip details page</h1>
       <div>
       Nome:{trip.name}
       Data:{trip.date}
       Planeta:{trip.planet}
       Descrição:{trip.description}
       Duração em dias:{trip.durationInDays}
       </div>
       <div>
         <p>Candidatos Pendentes</p>
         {listCandidates}
         <p>Candidatos Aprovados</p>
         {approvedCandidates}
       </div>
      <button onClick={()=>goBack(navigate)} >Voltar</button>
    </div>
  )
}
