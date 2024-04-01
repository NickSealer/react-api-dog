import React from 'react'

export const NotFound = () => {
  const not_found = {
    width: '100%'
  }
  
  return (
    <div>
      <h1>Not Found Page</h1>
      <p><b>Oops!</b> Resource not found my friend</p>
      <img src='https://www.onlineoptimism.com/wp-content/uploads/2020/05/404Dog_v3-1.gif' alt='not found' style={not_found}/>
    </div>
  )
}
