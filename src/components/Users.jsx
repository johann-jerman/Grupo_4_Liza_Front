import { useEffect, useState } from "react"

const API = 'http://localhost:3004/api/user'

export default function Users() {
    let [ users, setUsers ] = useState([])

    useEffect( () => {

      userRequest(API)

    }, [] )
    
    const userRequest = async (api) => {
      let res = await fetch(api)
      let data = await res.json()
      setUsers(data)
    }

    return (
      <>
        <h3>Estos son todos los usuarios</h3>
        { users.length === 0 && <p>Cargando...</p> }
        { <p>Total de Usuarios: {users.total} </p> }
        { 
          users.data?.map( (user, i) => {
            return (
              <p key={user.name + i}> {user.name} </p>
            )
          })
        }
      </>
    )
  }