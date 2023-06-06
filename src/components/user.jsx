
import '../style.css'
export default function User(props) {
  return (
    <div className='box user'>
      <h3 className='title'>{props.name} {props.lastname}</h3>
      <p className='title'>{props.email}</p>
      <p className='title'>Usuario Creado: {props.created_at}</p>
      <img className='img' src={"http://localhost:3004/images/users/" + props.image} alt="Imagen de usuario" />
    </div>
  );
}
