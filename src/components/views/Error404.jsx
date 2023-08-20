import { Button } from 'react-bootstrap';
import error from '../../assets/error404.png';
const Error404 = () => {
    return (
        <>
            
            <img src={error} alt="error 404"/>
            <div>
            <Button variant="secondary">Volver al inicio</Button>{' '}
            </div>
        </>
        
    );
};

export default Error404;