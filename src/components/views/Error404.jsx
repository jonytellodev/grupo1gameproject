
import { Button } from 'react-bootstrap';
import error from '../../assets/error404.png';
const Error404 = () => {
    return (
        <>
            
            <img src={error} alt="error 404"/>
            <div className='mt-5'>
            <Button variant="outline-danger">Volver al inicio</Button>{' '}
            </div>
        </>
        
    );
};

export default Error404;

import React from "react";

const Error404 = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img
        src="https://media.istockphoto.com/id/1032076614/es/foto/error-404-p%C3%A1gina-no-encontrada-plantilla-de-dise%C3%B1o-con-texto-y-robot-ilustraci%C3%B3n-para-un-sitio.jpg?s=1024x1024&w=is&k=20&c=LhfBpZcFPweIYyxdlZO2x0iQNHB5rlLlIIqmkVM2Q8c="
        alt="error404"
      />
    </div>
  );
};

export default Error404;

