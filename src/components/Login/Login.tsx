import { useEffect, useRef } from "react";
import "./Login.css";
import { useState } from "react";
import { userInterface } from "../../types";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

interface propsLogin {
  checkLogin: (user: userInterface) => void;
}

export const Login = ({ checkLogin }: propsLogin) => {
  const [user, setUser] = useState<userInterface>();

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputSurnameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!inputNameRef.current || !inputSurnameRef.current) return;
    const nameInput = inputNameRef.current.value;
    const surnameInput = inputSurnameRef.current.value;
    lookUser(nameInput, surnameInput);
  };

  const lookUser = async (name: string, surname: string) => {
    try {
      const dataFirebase = await getDocs(collection(db, "users"));
      const dataReal = dataFirebase.docs.map((d) => d.data() as userInterface);
      const user = dataReal.find((u) => u.name == name && u.surname == surname);
      user ? checkLogin(user) : "";
    } catch (error) {
      console.log("Error to load data" + error);
    }
  };

  return (
    <>
      <h1 className="tittle-form">Login</h1>
      <form>
        <label htmlFor="name">Nombre</label>
        <input id="name" ref={inputNameRef} name="name" type="text" />
        <label htmlFor="surname">Apellidos</label>
        <input id="surname" ref={inputSurnameRef} name="surname" type="text" />
        <button onClick={handleSubmit} type="button">
          Iniciar sesión
        </button>
      </form>
    </>
  );
};
