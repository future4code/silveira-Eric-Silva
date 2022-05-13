import React from "react"
import { InputsContainer } from "./styled"
import { TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core"
import { addPost } from "../../services/user"
import { useNavigate } from "react-router-dom"




    const AddPostForm = () =>{
    const navigate = useNavigate()
    const {form, onChange, clear} = useForm({title:"", body:""})  
    const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(form)
    addPost(form, clear, navigate)
  }

return (
      <InputsContainer>
      <form onSubmit={onSubmitForm}>
      <TextField
        name={"title"}
        value={form.title}
        onChange={onChange}
        label={"Título"}
        variant={'outlined'}
        fullWidth
        required
        autoFocus
        margin={'normal'}      
      />
      <TextField
        name={"body"}
        value={form.body}
        onChange={onChange}
        label={"Post"}
        variant={'outlined'}
        fullWidth
        required
        autoFocus
        margin={'normal'}      
      />
      <Button
      color={"primary"}
      variant={"contained"}
      type={'submit'}
      fullWidth
      >Postar</Button>
      </form>
      </InputsContainer>
)
}

export default AddPostForm