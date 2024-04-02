import React from 'react'
import { TableBody } from './TableBody';

export const Table = ({ breeds }) => {
  return (
    <>
      <table className='table table-hover table-bordered dog-table table-primary'>
        <thead>
          <tr>
            <th>#</th>
            <th>Breed</th>
            <th style={{ width: 150 }}>Sub-breed</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <TableBody breeds={breeds} />
        </tbody>
      </table>
    </>
  )
}
