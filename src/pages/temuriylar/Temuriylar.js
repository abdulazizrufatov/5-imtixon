import { useEffect, useState } from "react";
import { Card } from "../../components/card/Card";
import axios from "axios";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import "./temuriylar.scss";
const Temuriylar = () => {
  const [author, setAuthor] = useState([]);
  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/author/genreId/1")
      .then((data) => setAuthor(data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Hero />
      <Category />
      <div className="container">
        {author.length && (
          <ul className="temuriylar-list">
            {author.map((e) => (
              <Card key={e.id} item={e} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default Temuriylar;
