import "../App.css";
import { FaStar } from "react-icons/fa";

export default function Rating({ props }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="star">
      {stars.map((star) =>
        props >= star ? (
          <FaStar key={star.toString()} className="Staractive" />
        ) : (
          <FaStar key={star.toString()} className="StarInactive" />
        )
      )}
    </div>
  );
}
