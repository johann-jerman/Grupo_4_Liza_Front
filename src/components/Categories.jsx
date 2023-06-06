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
      <p className="text-center fsize-18">Estos son todos las categorias</p>
      <div className="flex flex-center">
        <div className="margin-t">
          <p className="fsize-18">Estas son todas las categorias de usuarios</p>
          <p className="fsize-18">Total de categorias de usuario: {categories.data?.userCategories.length}</p>
          {categories.data?.userCategories.map((category, i) => {
            return <p className="fsize-16"  key={i + category.category}>{category.category}</p>;
          })}
        </div>

        <div>
          <p className="fsize-18">Estas son todas las categorias de productos</p>
          <p className="fsize-18">Total de categorias de productos: {categories.data?.productCategories.length}</p>
          {categories.data?.productCategories.map((category, i) => {
            return <p className="fsize-16" key={i + category.category}>{category.category}</p>;
          })}
        </div>
      </div>
  
    </>
  );
}
