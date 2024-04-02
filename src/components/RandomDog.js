import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Photo } from './dogs/Photo';

export const RandomDog = () => {
  const [image, setImage] = useState();
  const [status, setStatus] = useState(0);

  const getRandomDog = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setStatus(response.data.status);
      setImage(response.data.message)
    } catch (error) {
      alert(`Error: ${error}`)
    }
  }

  return (
    <>
      <button type='button' className='btn btn-outline-primary mb-3' onClick={getRandomDog}>Fetch Random Photo</button>
      {status === 'success' ? (
        <>
          <Photo url={image}/>
        </>
      ) : (
        <p>No Photo</p>
      )
      }
    </>
  )
}
