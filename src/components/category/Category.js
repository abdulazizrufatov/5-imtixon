import "./category.scss";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="container category-container">
      <h2 className="category-title">Asosiy kategoriyalar</h2>
      <ul className="category-list">
        <li className="category-item">
          <Link className="category-link" to="/temuriylar">
            Temuriylar davri{" "}
          </Link>
        </li>
        <li className="category-item">
          <Link className="category-link" to="/jadid">
            Jadid adabiyoti{" "}
          </Link>
        </li>
        <li className="category-item">
          <Link className="category-link" to="/sovet">
            Sovet davri{" "}
          </Link>
        </li>
        <li className="category-item">
          <Link className="category-link" to="/mustaqillik">
            Mustaqillik davri{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Category;
