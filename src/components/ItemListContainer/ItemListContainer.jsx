
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../Utils/Firebase";
import { ItemList } from "../ItemList/ItemList";
//const prods = products.filter(prod => prod.idCategoria === parseInt(idCategoria))

export const ItemListContainer = () => {

  const { slug } = useParams()

  const [productos, setProductos] = useState([])


  useEffect(() => {

    if ((slug === 'estambres') || (slug === 'accesorios') || (slug === 'patrones')) {

      getProductos().then(products => {
        const prods = products.filter(prod => prod.stock > 0).filter(prod => prod.slug === slug)
        const items = <ItemList prods={prods} plantilla="Item" />
        setProductos(items)
      })


    } else {

      getProductos().then(products => {
        const prods = products.filter(prod => prod.stock > 0)
        const items = <ItemList prods={prods} plantilla="Item" />
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

