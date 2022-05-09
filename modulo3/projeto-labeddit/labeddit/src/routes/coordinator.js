import { useNavigate } from "react-router-dom";
const navigate = useNavigate

export const goToLoginPage = (navigate) =>{
    navigate("/login")
}

export const goToCreateUserPage = (navigate) =>{
    navigate("/cadastro")
}

export const goToPostListPage = (navigate) =>{
    navigate("/")
}

export const goToAddPostPage = (navigate)=>{
    navigate("/adicionar-post")
}

export const goToPostDetailPage = (navigate, id) => {
    navigate(`/detalhe/${id}`)
}

export const goBack = (navigate) =>{
    navigate(-1)
}