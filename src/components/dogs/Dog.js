import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Photo } from './Photo';

export const Dog = () => {
  const { breed } = useParams();
  const [photos, setPhotos] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    try {
      const getPhotos = async () => {
        const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/8`)
        setStatus(response.data.status)
        setPhotos(response.data.message)
      }

      getPhotos();

    } catch (error) {
      alert(`Error: ${error}`)
    }
  }, []);

  return (
    <>
      <div className='py-5'>
        {breed}
      </div>
      {status === 'success' ? (
        <div className='row'>
          {
            photos.map((photo, index) => {
              return (
                <div key={index} className='col-3'>
                  <Photo url={photo} />
                </div>
              )
            })
          }
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}
