import { BookCard } from "../../components/bookCard/BookCard";
import axios from "axios";
import { useEffect, useState } from "react";

const BookT = () => {
  const [author, setAuthor] = useState([]);
  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/book/genreId/1")
      .then((data) => setAuthor(data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="container">
        {author.length && (
          <ul className="temuriylar-list">
            {author.map((e) => (
              <BookCard key={e.id} bookItem={e} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default BookT;
