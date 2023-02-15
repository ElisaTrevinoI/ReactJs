
import { Link } from "react-router-dom"

export const Categorias = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                CATEGORIAS
            </a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={'/category/estambres' }>ESTAMBRES</Link></li>
                <li><Link className="dropdown-item" to={'/category/accesorios' }>ACCESORIOS</Link></li>
                <li><Link className="dropdown-item" to={'/category/patrones' }>PATRONES</Link></li>
            </ul>
        </li>
    )
}