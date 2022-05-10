import React from "react";
import useForm from "../../hooks/useForm";
import { TextField } from "@material-ui/core"
import { InputsContainer } from "../LoginPage/styled";
import Button from "@material-ui/core/Button";
import { singUp } from "../../services/user";
import { useNavigate } from "react-router-dom";



const CreateUserForm = ({setRightButtonText}) => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({username:"", email:"", password:""})


    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
        singUp(form, clear, navigate, setRightButtonText)
    }
    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"username"}
                />
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
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                />
                <Button
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    margin={"normal"}
                    type={"submit"}
                >Cadastrar</Button>
            </form>
        </InputsContainer>
    )
}

export default CreateUserForm