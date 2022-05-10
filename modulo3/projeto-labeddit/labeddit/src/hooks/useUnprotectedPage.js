import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToPostListPage } from "../routes/coordinator";

const useUnProtectedPage = () => {
    const navigate = useNavigate()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            goToPostListPage(navigate)
        }

    }, [navigate])
}
export default useUnProtectedPage