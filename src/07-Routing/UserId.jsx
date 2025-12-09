import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserId = () => {
    const {id} = useParams();
    const navigate = useNavigate();
  return (
    <>
    <div>{`UserId is ${id}`}</div>
    <button onClick={()=>navigate('/home')}>Navigate back</button>
    <button onClick={()=>navigate('/search?query=react')}>Navigate to Search</button>
    </>
  )
}

export default UserId