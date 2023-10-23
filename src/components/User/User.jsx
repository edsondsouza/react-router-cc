import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userID} = useParams();
  return (
    <div className='text-center bg-gray-600 text-3xl text-white'>
      User: {userID}
    </div>
  )
}

export default User
