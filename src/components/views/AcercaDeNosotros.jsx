import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import Isaias from  '../../assets/Isaias.png';
import Jhonatan from  '../../assets/Jhonatan.png';
import Emiliana from  '../../assets/Emiliana.png';

const PersonCard = ({ imageSrc, name, profession }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} roundedCircle />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{profession}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const ListaNosotros = () => {
  const people = [
    { id: 1, name: 'Padros Isaias', profession: 'Estudiante', imageSrc: Isaias },
    { id: 2, name: 'Quipildor Tufi', profession: 'Profesión 2', imageSrc: 'URL_IMAGEN_2' },
    { id: 3, name: 'Carrasco Jonathan', profession: 'Profesión 3', imageSrc: Jhonatan },
    { id: 4, name: 'Torres Emiliana', profession: 'Profesión 4', imageSrc: Emiliana },
    { id: 5, name: 'Zelaya Sergio', profession: 'Profesión 5', imageSrc: 'URL_IMAGEN_5' },
  ];

  return (
    <div>
       <div className="text-center  py-5">
        <h1 className="display-4">Acerca de nosotros</h1>
      </div>
    <Row className="justify-content-center">
      {people.slice(0, 3).map(person => (
        <Col key={person.id}>
          <PersonCard
            name={person.name}
            profession={person.profession}
            imageSrc={person.imageSrc}
          />
        </Col>
      ))}
    </Row>
    <Row className="justify-content-center">
      {people.slice(3).map(person => (
        <Col key={person.id}>
          <PersonCard
            name={person.name}
            profession={person.profession}
            imageSrc={person.imageSrc}
          />
        </Col>
      ))}
    </Row>
  </div>
  );
};

export default ListaNosotros;
