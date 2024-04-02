import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Index as DogIndex} from './dogs/Index'
import { NotFound } from './NotFound'
import { Layout } from './Layout'
import { Dog } from '../components/dogs/Dog'

export const Root = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/dogs' element={<DogIndex/>} />
            <Route path='/dogs/:breed' element={<Dog/>}/>
            <Route path='/*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
