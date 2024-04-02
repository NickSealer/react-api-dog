// The purpose of this file is only as example

import React, { useState, useEffect } from 'react'

export const Fetch = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const getDogs = async () => {
      const result = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await result.json()
      setDogs(data)
      console.log(data);
    }
    
    getDogs();
  }, [])

  

  return (
    <>
    </>
  )
}
