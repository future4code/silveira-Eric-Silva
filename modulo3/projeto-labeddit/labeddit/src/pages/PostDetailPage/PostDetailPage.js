import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { details } from "../../services/user";
import { ScreenContainer, PostContainer } from "./styled";
import axios from "axios";


const PostDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const comentario = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    const post = useRequestData([], `${BASE_URL}/posts`)
    const { form, onChange, clear } = useForm({ body: "" })
    const onSubmitForm = (event) => {
        event.preventDefault()
        details(form, params.id, clear)
    }

    const postCards = post && post.map((posts) => {
        if (posts.id === params.id)
            return (
                <PostContainer key={posts.id}>
                    <p>Enviado por:{posts.username}</p>
                    <p>Título:{posts.title}</p>
                </PostContainer>
            )
    })
    const handleVote = (postId, direction) => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }
        const body = {
            direction: direction
        }
        if (direction === 1) {
            axios.post(`${BASE_URL}/comments/${postId}/votes`, body, headers
            ).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        } else if (direction === -1) {
            axios.put(`${BASE_URL}/comments/${postId}/votes`, body, headers
            ).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        } else {
            axios.delete(`${BASE_URL}/comments/${postId}/votes`, headers
            ).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    const handleLike = (postId, userVote) => {
        if (userVote === 1) {
            handleVote(postId)
        } else {
            handleVote(postId, 1)

        }
    }

    const handleNoLike = (postId, userVote) => {
        if (userVote === -1) {
            handleVote(postId)
        } else {
            handleVote(postId, -1)

        }

    }
    const listComments = comentario && comentario.map((comments) => {
        return (
            <PostContainer key={comments.id}>
                <p>Enviado por:{comments.username}</p>
                <p>Comentários:{comments.body}</p>
                <button onClick={() => handleLike(comments.id, comments.userVote)}>like</button>
                <button onClick={() => handleNoLike(comments.id, comments.userVote)}>nolike</button>
                <p>{comments.voteSum}</p>
            </PostContainer>
        )
    })


    return (
        <ScreenContainer>
            <PostContainer>
                {postCards}
                {listComments}
                <form onSubmit={onSubmitForm}>
                    <input
                        placeholder="Adicionar comentários"
                        name={"body"}
                        onChange={onChange}
                        value={form.body}
                        required
                    />
                    <button>vai</button>
                </form>
            </PostContainer>
        </ScreenContainer>
    )
}

export default PostDetailPage