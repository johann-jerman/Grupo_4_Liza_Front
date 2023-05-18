import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="head">
        <nav className="flex flex-betwen">
          <Link className="a" to="/"> <img className="icon" src={`http://localhost:3004/images/logoLIZA.jpg`} alt="" /> </Link>
          <Link className="a" to="/users"> <p> Estos son todos los usuarios</p> </Link>
          <Link to="/products"> <p> Estos son todos los productos</p> </Link>
          <Link to="/categories"> <p> Estos son todos las categorias</p> </Link>
        </nav>
    </header>
  )
}