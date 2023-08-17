import { Button } from "react-bootstrap";

const ItemProducto = () => {
  return (
    <tr>
      <td>1</td>
      <td className="fs-5">MARIO BROSS</td>
      <td className="fs-5">$3200</td>
      <td>
        https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg
      </td>
      <td className="fs-5">Entretenimiento</td>
      <td>
        <Button variant="danger">X</Button>
        <Button className="fs-5 fw-bold mx-2 btn btn-warning">Edit🖌️</Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
