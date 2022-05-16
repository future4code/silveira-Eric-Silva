import React from 'react'
import { LogoImagem, ScreenContainer } from '../LoginPage/styled'
import logo from "../../assets/Logo.png"
import CreateUserForm from "./CreateUserForm"
import useUnProtectedPage from '../../hooks/useUnprotectedPage'

const CreateUserPage = ({setRightButtonText}) =>{
  useUnProtectedPage()
  return (
    <ScreenContainer>
      <LogoImagem src={logo} />
      <CreateUserForm setRightButtonText={setRightButtonText} />
    </ScreenContainer>
  )
}

export default CreateUserPage