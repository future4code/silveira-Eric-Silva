import axios from 'axios'
import { BASE_URL } from "../constants/urls"
import {goToLoginPage, goToPostListPage} from "../routes/coordinator"

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
            goToLoginPage(navigate)
            setRightButtonText("Logout")
        }).catch((err) => {
            alert(err.response.data)
        })
}
