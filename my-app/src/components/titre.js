import plage from "../images/plage.png";
import "../App.css";

export default function Titre() {
  return (
    <div className="titre">
      <img src={plage} alt=" plage" />
      <h1>Chez vous ,partout et ailleurs</h1>
    </div>
  );
}
