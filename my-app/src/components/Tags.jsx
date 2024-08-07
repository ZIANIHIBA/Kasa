import "../App.css";
export default function Tags({ tagtitle }) {
  return (
    <div className="tag">
      {tagtitle.map((tag, index) => (
        <button className="Btntag" key={index}>
          {tag}{" "}
        </button>
      ))}
    </div>
  );
}
