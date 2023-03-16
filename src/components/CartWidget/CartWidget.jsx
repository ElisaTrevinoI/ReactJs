
import { Link } from 'react-router-dom';

import imgCompra from './imagenCompra.png';

import { useCarritoContext } from '../../context/CarritoContext';



export const CartWidget = () => {

    const { getItemQuantity } = useCarritoContext()


    return (
        <>
            <Link className='nav-link' to={"/cart"}>
                <button id="idCarrito" className="botonCarrito">
                    <img src={imgCompra} alt="imagenCompra" /></button>
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </Link>

        </>

    );
}

