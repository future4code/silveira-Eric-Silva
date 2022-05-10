import React from 'react'
import { LogoImagem, ScreenContainer } from '../LoginPage/styled'
import logo from "../../assets/Logo.png"
import CreateUserForm from "./CreateUserForm"

const CreateUserPage= () =>{
  return (
    <ScreenContainer>
      <LogoImagem src={logo} />
      <CreateUserForm/>
    </ScreenContainer>
  )
}

export default CreateUserPage