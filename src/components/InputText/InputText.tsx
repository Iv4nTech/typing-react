import {
  ChangeEvent,
  ReactNode,
  use,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { phrases } from "../../phrases.ts";
import "./InputText.css";
import { userInterface } from "../../types.ts";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase.ts";

interface propsInputText {
  userObj: userInterface | undefined;
}

export const InputText = ({ userObj }: propsInputText) => {
  const [lettersInput, setLettersInput] = useState<string[]>([]);
  const [pharase, setPharase] = useState(
    phrases[Math.floor(Math.random() * phrases.length)].split(""),
  );

  const [session, setSession] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleBlur = () => inputRef.current?.focus();
  const handleChange = (event: any) => {
    const lastLetter = event.target.value[event.target.value.length - 1];
    setLettersInput((prev) => [...prev, lastLetter]);
  };

  const keyMaxSessions = "max_sessions";
  const saveMaxSessions = (numSessions: number) => {
    const max_session = localStorage.getItem(keyMaxSessions);
    (Number(max_session) < numSessions || !max_session) &&
      localStorage.setItem(keyMaxSessions, numSessions.toString());

    if (Number(max_session) < numSessions || !max_session) {
      const updateSessionDB = async () => {
        try {
          const user = (await getDocs(collection(db, "users"))).docs.find(
            (u) =>
              u.data().name == userObj?.name &&
              u.data().surname == userObj?.surname,
          );

          if (!user) {
            return;
          }

          const userID = user.id;

          const pointUser = doc(db, "users", userID);

          await updateDoc(pointUser, {
            sessionsMax: max_session,
          });

          console.log("Update session max user");
        } catch (error) {
          console.log("Error: Update to session to db failed");
        }
      };
      updateSessionDB();
    }
  };

  useEffect(() => {
    const loadMaxSession = async () => {
      try {
        const user = (await getDocs(collection(db, "users"))).docs.find(
          (u) =>
            u.data().name == userObj?.name &&
            u.data().surname == userObj?.surname,
        );

        setSession(Number(user?.data().sessionsMax));

        console.log("Load count sessions user");
      } catch (error) {
        console.log("Error: Load to count session to db failed");
      }
    };
    loadMaxSession();
  }, []);

  useEffect(() => {
    const resetPharase = () => {
      console.log("Cambio de frase");
      setPharase(phrases[Math.floor(Math.random() * phrases.length)].split(""));
      const letters = document.querySelectorAll("span");
      letters.forEach((letter) => {
        letter.classList.remove("correct");
        letter.classList.remove("incorrect");
      });
      if (!inputRef.current) return;
      inputRef.current.value = "";
      setLettersInput([]);
      setSession((prev) => {
        saveMaxSessions(prev + 1);
        return prev + 1;
      });
    };

    const paintLetter = (correct: boolean, index: number) => {
      const letterDom = document.getElementById(index.toString());
      correct
        ? letterDom?.classList.add("correct")
        : letterDom?.classList.add("incorrect");
    };

    inputRef.current?.focus();
    const lastIndex = lettersInput.length - 1;

    pharase[lastIndex] == lettersInput[lastIndex]
      ? paintLetter(true, lastIndex)
      : paintLetter(false, lastIndex);

    pharase.length == lettersInput.length &&
      pharase.length > 0 &&
      resetPharase();
  }, [lettersInput]);

  console.log(lettersInput);

  return (
    <div className="container">
      <p className="info-session">
        Sesiones hechas:<span className="number-session">{session}</span>
      </p>
      <div className="text-area">
        {pharase.map((p, index): ReactNode => {
          return (
            <span key={index} id={index.toString()}>
              {p}
            </span>
          );
        })}
      </div>
      <input
        onBlur={handleBlur}
        onChange={handleChange}
        ref={inputRef}
        type="text"
      />
    </div>
  );
};
