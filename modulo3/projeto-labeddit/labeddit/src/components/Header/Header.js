import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import { goToLoginPage, goToPostListPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom'



const Header = ({rightButtonText, setRightButtonText}) => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
    
        if (token) {         
            logout()
            setRightButtonText("Login")
            goToLoginPage(navigate)
        } else {
            goToLoginPage(navigate)
        }

    }
    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToPostListPage(navigate)} color="inherit">Labeddit</Button>
                <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
    );
}
export default Header