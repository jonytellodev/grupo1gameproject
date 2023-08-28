import React from "react";
import CardProducto from "./products/CardProducto";
import { useState, useEffect } from "react";
import { listarProductos } from "../helpers/queries";
import Swal from "sweetalert2";
import "./Inicio.css";
import Carousel from "react-bootstrap/Carousel";
import { Container, InputGroup, Form, Button, Row } from "react-bootstrap";

const Inicio = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://i.ibb.co/16THfg5/PORTADA1.jpg"
            alt="img-alt"
            className="fixImgWidth"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://i.ibb.co/ZJnZgHR/PORTADA2.jpg"
            alt="img-alt"
            className="fixImgWidth"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://i.ibb.co/pRfhBs6/PORTADA3.jpg"
            alt="img-alt"
            className="fixImgWidth"
          />
        </Carousel.Item>
      </Carousel>

      <Container className="searchGameBar mt-3">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Busca tu juego favorito..."
            aria-label="Busca tu juego favorito..."
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2" className="searchGameButton">
            Buscar
          </Button>
        </InputGroup>
      </Container>

      <Container className="featured-games">
        <h2 className="text-center">CATALOGO DE TITULOS</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-6 col-lg-12">
            <div className="game-card text-center">
            <img src="https://i.ibb.co/4pTRg7g/gta.jpg" alt="gta" border="0" />
              <h3>GTA V - PS4</h3>
              <span>$000,00</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <button className="btn btn-light">DETALLES</button>
            </div>
            <div className="game-card text-center">
              <img
                src="https://i.ibb.co/m4pPxsL/minecraft.webp"
                alt="Juego 1"
                className="img-fluid gamefixImg"
              />
              <h3>MINECRAFT</h3>
              <span>$000,00</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <button className="btn btn-light">DETALLES</button>
            </div>
            <div className="game-card text-center">
              <img
                src="src\assets\minecraft.webp"
                alt="Juego 1"
                className="img-fluid gamefixImg"
              />
              <h3>GTA V - PS4</h3>
              <span>$000,00</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <button className="btn btn-light">DETALLES</button>
            </div>
            <div className="game-card text-center">
              <img
                src="/src/assets/gta.jpeg"
                alt="Juego 1"
                className="img-fluid gamefixImg"
              />
              <h3>GTA V - PS4</h3>
              <span>$000,00</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <button className="btn btn-light">DETALLES</button>
            </div>
            <div className="game-card text-center">
              <img
                src="/src/assets/gta.jpeg"
                alt="Juego 1"
                className="img-fluid gamefixImg"
              />
              <h3>GTA V - PS4</h3>
              <span>$000,00</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <button className="btn btn-light">DETALLES</button>
            </div>
            <div className="game-card text-center">
              <img
                src="/src/assets/gta.jpeg"
                alt="Juego 1"
                className="img-fluid gamefixImg"
              />
              <h3>GTA V - PS4</h3>
              <span>$000,00</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <button className="btn btn-light">DETALLES</button>
            </div>
            <div className="game-card text-center">
              <img
                src="/src/assets/gta.jpeg"
                alt="Juego 1"
                className="img-fluid gamefixImg"
              />
              <h3>GTA V - PS4</h3>
              <span>$000,00</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <button className="btn btn-light">DETALLES</button>
            </div>
            <div className="game-card text-center">
              <img
                src="/src/assets/gta.jpeg"
                alt="Juego 1"
                className="img-fluid gamefixImg"
              />
              <h3>GTA V - PS4</h3>
              <span>$000,00</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <button className="btn btn-light">DETALLES</button>
            </div>
            <div className="game-card text-center">
              <img
                src="/src/assets/gta.jpeg"
                alt="Juego 1"
                className="img-fluid gamefixImg"
              />
              <h3>GTA V - PS4</h3>
              <span>$000,00</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <button className="btn btn-light">DETALLES</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Inicio;
