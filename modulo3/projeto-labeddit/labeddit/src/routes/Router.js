import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateUserPage from '../pages/CreateUserPage/CreateUserPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostDetailPage from '../pages/PostDetailPage/PostDetailPage'
import PostListPage from '../pages/PostListPage/PostListPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'


const Router = ({setRightButtonText}) => {
    return (
            <Routes>
                <Route path="/" element={<LoginPage setRightButtonText={setRightButtonText} />} />
                <Route path="/cadastro" element={<CreateUserPage setRightButtonText={setRightButtonText} />} />
                <Route path="/feed" element={<PostListPage />} />
                <Route path="/detalhe/:id" element={<PostDetailPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
    );
};
export default Router;