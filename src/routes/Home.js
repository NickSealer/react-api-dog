import React from 'react'
import { NavLink } from 'react-router-dom'
import { DogPicture } from '../components/DogPicture'

export const Home = () => {
  return (
    <div className='container py-3'>
      <p><NavLink to='/dogs'>In this site you can find all dog breeds</NavLink></p>
      <DogPicture />
    </div>
  )
}
