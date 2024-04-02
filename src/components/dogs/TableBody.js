import React from 'react'
import { NavLink } from 'react-router-dom';

export const TableBody = ({ breeds }) => {
  let cont = 0;
  return (
    <>
      {
        Object.keys(breeds.message).map((breed, index) => {
          cont += 1;

          return (
            <tr key={index}>
              <td>{cont}</td>
              <td>{breed}</td>
              <td style={{ textAlign: 'left' }}>
                <ul>
                  {
                    breeds.message[breed].map((subBreed, index) => { return <li key={index}>{subBreed}</li> })
                  }
                </ul>
              </td>
              <td><NavLink to={`/dogs/${breed}`}>Photos</NavLink></td>
            </tr>
          )
        })
      }
    </>
  )
}
