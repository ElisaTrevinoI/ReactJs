

import imgCompra from './imagenCompra.png';


export const CartWidget = ({ valor }) => {
    return (
        <>
            <button id="idCarrito" className="botonCarrito">
                <img src={imgCompra} alt="imagenCompra" /></button>
            <p>{valor}</p>

        </>

    );
}

