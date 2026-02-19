import { KeyboardVirtual } from "./components/KeyboardVirtual/KeyboardVirtual"
import { InputText } from "./components/InputText/InputText"
import { Login } from "./components/Login/Login"
import './App.css'
import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import type { userInterface } from "./types"
import { useEffect, useState } from "react";

function App() {
    
    const [user, setUser] = useState<userInterface>();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const dataFirebase = await getDocs(collection(db, "users"))
  
           const dataObj = dataFirebase.docs.map((doc) => {
            console.log(doc.data());
          })
        } catch (error) {
          console.log('Error to load data' + error);
        }
      }

      fetchData();

    }, [])

    return <>
    <div>
      { user &&  <p>{user.name}</p>}
      <Login />
    </div>
    </>


}

export default App
