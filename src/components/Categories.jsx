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
      <p>estas son todas las categorias de usuarios</p>

      {categories.data?.userCategories.map((category) => {
        return <p>{category.category}</p>;
      })}

      <p>estas son todas las categorias de productos</p>
      {categories.data?.productCategories.map((category) => {
        return <p>{category.category}</p>;
      })}
  
    </>
  );
}
