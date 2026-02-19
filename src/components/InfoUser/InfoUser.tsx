import { userInterface } from "../../types";
import "./InfoUser.css";

interface propsInfoUser {
  userObj: userInterface | undefined;
  onLogout: () => void;
}

export const InfoUser = ({ userObj, onLogout }: propsInfoUser) => {
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
          EXIT
        </button>
      </div>
    </aside>
  );
};
