import logoKasa from "../images/logoKasa.png";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="nav">
      <img src={logoKasa} alt="logo la kasa" />
      <nav className="nav-link">
        <NavLink
          to="/Accueil"
          className={({ isActive }) =>
            isActive ? "underline" : "notunderline"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/Apropos"
          className={({ isActive }) =>
            isActive ? "underline" : "notunderline"
          }
        >
          A propos
        </NavLink>
      </nav>
    </div>
  );
}
