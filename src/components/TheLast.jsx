import React, { useEffect, useState } from "react";
import '../style.css'
import { Link } from "react-router-dom";
import User from "./User";
import ProductDetail from "./ProductDetail";

const lastUserApi = 'http://localhost:3004/api/user/last'
const lastProductApi = 'http://localhost:3004/api/product/last'

export default function TheLast() {
  let [user, setUser] = useState();
  let [product, setProduct] = useState();

  useEffect( () =>{
    lastProduct(lastProductApi)
    lastUser(lastUserApi)
  }, [] )

  const lastUser = async (API) => {
    const res = await fetch(API)
    const data = await res.json()
    setUser(data.data)
  }
  const lastProduct = async (API) => {
    const res = await fetch(API)
    const data = await res.json()
    setProduct(data.data)
  }

  return (
    <>
        <section className="flex flex-center">
            { 
            <Link to={"/user/" + user?.id}>
                <User {...user}/>
            </Link>
            }
            {
            <Link to={`/product/${product?.id}`}>
            <article className="box">
                {/* <ProductDetail {...product}/> */}

                <h3>{product?.name}</h3>
                <p>Precio: {product?.price} - {product?.offer}% = {product?.price - product?.price * product?.offer / 100}</p>
                <p>{product?.stock}</p>
                <img className="img" src={`http://localhost:3004/images/products/${product?.image[0].image}`} alt="Imagen de producto" />
            </article>
            </Link>
            }

        </section>
    </>
  );
}
