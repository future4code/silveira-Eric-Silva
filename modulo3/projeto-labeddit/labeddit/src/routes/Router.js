import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPostPage from "../pages/AddPostPage/AddPostPage";
import CreateUserPage from '../pages/CreateUserPage/CreateUserPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostDetailPage from '../pages/PostDetailPage/PostDetailPage'
import PostListPage from '../pages/PostListPage/PostListPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from "../components/Header/Header";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<CreateUserPage />} />
                <Route path="/" element={<PostListPage />} />
                <Route path="/adicionar-post" element={<AddPostPage />} />
                <Route path="/detalhe/:id" element={<PostDetailPage />} />
                <Route element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router;