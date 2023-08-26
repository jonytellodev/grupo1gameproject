import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';

import Isaias from  '../../assets/Isaias.png';
import Jonathan from  '../../assets/Jhonatan.png';
import Emiliana from  '../../assets/Emiliana.png';
import Sergio from  '../../assets/Sergio.png';
import Tufi from '../../assets/tufi.png';
import GitIcono from  '../../assets/git.png';
import Linkedin from  '../../assets/linkedin.png';



const GrupoCards = ({ imageSrc, Apellido, Nombre, socialLinks }) => {
  return (
    
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '30vh' }}>
    <Card style={{ width: '80%' }}>
      <Row className="align-items-center">
        <Col sm={4}>
          <Card.Img variant="top" src={imageSrc}  />
        </Col>
        <Col sm={8}>
          <Card.Body className="d-flex flex-column justify-content-center align-items-center">
            <Card.Title className="mb-3">
                <span style={{ fontSize: '3.8rem' }}>{Apellido} {Nombre}</span>
                </Card.Title>
            <div className="d-flex flex-column">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} className="mb-2">
                  <img src={link.icon} alt={link.name} style={{ width: '50px', height: '50px' }} />
                </a>
              ))}
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    </div>
  );
};



const Participantes = () => {
  const people = [
    { id: 1, Apellido: 'Padros', Nombre: 'Marcos Isaias', imageSrc: Isaias, socialLinks: [
      { url: 'https://github.com/IsaiasPadros', icon: GitIcono, name: 'Git' },
      { url: '', icon: Linkedin, name: 'Linkedin' },
      
    ] },
    { id: 2, Apellido: 'Quipildor', Nombre: 'Tufi', imageSrc: Tufi, socialLinks: [
        { url: 'https://github.com/TQcmd37', icon: GitIcono, name: 'Git' },
        { url: '', icon: Linkedin, name: 'Linkedin' },
        
      ] },
      { id: 3, Apellido: 'Tello Carrasco', Nombre: 'Jonathan', imageSrc: Jonathan, socialLinks: [
        { url: 'https://github.com/jonytellodev', icon: GitIcono, name: 'Git' },
        { url: '', icon: Linkedin, name: 'Linkedin' },
        
      ] },
      { id: 4, Apellido: 'Torres', Nombre: 'Emiliana', imageSrc: Emiliana, socialLinks: [
        { url: 'https://github.com/EmiTorres93', icon: GitIcono, name: 'Git' },
        { url: '', icon: Linkedin, name: 'Linkedin' },
        
      ] },
      { id: 5, Apellido: 'Zelaya', Nombre: 'Sergio', imageSrc: Sergio, socialLinks: [
        { url: 'https://github.com/SergioSZelaya', icon: GitIcono, name: 'Git' },
        { url: '', icon: Linkedin, name: 'Linkedin' },
        
      ] },
      
    
  ];

  return (

    <><div className="text-center">
      <h1 style={{ color: 'var(--secondary-one-violet)' }}>GLP TEAM </h1>
    </div><div>
        {people.map(person => (
          <div key={person.id} className="mb-4" style={{ marginBottom: '20px' }}>
            <GrupoCards
              Apellido={person.Apellido}
              Nombre={person.Nombre}
              imageSrc={person.imageSrc}
              socialLinks={person.socialLinks} />
          </div>
        ))}
      </div></>
  );
};

export default Participantes;