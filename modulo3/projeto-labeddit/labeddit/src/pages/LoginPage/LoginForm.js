import React from 'react'
import { InputsContainer } from "./styled"
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@material-ui/core'
import useForm from "../../hooks/useForm"
import Button from '@material-ui/core/Button'
import { login } from '../../services/user'
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import { Visibility, VisibilityOff } from '@material-ui/icons'



const LoginForm = ({setRightButtonText}) => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const {form, onChange, clear} = useForm({ email: "", password: "" })
  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, navigate, setRightButtonText)

  }


  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"email"}
        />
                    <FormControl variant="outlined" style={{ width: '100%', marginTop: '15px', marginBottom: '15px' }}>
              <InputLabel>Senha</InputLabel>
              <OutlinedInput
                name={"password"}
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={onChange}
                required
                inputProps={{ pattern: '^[a-zA-Z0-9]{6,}$' }}
                placeholder={'Mínimo 6 caracteres'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={e => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={50}
              />
            </FormControl>
           
        <Button style={{background:"linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB", borderRadius:"20px", fontWeight:"bold", color:"white", marginTop:"5vw"}}
          fullWidth
          variant={"contained"}
          margin={"normal"}
          type={"submit"}
        >Continuar</Button>
      </form>
    </InputsContainer>
  )
}

export default LoginForm