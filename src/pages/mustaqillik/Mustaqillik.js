import { Card } from "../../components/card/Card";
import Category from "../../components/category/Category";
import Hero from "../../components/hero/Hero";
import axios from "axios";
import { useEffect, useState } from "react";

const Mustaqillik = () => {
  const [author, setAuthor] = useState([]);
  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/author/genreId/4")
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
export default Mustaqillik;
