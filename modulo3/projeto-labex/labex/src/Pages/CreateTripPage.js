// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela
//Criar Viagem
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import {goBack} from '../routes/coordinator'
import useProtectedPage from '../hooks/useProtectedPage'
import axios from 'axios'
import useForm from '../hooks/useForm'
import {Planets} from '../constants/planets'



export default function CreateTripPage() {
  useProtectedPage()
  const navigate = useNavigate()

  const { form, onChange, cleanFields} = useForm({
    name:"",
    planet:"",
    date:"",
    description:"",
    durationInDays:""
  })

  const create = (event) => {
    event.preventDefault()
    createTrip()
    cleanFields()
  }

  const createTrip = () =>{
    const headers = {
      headers:{
        "Content-Type": "application/json",
        "auth": localStorage.getItem("token")
      }
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/eric-silva-silveira/trips", form, headers)
    .then((res)=>{
    alert("Parabéns sua viagem foi cadastrada com sucesso")
    }).catch((err)=>{
      cleanFields()
      alert("Ocorreu um erro, tente novamente")
    })
  }

  const getPlanet = Planets.map((planets)=>{
    return <option key={planets} value={planets}>{planets}</option>
  })

  return (
    <div>
      <h1>Sala de Comando</h1>
      <button onClick={()=>goBack(navigate)} >Voltar</button>
      <form onSubmit={create}>
        <input
        name={'name'}
        placeholder={'Nome'}
        value={form.name}
        onChange={onChange}
        />
      <select
      name={"planet"}
      value={form.planet}
      onChange={onChange}
      placeholder="Planet"
      >
        <option value="" disabled>Escolha um planeta</option>
        {getPlanet}
      </select>
      <input
      name={'date'}
      type={'date'}
      placeholder = 'Data'
      value={form.date}
      onChange={onChange}
      />
        <input
        name={'description'}
        placeholder='Descrição'
        value={form.description}
        onChange={onChange}
      />
      <input
      name={'durationInDays'}
      placeholder="Duração em dias"
      value={form.durationInDays}
      onChange={onChange}
      />
      <button>Criar</button>
      </form>
    </div>
  )
}
