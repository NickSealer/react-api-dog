import React, { useEffect, useState } from 'react'
import { Table } from './Table'
import axios from 'axios';

export const Dogs = () => {
  const [dogs, setDogs] = useState([])
  const [status, setStatus] = useState(0);

  useEffect(() => {
    try {
      const getDogs = async () => {
        let response = await axios.get('https://dog.ceo/api/breeds/list/all');
        setStatus(response.status)
        setDogs(response.data)
      }

      getDogs();

    } catch (error) {
      alert(`An error has ocurred: ${error}`)
    }
  }, [])


  return (
    <>
      {status === 200 ? (
        <Table breeds={dogs} />
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}
