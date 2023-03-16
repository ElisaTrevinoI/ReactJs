
import { useState } from "react";

import { Link } from "react-router-dom";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';

import { useCarritoContext } from "../../context/CarritoContext";

import { createOrdenCompra, getProducto, updateProducto } from "../Utils/Firebase";



export const Checkout = () => {

    const { carrito, emptyCart, totalPrice } = useCarritoContext()

    let navigate = useNavigate()

    const datosForm = useRef()

    const [email, setEmail] = useState("")
    const [emailConfirmation, setEmailConfirmation] = useState("")



    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    };

    const handleEmailConfirmationChange = (event) => {
        setEmailConfirmation(event.target.value)
    }

    const isFormValid = () => {
        return email === emailConfirmation && email !== ""
    }



    const consultarForm = (e) => {

        e.preventDefault()

        const data = new FormData(datosForm.current)

        const cliente = Object.fromEntries(data)

        const aux = [...carrito]

        aux.forEach(prodCarrito => {

            getProducto(prodCarrito.id).then(prodBDD => {

                prodBDD.stock -= prodCarrito.cant
                updateProducto(prodBDD.id, prodBDD)

            })

        })





        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {


            toast.success(`La compra fue realizada con éxito, su orden de compra tiene el Id ${ordenCompra.id} 
            y fue por un total de $ ${new Intl.NumberFormat('en-IN').format(totalPrice())}`)

            e.target.reset()
            emptyCart()
            navigate("/")

        })


    }

    return (

        <>
            {carrito.length === 0

                ?

                <>

                    <h2>Carrito vacío</h2>
                    <Link className="nav-link" to={"/"}><button className="btn btn-secondary">Continuar comprando</button></Link>

                </>

                :

                <div className="container contForm form-group">
                    <h2>Favor de llenar la siguiente forma para finalizar la compra</h2>
                    <form onSubmit={consultarForm} ref={datosForm}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-control" name="nombre" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" value={email} onChange={handleEmailChange} required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Repetir Email</label>
                            <input type="email" className="form-control" name="email1" value={emailConfirmation} onChange={handleEmailConfirmationChange} required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="dni" className="form-label">Documento</label>
                            <input type="number" className="form-control" name="dni" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="celular" className="form-label">Teléfono</label>
                            <input type="number" className="form-control" name="celular" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Dirección</label>
                            <input type="text" className="form-control" name="direccion" required />
                        </div>
                        <button type="submit" className="btn btn-secondary" disabled={!isFormValid()}>Finalizar compra</button>

                    </form>
                </div>

            }

        </>

    );
}

