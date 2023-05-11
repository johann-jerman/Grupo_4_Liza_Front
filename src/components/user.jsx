
export default function User(props) {
  return (
    <>
      <h3>{props.name} {props.lastname}</h3>
      <p>{props.email}</p>
      <img src={"http://localhost:3004/images/users/" + props.image} alt="Imagen de usuario" />
      <p>Usuario creado: {props.created_at}</p>
    </>
  );
}
