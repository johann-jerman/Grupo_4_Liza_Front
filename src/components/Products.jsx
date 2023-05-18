import { useEffect, useState } from "react"
import ProductDetail from "./ProductDetail"
import { Link } from "react-router-dom"
import '../style.css'

const API = 'http://localhost:3004/api/product'

export default function Products() {
    const [ products, setProducts ] = useState([]) 

    useEffect( () => {
      
      productRequest(API)
      
    }, [] )

    const productRequest = async (API) => {
      let res = await fetch(API)
      let data = await res.json()
      setProducts(data)
    }

    return (
      <>
        <h3>Estos son todos los productos</h3>
        {products.length == 0 && <p>Cargando la chucha ...</p>}
        { <p>Total de Productos: {products.total} </p> }
        <section className="flex">
        {products.data?.map( (product, i) => {
            return (
              <Link to={`/product/${product.id}`} key={product.id + i}>
                <ProductDetail {...product}/>
              </Link>
            )
          })
        }
        </section>
      </>
    )
  }