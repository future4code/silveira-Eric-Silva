import React from 'react'
import { ScreenContainer, LogoImagem, SingUpButtonContainer, Linha } from "./styled"
import logo from "../../assets/Logo.png"
import Button from '@material-ui/core/Button'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom'
import { goToCreateUserPage } from '../../routes/coordinator'
import useUnProtectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = ({setRightButtonText}) =>{
  useUnProtectedPage()
  const navigate = useNavigate()
  return (
    <ScreenContainer>
      <LogoImagem src={logo} />
      <h1 style={{margin:"0px"}}>LabEddit</h1>
      <p style={{margin:"0px"}} >O projeto de rede social </p>
        <LoginForm setRightButtonText={setRightButtonText} />
        <Linha>
        </Linha>
      <SingUpButtonContainer>
        <Button style={{borderRadius:"20px", fontWeight:"bold"}}
        onClick={()=>goToCreateUserPage(navigate)}
        fullWidth
        variant={'outlined'}
        color={'primary'}
        margin={"normal"}
        type={"submit"}
        >Crie uma conta!
        </Button>
      </SingUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage