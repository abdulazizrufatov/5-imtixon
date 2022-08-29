import Hero from "../../components/hero/Hero";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Nasr = () => {
  return (
    <>
      <Hero />
      <div className="container category-container">
        <h2 className="category-title">Asosiy kategoriyalar</h2>
        <ul className="category-list">
          <li className="category-item">
            <Link className="category-link" to="bookT">
              Temuriylar davri{" "}
            </Link>
          </li>
          <li className="category-item">
            <Link className="category-link" to="bookJ">
              Jadid adabiyoti{" "}
            </Link>
          </li>
          <li className="category-item">
            <Link className="category-link" to="bookS">
              Sovet davri{" "}
            </Link>
          </li>
          <li className="category-item">
            <Link className="category-link" to="bookM">
              Mustaqillik davri{" "}
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
export default Nasr;
