
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { consultarBDD } from "../Utils/Funciones";
import { ItemList } from "../ItemList/ItemList";
//const prods = products.filter(prod => prod.idCategoria === parseInt(idCategoria))

export const ItemListContainer = () => {

  const { slug } = useParams()

  const [productos, setProductos] = useState([])


  useEffect(() => {

    if (slug) {

      consultarBDD('../json/productos.json').then(products => {
        const prods = products.filter(prod => prod.slug === slug)
        const items = ItemList({ prods })
        setProductos(items)
      })


    } else {

      consultarBDD('./json/productos.json').then(prods => {
        const items = ItemList({ prods })
        setProductos(items)
      })
    }


  }, [slug])


  return (

    <div className="row cardProductos">
      {productos}
    </div>

  );
};

