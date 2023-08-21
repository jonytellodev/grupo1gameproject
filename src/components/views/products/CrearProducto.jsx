import { Form, Button } from "react-bootstrap";

const CrearProducto = () => {
  return (
    <section className="container mainSection">
      <h1 className="display-4 my-5">Nuevo Producto</h1>
      <Form className="fs-3">
        <Form.Group className="my-3" controlId="formNombreProducto">
          <Form.Label className="my-3">Producto*</Form.Label>
          <Form.Control
            className="fs-4"
            type="text"
            placeholder="Ej: Mario Bross Evolution"
          />
        </Form.Group>
        <Form.Group className="my-3" controlId="formDetalle">
          <Form.Label className="my-3">Detalle*</Form.Label>
          <Form.Control className="fs-4" as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="my-3" controlId="formPrecio">
          <Form.Label className="my-3">Precio*</Form.Label>
          <Form.Control className="fs-4" type="number" placeholder="Ej: 500" />
        </Form.Group>
        <Form.Group className="my-3" controlId="formImagen">
          <Form.Label className="my-3">Imagen URL*</Form.Label>
          <Form.Control
            className="fs-4"
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans"
          />
        </Form.Group>
        <Form.Group className="my-3" controlId="formCategoria">
          <Form.Label className="my-3">Categoría*</Form.Label>
          <Form.Select>
            <option value="">Seleccione una opción</option>
            <option value="accion">Acción</option>
            <option value="estrategia">Estrategia</option>
            <option value="aventura">Aventura</option>
          </Form.Select>
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button className="fs-4 fw-bold my-2 btn btn-primary" type="submit">
            Guardar 💾
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default CrearProducto;
