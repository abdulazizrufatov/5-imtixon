import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export const Bio = () => {
  const { name } = useParams();

  const [bioAuthor, setBioAuthor] = useState();

  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/author/genreId/${name}`)
      .then((data) => setBioAuthor(data.data))
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <>
      <h2>bio {name}</h2>
    </>
  );
};
