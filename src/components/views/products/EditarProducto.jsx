import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const EditarProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (admin) => {
    console.log(admin);
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 my-5 text-center">Editar Producto</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="mt-5 fs-3">
        <Form.Group className="my-3" controlId="formNombreProducto">
          <Form.Label className="my-3">Producto*</Form.Label>
          <Form.Control
            className="fs-4"
            type="text"
            placeholder="Ej: Nombre del producto"
            {...register("nombreProducto", {
              required: "El nombre del producto es un campo obligatorio.",
              pattern: {
                value:
                  /(\W|^)(Mario Bross|Sonic Triple Trouble|Arcana Heart|Space Ace)(\W|$)/,
                message:
                  "El nombre debe cumplir con el formato válido correspondiente a ese producto",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="my-3" controlId="formDetalle">
          <Form.Label className="my-3">Detalle*</Form.Label>
          <Form.Control
            className="fs-4"
            as="textarea"
            rows={3}
            {...register("descripcion", {
              required: "La descripción del producto es un dato obligatorio",
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="my-3" controlId="formPrecio">
          <Form.Label className="my-3">Precio*</Form.Label>
          <Form.Control
            className="fs-4"
            type="number"
            placeholder="Ej: 500"
            {...register("precio", {
              required: "El precio es un dato obligatorio.",
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="my-3" controlId="formImagen">
          <Form.Label className="my-3">Imagen URL*</Form.Label>
          <Form.Control
            className="fs-4"
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans"
            {...register("imagen", {
              pattern: {
                value: /(https?:\/\/.*\.(?:png|jpg|jpeg))/,
                message: "El formato de la url de la imagen no es válido.",
              },
            })}
          />
        </Form.Group>
        <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
        <Form.Group className="my-3" controlId="formCategoria">
          <Form.Label className="my-3">Categoría*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Elección de la categoría es un dato obligatorio.",
            })}
          >
            <option className="fs-4" value="">
              Seleccione una opción
            </option>
            <option className="fs-5" value="accion">
              Acción
            </option>
            <option className="fs-5" value="estrategia">
              Estrategia
            </option>
            <option className="fs-5" value="aventura">
              Aventura
            </option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button className="fs-4 fw-bold my-2 btn btn-primary" type="submit">
            Actualizar 🖌️
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default EditarProducto;
