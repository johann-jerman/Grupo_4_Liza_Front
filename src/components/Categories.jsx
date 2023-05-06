import { useEffect, useState } from "react"

const API = 'http://localhost:3004/api/category'

export default function Categories() {
    const [ categories, setCategories ] = useState([])

    useEffect( () => {

    }, [] )
    

    return (
      <>
        <p>Estos son todos las categorias</p>
        {
          console.log(categories)
        }

      </>
    )
  }