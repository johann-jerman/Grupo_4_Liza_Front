import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
        <div>Header</div>
        <Link to="/users"> <p> Estos son todos los usuarios</p> </Link>
        <Link to="/products"> <p> Estos son todos los productos</p> </Link>
        <Link to="/categories"> <p> Estos son todos las categorias</p> </Link>

    </div>
  )
}