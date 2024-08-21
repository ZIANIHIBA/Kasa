import Titre from "../components/Titre.js";
import Post from "../components/Post.js";
import datas from "../data/logements.json";
import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  const logements = datas.map((data) => {
    return (
      <Link to={`/Logement/${data.id}`} className="post" key={data.id}>
        <img src={data.cover} alt="lplgo" />
        <h2>{data.title}</h2>
      </Link>
    );
  });

  return (
    <>
      <Titre />
      <div>
        <Post>
          <div className="posts"> {logements} </div>
        </Post>
      </div>
    </>
  );
}
