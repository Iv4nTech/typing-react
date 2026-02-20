import { useEffect, useRef } from "react";
import "./Login.css";
import { useState } from "react";
import { userInterface } from "../../types";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import type { player } from "../../types";

interface propsLogin {
  checkLogin: (user: userInterface) => void;
}

export const Login = ({ checkLogin }: propsLogin) => {
  const [user, setUser] = useState<userInterface>();
  const [isLogin, setLogin] = useState(true);
  const [isRegister, setRegister] = useState(false);

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputSurnameRef = useRef<HTMLInputElement>(null);
  const inputAgeRef = useRef<HTMLInputElement>(null);
  const typePlayerRef = useRef<HTMLSelectElement>(null);

  const register = () => {
    if (
      !inputNameRef.current?.value ||
      !inputSurnameRef.current?.value ||
      !inputAgeRef.current?.value ||
      !typePlayerRef.current?.value
    )
      return;
    const name = inputNameRef.current.value;
    const surname = inputSurnameRef.current.value;
    const age = inputAgeRef.current.value;
    const typePlayer = typePlayerRef.current.value;
    const allowedTypes = ["pro", "noob", "ninja"];
    if (!allowedTypes.includes(typePlayer)) {
      console.log("Type player no exist!");
      return;
    }

    const objUser: userInterface = {
      id: "delete",
      name: name,
      surname: surname,
      age: Number(age),
      typePlayer: typePlayer as player,
      sessions_max: 0,
    };

    const checkUserExist = async (user: userInterface) => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as userInterface[];
        const userDuplicate = data.find(
          (u) => objUser.name == u.name && user.surname == user.surname,
        );
        if (userDuplicate) {
          console.error("User have account!");
        } else {
          registerFirebase(objUser);
          console.log("Data send firebase correct!");
          setRegister(true);
          setLogin(true);
          setTimeout(() => {
            setRegister(false);
          }, 5000);
        }
      } catch (error) {
        console.log("Error: Get failed to firebase user");
      }
    };

    checkUserExist(objUser);
    const registerFirebase = async (newItem: userInterface) => {
      const { id, ...dataToSave } = newItem;
      try {
        const docRef = await addDoc(collection(db, "users"), dataToSave);
      } catch (error) {
        console.log("Fail to send data to firebase" + error);
      }
    };
  };

  const changeRegister = () => {
    setLogin(false);
  };

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
      {isLogin ? (
        <>
          <h1 className="tittle-form">Login</h1>
          <form>
            <label htmlFor="name">Nombre</label>
            <input id="name" ref={inputNameRef} name="name" type="text" />
            <label htmlFor="surname">Apellidos</label>
            <input
              id="surname"
              ref={inputSurnameRef}
              name="surname"
              type="text"
            />
            <button onClick={handleSubmit} type="button">
              Iniciar sesión
            </button>
            <button onClick={changeRegister} type="button">
              Crear cuenta
            </button>
          </form>
        </>
      ) : (
        <>
          <h1 className="tittle-form">Registrarse</h1>{" "}
          <form>
            <label htmlFor="name">Nombre</label>
            <input id="name" ref={inputNameRef} name="name" type="text" />
            <label htmlFor="surname">Apellidos</label>
            <input
              id="surname"
              ref={inputSurnameRef}
              name="surname"
              type="text"
            />
            <label htmlFor="age">Edad</label>
            <input id="age" ref={inputAgeRef} name="age" type="number" />
            <label htmlFor="typePlayer">Tipo de jugador:</label>
            <select ref={typePlayerRef} name="typePlayer" id="typePlayer">
              <option value="noob">Noob</option>
              <option value="pro">Pro</option>
              <option value="ninja">Ninja</option>
            </select>
            <button onClick={register} type="button">
              Registarse
            </button>
          </form>
        </>
      )}
    </>
  );
};
