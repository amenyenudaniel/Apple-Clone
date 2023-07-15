import React from "react";
import "./App.css";

import Navbar from "./containers/navbar/Navbar";
import Header from "./containers/header/Header";
import Main from "./containers/main/Main";
import Aboutus from "./containers/aboutus/Aboutus";
import Footer from "./containers/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Aboutus />
      <Footer />
    </div>
  );
};

export default App;
