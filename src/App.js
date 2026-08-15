import React, { Suspense } from "react";
import Header from "./Components/Header";
import AboutPage from "./Page/AboutPage";
import Portfolio from "./Page/PortfolioPage";
import Footer from "./Components/Footer";
import HomePage from "./Page/Homepage";
import PhotoPage from "./Page/PhotoPage";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const siteProps = {
  name: "Ji Woong John Park",
  title: "Computer Science Student",
  email: "johnpark0528@gmail.com",
  gitHub: "https://github.com/jjp6315",
  instagram: "https://www.instagram.com/jw_p_17/",
  linkedIn: "https://www.linkedin.com/in/ji-woong-park-7076b51b6/",
};

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div id="main">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/photos" element={<PhotoPage />} />
          </Routes>
          <Footer {...siteProps} primaryColor="#000000" />
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
