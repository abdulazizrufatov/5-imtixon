import "./card.scss";
import { Link } from "react-router-dom";
export const Card = ({ item }) => {
  return (
    <li className="card">
      <Link to={"/bio/" + item.id}>
        <img
          className="card-img"
          src={`https://book-service-layer.herokuapp.com/` + item.image}
          alt={item.firs_name}
          width="174"
          height="132"
        />
        <div className="card-box">
          <h3 className="card-title">
            {item.first_name}
            <span className="card-span">{item.last_name}</span>
          </h3>
          <p className="card-year">
            {item.date_of_birth}-{item.date_of_death}
          </p>
        </div>
      </Link>
    </li>
  );
};
