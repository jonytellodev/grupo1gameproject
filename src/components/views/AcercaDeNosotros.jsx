import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Isaias from  '../../assets/Isaias.png';
import Jonathan from  '../../assets/Jhonatan.png';
import Emiliana from  '../../assets/Emiliana.png';
import Sergio from  '../../assets/Sergio.png';
import Tufi from '../../assets/Sergio.png';
import GitIcono from  '../../assets/git.png';
import Linkedin from  '../../assets/linkedin.png';

const PersonCard = ({ imageSrc, Apellido, Nombre, socialLinks }) => {
  return (
    <Card style={{ width: '100%' }}>
      <Row className="align-items-center">
        <Col sm={4}>
          <Card.Img variant="top" src={imageSrc} roundedCircle />
        </Col>
        <Col sm={8}>
          <Card.Body>
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
      { id: 3, Apellido: 'Carrasco', Nombre: 'Jonathan', imageSrc: Jonathan, socialLinks: [
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
    <div>
      {people.map(person => (
        <div key={person.id} className="mb-4">
          <PersonCard
            Apellido={person.Apellido}
            Nombre={person.Nombre}
            imageSrc={person.imageSrc}
            socialLinks={person.socialLinks}
          />
        </div>
      ))}
    </div>
  );
};

export default Participantes;