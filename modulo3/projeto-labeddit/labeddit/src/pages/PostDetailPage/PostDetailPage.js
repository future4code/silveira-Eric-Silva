import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequesData from "../../hooks/useRequestData"
import { details } from "../../services/user";
import { ScreenContainer, PostContainer } from "./styled";


const PostDetailPage = () =>{
    useProtectedPage()
    const params = useParams()
    const comentario = useRequesData([], `${BASE_URL}/posts/${params.id}/comments`)
    const posts = useRequesData([],`${BASE_URL}/posts`)
    const {form, onChange, clear} = useForm({ body:""})
    const onSubmitForm=(event)=>{
        event.preventDefault()
        details(form, params.id , clear)
    }
    
    const postCards = posts && posts.map((post)=>{
        if(post.id===params.id)
        return (
          <PostContainer key={post.id}>
          <p>Enviado por:{post.username}</p>
          <p>Titulo:{post.title}</p>
          </PostContainer>
        )
      })
      const listComentario = comentario && comentario.map((comments)=>{
        <PostContainer key={comments.id}>
             <p>Enviado por:{comments.username}</p>
             <p>Comentários:{comments.body}</p>
        </PostContainer>          
      })
    return(
        <ScreenContainer>
            <PostContainer>
                {postCards}
                {listComentario}
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