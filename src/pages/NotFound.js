import React from 'react';
import ButtonBackToHome from '../components/ButtonBackToHome';

const NotFound = () => {
  return(
    <div>
      <h1 style={{color:'#000', fontSize:35}} >404!</h1>
      <h2>No existe esta página</h2>
      <ButtonBackToHome />
    </div>
  )
}

export default NotFound;