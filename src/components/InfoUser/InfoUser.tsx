import type { userInterface } from "../../types";
import "./InfoUser.css";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

interface propsInfoUser {
  userObj: userInterface | undefined;
  onLogout: () => void;
}

export const InfoUser = ({ userObj, onLogout }: propsInfoUser) => {
  const getIDUser = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as userInterface[];

      const user = data.find(
        (u) => u.name == userObj?.name && u.surname == userObj?.surname,
      );
      if (user) {
        deleteAccount(user.id);
      }
    } catch (error) {
      console.error("No get id user!");
    }
  };

  const handleDeleteAccount = () => {
    getIDUser();
  };

  const deleteAccount = async (id: string) => {
    try {
      if (!id) return;
      await deleteDoc(doc(db, "users", id));
      onLogout();
      console.log("Account delete correct to firebase!");
    } catch (error) {
      console.error("Failed to delete user to firebase!" + error);
    }
  };

  if (!userObj) return null;
  const initial = userObj.name ? userObj.name.charAt(0).toUpperCase() : "?";

  return (
    <aside className="info-user-mini-sidebar">
      <div className="info-user-mini-card">
        <div className="info-header-row">
          <div className="mini-avatar">{initial}</div>
          <div className="mini-details">
            <p className="mini-name">{userObj.name}</p>
            <p className="mini-surname">{userObj.surname}</p>
          </div>
        </div>

        <button className="mini-logout-button" onClick={onLogout}>
          Cerrar sesión
        </button>
        <button className="mini-logout-button" onClick={handleDeleteAccount}>
          Delete account
        </button>
      </div>
    </aside>
  );
};
