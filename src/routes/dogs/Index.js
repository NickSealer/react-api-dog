import React from 'react'
import { Dogs } from '../../components/dogs/Dogs'
import { RandomDog } from '../../components/RandomDog'

export const Index = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-4 col-md-4 col-sm-12'>
          <div className='random-dog'>
            <RandomDog />
          </div>
        </div>
        <div className='col-lg-8 col-md-8 col-sm-12'>
          <Dogs />
        </div>
      </div>
    </div>
  )
}
