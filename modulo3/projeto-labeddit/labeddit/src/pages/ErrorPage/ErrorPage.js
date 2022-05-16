import React from 'react'
import NotFound from "../../assets/NotFound.png"
import { Typography } from '@material-ui/core'
import {ErrorImagem, ErrorPageContainer} from './styled'

const ErrorPage= () =>{
  return (
    <ErrorPageContainer>
      <ErrorImagem src={NotFound}/>
      <Typography color={'primary'} variant={'h4'} align={'center'}>Erro 404 - Página Não Encontrada</Typography>
    </ErrorPageContainer>
  )
}

export default ErrorPage