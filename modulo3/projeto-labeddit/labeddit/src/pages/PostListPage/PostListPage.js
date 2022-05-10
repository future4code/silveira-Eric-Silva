import React from 'react'
import Button from "@material-ui/core/Button"
import useProtectedPage from '../../hooks/useProtectedPage'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'

const PostListPage= () =>{
  useProtectedPage()
  const posts = useRequestData([],`${BASE_URL}`)
  return (
    <div>
      <h1>PostListPage</h1>
    </div>
  )
}

export default PostListPage