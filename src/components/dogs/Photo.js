import React from 'react'

export const Photo = ({url}) => {
  return (
    <img src={url} alt={url} style={{width: '100%', margin: 10}} />
  )
}
