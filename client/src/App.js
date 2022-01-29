import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "./components";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Footer />
      <Helmet>
        <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
      </Helmet>
      ;
    </div>
  );
};

export default App;
