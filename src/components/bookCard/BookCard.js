import "./bookCard.scss";
export const BookCard = ({ bookItem }) => {
  return (
    <li className="book-card">
      <img
        className="book-card-img"
        src={`https://book-service-layer.herokuapp.com/` + bookItem.image}
        alt={bookItem.firs_name}
        width="174"
        height="132"
      />
      <div className="book-card-box">
        <h3 className="book-card-title">{bookItem.title}</h3>
        <p className="book-card-year">
          page-
          {bookItem.page}
        </p>
        <p className="book-card-year">
          year-
          {bookItem.year}
        </p>
        <p className="book-card-year">
          price-
          {bookItem.price}
        </p>
      </div>
    </li>
  );
};
