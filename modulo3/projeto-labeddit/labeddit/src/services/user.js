import axios from 'axios'
import { BASE_URL } from "../constants/urls"
import { goToPostListPage} from "../routes/coordinator"


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
            goToPostListPage(navigate)
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
            goToPostListPage(navigate)
            setRightButtonText("Logout")
        }).catch((err) => {
            alert(err.response.data)
        })
}
export const addPost = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/posts`, body, headers)
        .then((res) => {
            clear()
            goToPostListPage(navigate)
        }).catch((err) => {
            alert(err.response.data)
        })
}

export const details = (id) =>{
    axios.get(`${BASE_URL}/post/${id}/comments`, headers)
    .then((res)=>{
        console.log(res.data)
    }).catch((err)=>{
        console.log(err.response.data)
    })

} 

