import "./header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import userLogo from "../../assets/images/user-avatar.png";
const Header = (props) => {
  let [check, setCheck] = useState(false);
  const userHandler = () => {
    setCheck(!check);
  };
  return (
    <header className="header">
      <div className="container header-container">
        <Link className="site-logo" to="#">
          Badiiyat
        </Link>
        <ul className="header-list">
          <li className="header-title">
            <Link className="header-title-link" to="/">
              Bosh sahifa
            </Link>
          </li>
          <li className="header-title">
            <Link className="header-title-link" to="/nasr">
              Nasr
            </Link>
          </li>
          <li className="header-title">
            <Link className="header-title-link" to="">
              Nazm
            </Link>
          </li>
          <li className="header-title">
            <Link className="header-title-link" to="">
              Maqolalar
            </Link>
          </li>
          <li className="header-title">
            <Link className="header-title-link" to="">
              Forum
            </Link>
          </li>
        </ul>
        <div className="user-wrapper position-relative">
          <div className="header__btns d-flex align-items-center">
            <button
              className="disableBtn header__btns d-flex align-items-center"
              onClick={userHandler}
              disabled={props.isTrue}
            >
              <button className="header__user-btn">
                <img src={userLogo} alt="user" />
              </button>
              <button className="header__arrow-btn d-flex align-items-center">
                <i class="bx bx-chevron-down"></i>
              </button>
            </button>
          </div>
          <div
            className="userModal"
            style={{ display: check ? "block" : "none" }}
          >
            <ul className="user-list">
              <Link to={"/profile"} className={"tdn-none"}>
                <li className="user-item d-flex align-items-center">
                  <i class="bx bx-user-circle"></i>
                  Profile
                </li>
              </Link>
              <Link to={"/setting"} className={"tdn-none"}>
                <li className="user-item d-flex align-items-center">
                  <i class="bx bxs-cog"></i>
                  Setting
                </li>
              </Link>
              <Link to={"/add"} className={"tdn-none"}>
                <li className="user-item d-flex align-items-center">
                  <i class="bx bxs-cog"></i>
                  Add Book
                </li>
              </Link>
              <Link to={"/addAuthor"} className={"tdn-none"}>
                <li className="user-item d-flex align-items-center">
                  <i class="bx bxs-cog"></i>
                  Add Author
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
