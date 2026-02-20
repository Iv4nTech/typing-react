import { KeyboardVirtual } from "./components/KeyboardVirtual/KeyboardVirtual";
import { InputText } from "./components/InputText/InputText";
import { Login } from "./components/Login/Login";
import "./App.css";
import type { userInterface } from "./types";
import { useEffect, useState } from "react";
import { InfoUser } from "./components/InfoUser/InfoUser";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [isUser, setUser] = useState<userInterface>();

  const loginSuccess = (user: userInterface) => {
    setLogin(true);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (!data) return;
    const dataParse = JSON.parse(data);
    setUser(dataParse);
    setLogin(true);
  }, []);

  const logout = () => {
    setLogin(false);
    localStorage.removeItem("user");
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
