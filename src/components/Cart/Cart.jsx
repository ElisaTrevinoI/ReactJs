
import { Link } from "react-router-dom";

import { ItemList } from "../ItemList/ItemList";

import { useCarritoContext } from "../../context/CarritoContext";

export const Cart = () => {

const {carrito, emptyCart, totalPrice} = useCarritoContext()

    return (
        <>
            {
                carrito.length === 0
                    ?
                    <>
                        <h2>Carrito vacío</h2>
                        <Link className="nav-link" to={"/"}><button className="btn btn-secondary">Continuar comprando</button></Link>

                    </>

                    :

                    <div className="container cartContainer">
                        <ItemList prods={carrito} plantilla="ItemCart" />
                        <div className="divbuttons">
                            <p>Resumen de la compra: ${new Intl.NumberFormat('en-IN').format(totalPrice())}</p>
                            <button className="btn btn-secondary" onClick={() => emptyCart()}>Vaciar Carrito</button>
                            <Link className="nav-link" to={"/"}><button className="btn btn-secondary">Continuar comprando</button></Link>
                            <Link className="nav-link" to={"/checkout"}><button className="btn btn-secondary">Finalizar compra</button></Link>


                        </div>

                    </div>
            }
        </>
    )

}

