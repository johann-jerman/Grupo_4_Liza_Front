import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../style.css'


export default function Product() {
    let [product, setproduct] = useState()
    let {id} = useParams()
    const API = `http://localhost:3004/api/product/detail/${id}`
    
    useEffect( () => {
        productRequest(API)
    }, [] )

    const productRequest = async (API) => {
        let res = await fetch(API)
        let data = await res.json()
        setproduct(data.data)
    }   
    

    return (
    <>
        <h1>Este es un usuario</h1>
        <h3>{product?.name}</h3>
        <p>$ {product?.price}</p>
        <p>{product?.description}</p>
        <div className='flex'>
            {
                product?.color?.map(color => {
                    return ( 
                        <p className='margin' key={color.id} >{color.color}</p>
                    )
                })
            }
        </div>
        <div className='flex'>
            {
                product?.size?.map(size => {
                    return ( 
                        <p className='margin' key={size.id} >{size.size}</p>
                    )
                })
            }
        </div>
        <div>
            {
                product?.image?.map(img => {
                    return (
                        <img className='imgP margin' key={img.id} src={`http://localhost:3004/images/products/${img.image}`} alt="User Image"/>
                    )
                })
            }
        </div>

    </>
    )
}
