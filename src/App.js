import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import BoshSahifa from "./pages/boshSahifa/BoshSahifa";
import Nasr from "./pages/nasr/Nasr";
import AddBook from "./pages/add/AddBook";
import Author from "./pages/addAuthor/Author";
import Temuriylar from "./pages/temuriylar/Temuriylar";
import Jadid from "./pages/jadid/Jadid";
import Sovet from "./pages/sovet/Sovet";
import Mustaqillik from "./pages/mustaqillik/Mustaqillik";
import { Bio } from "./pages/bio/Bio";
import BookJ from "./pages/bookJ/BookJ";
import BookM from "./pages/bookM/BookM";
import BookS from "./pages/bookS/BookS";
import BookT from "./pages/bookT/BookT";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BoshSahifa />} />
        <Route path="/nasr" element={<Nasr />}>
          <Route path="bookJ" element={<BookJ />} />
          <Route path="bookM" element={<BookM />} />
          <Route path="books" element={<BookS />} />
          <Route path="bookT" element={<BookT />} />
        </Route>

        <Route path="/add" element={<AddBook />} />
        <Route path="/addAuthor" element={<Author />} />
        <Route path="/temuriylar" element={<Temuriylar />} />
        <Route path="/jadid" element={<Jadid />} />
        <Route path="/sovet" element={<Sovet />} />
        <Route path="/mustaqillik" element={<Mustaqillik />} />
        <Route path="/bio/:name" element={<Bio />} />
      </Routes>
    </>
  );
}

export default App;
