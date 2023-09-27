import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NoPage from "./components/NoPage/NoPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ClimbPage from "./components/ClimbPage/ClimbPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/climb" element={<ClimbPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
