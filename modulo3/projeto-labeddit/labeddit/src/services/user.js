import axios from 'axios'
import { BASE_URL } from "../constants/urls"
import { goToFeedPage} from "../routes/coordinator"


const headers = {
    headers: {
        Authorization: localStorage.getItem("token")
    }
}

export const login = (body, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeedPage(navigate)
            setRightButtonText("Logout")
        }).catch((err) =>{
            alert(err.response.data)
        })
}

export const singUp = (body, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeedPage(navigate)
            setRightButtonText("Logout")
        }).catch((err) => {
            alert(err.response.data)
        })
}
export const addPost = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/posts`, body, headers)
        .then((res) => {
            clear()
            goToFeedPage(navigate)
        }).catch((err) => {
            alert(err.response.data)
        })
}
export const details = (body, id, clear) =>{
    axios.post(`${BASE_URL}/posts/${id}/comments`, body ,headers)
    .then((res)=>{
        clear()
        console.log(res.data)
        alert("seu comentario foi adicionado")
    }).catch((err)=>{
        console.log(err.response.data)
    })

} 


