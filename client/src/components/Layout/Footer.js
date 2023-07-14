import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <h4 className='text-center'>
          Todos los derechos reservados &copy;
        </h4>
        <p className='text-center mt-3'>
          <Link to="/about">Sobre nosotros</Link> |
           <Link to="/contact"> Contactot</Link> | 
           <Link to="/policy"> Políticas de la web</Link>
        </p>
    </div>
  )
}

export default Footer