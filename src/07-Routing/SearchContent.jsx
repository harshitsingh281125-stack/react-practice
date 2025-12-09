import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchContent = () => {
    const [param] = useSearchParams();
  return (
    <div>{`SearchContent: ${param.get('query')}`}</div>
  )
}

export default SearchContent