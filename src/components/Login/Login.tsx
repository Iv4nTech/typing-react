import { useEffect } from 'react'
import './Login.css'

export const Login = () => {
    return <form action="" method="post">
        <label htmlFor="name">Nombre</label>
        <input id="name" name="name" type="text" />
        <label htmlFor="surname">Apellidos</label>
        <input id="surname" name="surname" type="text" />
        <button type='submit'>Iniciar sesión</button>
        </form>
}