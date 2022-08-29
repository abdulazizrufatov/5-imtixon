import "./add.scss";

const AddBook = () => {
  return (
    <>
      <div className="add-box">
        <div className="container add-container">
          <div className="add-left">
            <input className="add-img" type="file" />
            <h3 className="add-book-name">Ulugbek hazinasi</h3>
            <button className="add-btn">Upload cover</button>
          </div>
          <div className="add-right">
            <h2 className="add-title">Add book</h2>
            <form className=" add-form">
              <input className=" form-input" placeholder="Title" type="text" />
              <input
                className=" form-input"
                placeholder="Pages"
                type="number"
              />
              <input className=" form-input" placeholder="Year" type="number" />
              <input className=" form-input" placeholder="Price" type="text" />
              <input className=" form-input" placeholder="id" type="id" />
              <input className=" form-input" placeholder="Author" type="text" />
              <input className="bio-input" type="text" />
              <button className="add-btn">Create</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddBook;
