import { KeyboardVirtual } from "./components/KeyboardVirtual/KeyboardVirtual";
import { InputText } from "./components/InputText/InputText";
import { Login } from "./components/Login/Login";
import "./App.css";
import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import type { userInterface } from "./types";
import { use, useEffect, useState } from "react";
import { InfoUser } from "./components/InfoUser/InfoUser";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [isUser, setUser] = useState<userInterface>();

  const loginSuccess = (user: userInterface) => {
    setLogin(true);
    setUser(user);
  };

  const logout = () => {
    setLogin(false);
    setUser(undefined);
  };

  return (
    <>
      {!isLogin ? (
        <div>
          <Login checkLogin={loginSuccess} />
        </div>
      ) : (
        <div>
          <InfoUser userObj={isUser} onLogout={logout} />
          <InputText userObj={isUser} />
          <KeyboardVirtual />
        </div>
      )}
    </>
  );
}

export default App;
