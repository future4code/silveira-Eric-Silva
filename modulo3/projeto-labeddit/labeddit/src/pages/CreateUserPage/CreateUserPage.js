import React from 'react'
import { useState } from 'react'
import { ScreenContainer } from '../CreateUserPage/styled'
import CreateUserForm from "./CreateUserForm"
import useUnProtectedPage from '../../hooks/useUnprotectedPage'



const CreateUserPage = ({setRightButtonText}) =>{
  useUnProtectedPage()
  return (
    <ScreenContainer>
      <h1>Olá, boas vindas ao LabEddit ;)</h1>
      <CreateUserForm setRightButtonText={setRightButtonText} />
    </ScreenContainer>
  )
}

export default CreateUserPage