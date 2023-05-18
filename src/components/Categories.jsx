import { useEffect, useState } from "react";

const API = "http://localhost:3004/api/category";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryRequest(API);
  }, []);

  const categoryRequest = async (API) => {
    let rest = await fetch(API);
    let data = await rest.json();
    setCategories(data);
  };
  return (
    <>
      <p>Estos son todos las categorias</p>
      <p>Estas son todas las categorias de usuarios</p>
      <p>Total de categorias de usuario: {categories.data?.userCategories.length}</p>
      {categories.data?.userCategories.map((category, i) => {
        return <p  key={i + category.category}>{category.category}</p>;
      })}

      <p>Estas son todas las categorias de productos</p>
      <p>Total de categorias de productos: {categories.data?.productCategories.length}</p>
      {categories.data?.productCategories.map((category, i) => {
        return <p key={i + category.category}>{category.category}</p>;
      })}
  
    </>
  );
}
