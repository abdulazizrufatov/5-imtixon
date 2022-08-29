import "./hero.scss";
const Hero = (setAuthor) => {
  const handleForm = (evt) => {
    evt.preventDefault();
    let value = evt.target[0].value;
    fetch(
      `https://book-service-layer.herokuapp.com/author/search?author=${value}`
    )
      .then((res) => res.json())
      .then((data) => setAuthor(data));
    evt.target[0].value = null;
  };
  return (
    <div className="container hero-container">
      <div className="hero">
        <h1 className="hero-heading">Temuriylar davri adabiyoti</h1>
      </div>
      <div className="hero-form">
        <h3 className="hero-form-title">Qidirish</h3>
        <div className="form-box">
          <form onSubmit={handleForm}>
            <input
              className="hero-input"
              type="search"
              placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
            />
            <button className="hero-btn">Izlash</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Hero;
