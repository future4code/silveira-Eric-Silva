import React from 'react'
import { ScreenContainer, LogoImagem, SingUpButtonContainer } from "./styled"
import logo from "../../assets/Logo.png"
import Button from '@material-ui/core/Button'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom'
import { goToCreateUserPage } from '../../routes/coordinator'

const LoginPage = () =>{
  const navigate = useNavigate()
  return (
    <ScreenContainer>
      <LogoImagem src={logo} />
        <LoginForm/>
      <SingUpButtonContainer>
        <Button
        onClick={()=>goToCreateUserPage(navigate)}
        fullWidth
        variant={'text'}
        color={'outlined'}
        margin={"normal"}
        type={"submit"}
        >Não possui conta? Cadastre-se
        </Button>
      </SingUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage