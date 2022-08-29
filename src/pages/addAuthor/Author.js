import "./author.scss";
import { useRef } from "react";
import axios from "axios";
const Author = () => {
  const firstName = useRef("");
  const surname = useRef("");
  const birth = useRef("");
  const death = useRef("");
  const genre = useRef("");
  const bio = useRef("");
  const img = useRef("");
  const country = useRef("");

  const Author = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("first_name", firstName.current.value);
    formData.append("last_name", surname.current.value);
    formData.append("date_of_birth", birth.current.value);
    formData.append("date_of_death", death.current.value);
    formData.append("country", country.current.value);
    formData.append("genre_id", genre.current.value);
    formData.append("bio", bio.current.value);
    formData.append("image", img.current.files[0]);

    axios
      .post(`https://book-service-layer.herokuapp.com/author/`, formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    evt.innerHtml = null;
  };

  return (
    <>
      <div className="add-box author-box">
        <div className="container add-container">
          <div className="add-left">
            <input
              onSubmit={Author}
              ref={img}
              className="author-img"
              type="file"
            />
            <h3 className="add-book-name">Upload image</h3>
            <button className="add-btn">Upload cover</button>
          </div>
          <div className="add-right">
            <h2 className="add-title">Add author</h2>
            <form onSubmit={Author} className=" add-form">
              <input
                ref={firstName}
                className=" form-input"
                placeholder="First name"
                type="text"
              />
              <input
                ref={surname}
                className=" form-input"
                placeholder="Last name"
                type="text"
              />
              <input
                ref={birth}
                className=" form-input"
                placeholder="Date of birth"
                type="number"
              />
              <input
                ref={death}
                className=" form-input"
                placeholder="Date of death"
                type="text"
              />
              <input
                ref={genre}
                className=" form-input"
                placeholder="Country"
                type="number"
              />
              <input
                ref={bio}
                className=" bio-input"
                placeholder="Bio"
                type="text"
              />
              <button className="add-btn">Create</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Author;
