import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import { PostContainer, MasterContainer } from './styled'
import { goToPostDetailPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import AddPostForm from './AddPostForm'


const PostListPage= () =>{
  useProtectedPage()
  const navigate = useNavigate()
  const posts = useRequestData([],`${BASE_URL}/posts`)
  console.log(posts)

  const onClickCard= (id) =>{
    goToPostDetailPage(navigate, id)
  }

  const postCards = posts.map((post)=>{
    return (
      <PostContainer key={post.id} onClick={()=>onClickCard(post.id)} >
      <p>Enviado por:{post.username}</p>
      <p>Titulo:{post.title}</p>
      <p>Post:{post.body}</p>
      </PostContainer>
    )
  })
  return (
    <MasterContainer>
      <AddPostForm/>
      {postCards}
    </MasterContainer>
  )
}

export default PostListPage