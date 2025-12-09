import React from 'react'
import { useRouteError } from 'react-router-dom'

const NotFoundPage = () => {
    const error = useRouteError();
  return (
    <div className='container'>
        <h1>404 Not Found</h1>
        <h3>{error.data}</h3>
    </div>
  )
}

export default NotFoundPage