import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarProducto = () => {
  const { id } = useParams();
  const navegacion = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    obtenerProducto(id)
      .then((respuesta) => {
        if (respuesta) {
          setValue("nombreProducto", respuesta.nombreProducto);
          setValue("precio", respuesta.precio);
          setValue("descripcion", respuesta.descripcion);
          setValue("imagen", respuesta.imagen);
          setValue("categoria", respuesta.categoria);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (datos) => {
    editarProducto(id, datos)
      .then((respuesta) => {
        console.log(respuesta);
        if (respuesta.status === 200) {
          Swal.fire(
            "Producto Editado",
            "Producto editado con éxito!",
            "success"
          );
          listarProductos().then((respuesta) => {
            localStorage.setItem("productoAgregado", JSON.stringify(respuesta));
          });
          navegacion("/administrador");
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Ocurrió un error!",
          "Nombre, precio o categoría del producto incorrecto",
          "error"
        );
      });
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
              min: {
                value: 1000,
                message: "El precio como mínimo debe ser de $1000",
              },
              max: {
                value: 40000,
                message:
                  "El precio del producto como máximo debe ser de $40000",
              },
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
            <option className="fs-5" value="Accion">
              Acción
            </option>
            <option className="fs-5" value="Estrategia">
              Estrategia
            </option>
            <option className="fs-5" value="Aventura">
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
