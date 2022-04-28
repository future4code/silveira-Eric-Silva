// Para fazermos login como administrador
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {goBack, goToCreateTripPage} from '../routes/coordinator'
// goToCreateTripPage
export default function LoginPage() {
  const navigate = useNavigate() 
 

  const [email, setEmail]=useState("");
  const [password, setPassword] = useState("");


  
  const onChangeEmail = (event) =>{
    setEmail(event.target.value);
  };
  const onChangePassword = (event) =>{
    setPassword(event.target.value);
  };
  const onSubmitLogin = () => {
    console.log(email, password);
    const body={
      email: email,
      password: password
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/eric-silva-silveira/login', body)
    .then((res) => {
      console.log('Deu certo: ', res.data)
      localStorage.setItem('token', res.data.token)
      navigate('/admin/trips/list')
    }).catch((err)=>{
      console.log('Deu errado: ', err)
    })
  };


  return (
    <div>
      <h1>LoginPage</h1>
      <input
      placeholder='email'
      type='email'
      value={email}
      onChange={onChangeEmail}
      />
      <input
      placeholder='password'
      type='password'
      value={password}
      onChange={onChangePassword}
      />
      <button onClick={()=>goBack(navigate)}>Voltar</button>
      <button onClick={()=>onSubmitLogin()}>Entrar</button>
    </div>
  )
}
