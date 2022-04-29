// Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../routes/coordinator'
import useForm from '../hooks/useForm';
import axios from 'axios';
import {Countries} from '../constants/countries'


export default function ApplicationFormPage() {
  const navigate = useNavigate()

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    idViagem: ""
  });

  const cadastrar = (event) => {
    event.preventDefault()
    applyToTrip(form.idViagem)
    cleanFields()
  };

  const [trips, setTrips] = useState([])

  const applyToTrip = (id) => {
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/eric-silva-silveira/trips/${id}/apply`, body)
      .then((res) => {
        console.log(res.data)
        alert("Parabéns! Seu cadastro foi realizado com sucesso")
      }).catch((err) => {
        console.log(err.res.data)
        alert("Opa, ocorreu um erro!")
      })
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/eric-silva-silveira/trips')
      .then((res) => {
        setTrips(res.data.trips)
      })
      .catch((err) => {
        alert("Ocorreu um erro")
      })
  }, [])

  const getTrips = trips.map((list) => {
    return (
      <option key={list.id} value={list.id}> {list.name} </option>
    )
  })

  const getCountries = Countries.map((list) => {
    return (
      <option key={list} value={list}> {list} </option>
    )
  })

  return (
    <div>
      {form.idViagem}
      <h1>Inscreva-se para uma Viagem</h1>
      <form onSubmit={cadastrar}>
        <select
          value={form.idViagem}
          name={"idViagem"}
          onChange={onChange}>
          <option value="" disabled>Escolha sua Viagem</option>
          {getTrips}
        </select>
        <input
          name='name'
          onChange={onChange}
          value={form.name}
          placeholder='Nome'
        />
        <input
          name='age'
          onChange={onChange}
          value={form.age}
          placeholder='Idade'
        />
        <input
          name='applicationText'
          onChange={onChange}
          value={form.applicationText}
          placeholder='Texto e Candidatura'
        />
        <input
          name='profession'
          onChange={onChange}
          value={form.profession}
          placeholder='Profissão'

        />
        <select
          name='country'
          onChange={onChange}
          value={form.country}
        >
        <option value='' disabled>Escolha seu pais</option>
        {getCountries}
        </select>
        <button>Cadastrar</button>
      </form>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  )
}
