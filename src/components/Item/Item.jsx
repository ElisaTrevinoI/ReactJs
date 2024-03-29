
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
    return (
        <div className="card mb-3 cardProducto border-light" >
            <img src={item.img} className="card-img-top" alt={`imagen de ${item.nombre}`} />
            <div className="card-body cardBody"><h5 className="card-title">{item.nombre} {item.modelo}</h5>
                <p className="card-text">{item.marca}</p>
                <p className="card-text">${new Intl.NumberFormat('en-IN').format(item.precio)}</p>
                <Link className="nav-link" to={`/item/${item.id}`}><button className="btn btn-secondary">Ver Producto</button>
                </Link>
            </div>
        </div>
    );
}

