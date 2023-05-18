import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function UserDetail() {
    let [user, setUser] = useState()
    let {id} = useParams()
    const API = `http://localhost:3004/api/user/${id}`
    
    useEffect( () => {
        userRequest(API)
    }, [] )

    const userRequest = async (API) => {
        let res = await fetch(API)
        let data = await res.json()
        setUser(data.data)
    }

    return (
    <>
        <h1>Este es un usuario</h1>
        <h3>{user?.name} {user?.lastname}</h3>
        <p>{user?.email}</p>
        <img className="img" src={`http://localhost:3004/images/users/${user?.image}`} alt="User Image"/>

    </>
    )
}