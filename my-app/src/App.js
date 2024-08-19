import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Logement from "./pages/Logement.js";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Error from "./pages/Error.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Accueil" element={<Home />} />
        <Route path="/Apropos" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
