import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'

const PostDetailPage= () =>{
  useProtectedPage()
  const params = useParams()
  const post = useRequestData({},`${BASE_URL}/posts`)
  const [posst, setPosst] = useState()
  const [comentarios, setComentarios] = useState()

  useEffect (()=>{
    
},[])
  

  console.log(params)
  return (
    <div><h1>PostDetailPage</h1></div>
  )
}

export default PostDetailPage