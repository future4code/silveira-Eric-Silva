import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import { PostContainer, MasterContainer } from './styled'
import { goToPostDetailPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import AddPostForm from './AddPostForm'
import axios from 'axios'


const FeedPage = () =>{
  useProtectedPage()
  const navigate = useNavigate()
  const posts = useRequestData([],`${BASE_URL}/posts`)
  console.log(posts)

  const onClickCard= (id) =>{
    goToPostDetailPage(navigate, id)
  }
   const handleVote = (postId, direction) =>{
    const headers = {
      headers: {
          Authorization: localStorage.getItem("token")
      }
  }
  const body = {
    direction: direction
  }
  if (direction===1){
    axios.post(`${BASE_URL}/posts/${postId}/votes`, body, headers
    ).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }else if (direction===-1){
    axios.put(`${BASE_URL}/posts/${postId}/votes`, body, headers
    ).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }else{
    axios.delete(`${BASE_URL}/posts/${postId}/votes`, headers
    ).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
}

const handleLike = (postId, userVote)=>{
if(userVote===1){
  handleVote(postId)
}else{
  handleVote(postId, 1)

}
}

const handleNoLike = (postId, userVote)=>{
  if(userVote===-1){
    handleVote(postId)
  }else{
    handleVote(postId,-1)
  
  }

}
  const postCards = posts.map((post)=>{
    return (
      <PostContainer key={post.id}>
      <p>Enviado por:{post.username}</p>
      <p>Titulo:{post.title}</p>
      <p>Post:{post.body}</p>
      <button onClick={()=>handleLike(post.id, post.userVote)}>like</button>
      <button onClick={()=>handleNoLike(post.id, post.userVote)}>nolike</button>
      <button onClick={()=>onClickCard(post.id)} >Detalhes</button>
      <p>{post.voteSum}</p>
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


export default FeedPage