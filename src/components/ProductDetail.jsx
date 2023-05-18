import React from 'react'
import '../style.css'

export default function ProductDetail(props) {
  return (
    <div className='margin'>
        <h3 className='title'>Nombre: {props.name}</h3>
        <img className='imgP' src={`http://localhost:3004/images/products/${props.image[0].image}`} alt="Imagen de Producto" />
    </div>
  )
}
