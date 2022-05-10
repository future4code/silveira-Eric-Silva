import React from "react";
import useForm from "../../hooks/useForm";
import { TextField } from "@material-ui/core"
import { InputsContainer } from "../LoginPage/styled";
import Button from "@material-ui/core/Button";


const CreateUserForm = () => {
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })
    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
    }
    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"name"}
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
                >Criar conta</Button>
            </form>
        </InputsContainer>
    )
}

export default CreateUserForm