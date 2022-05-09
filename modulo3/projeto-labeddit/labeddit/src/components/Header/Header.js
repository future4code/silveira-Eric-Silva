import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import { goToLoginPage, goToPostListPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate()
 return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={()=>goToPostListPage(navigate)} color="inherit">Labeddit</Button>
                <Button onClick={()=>goToLoginPage(navigate)} color="inherit">Login</Button>
            </StyledToolbar>
        </AppBar>
    );
}
export default Header