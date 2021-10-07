import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Footer />
    </Router>
  );
}

export default App;
