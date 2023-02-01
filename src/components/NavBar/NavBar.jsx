
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active  text-danger" aria-current="page" href="index.html">INICIO</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" aria-current="page" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ESTAMBRES
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Mandala</a></li>
                                <li><a className="dropdown-item" href="#">Wool Ease</a></li>
                                <li><a className="dropdown-item" href="#">Alaska</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" aria-current="page" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ACCESORIOS
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Agujas</a></li>
                                <li><a className="dropdown-item" href="#">Ganchillos</a></li>
                                <li><a className="dropdown-item" href="#">Marcadores de puntos</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">CONTACTO</a>
                        </li>
                    </ul>

                    <CartWidget valor={"10"}/>
                </div>
            </div>
        </nav>

    );
}

