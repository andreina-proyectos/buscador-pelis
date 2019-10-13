import React from 'react';
import {Link} from 'react-router-dom';

const ButtonBackToHome = () => {
  return(
    <Link 
      className="button is-link"
      to='/'>
      Volver a la portada
    </Link>
  )
}

export default ButtonBackToHome;