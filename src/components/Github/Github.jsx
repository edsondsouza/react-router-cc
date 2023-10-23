import React, { useEffect, useState } from 'react'

export default function Github() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/edsondsouza')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
  }, [])
  return (
    <>
    <div className='text-center bg-gray-600 text-white m-4 p-4 text-3xl'>
      Github followers: {data.followers} 
      <img src={data.avatar_url} alt="GitHub profile" width={300} />
    </div>
    </>
  )
}



