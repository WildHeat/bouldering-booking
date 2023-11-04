import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NoPage from "./components/NoPage/NoPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ClimbPage from "./components/ClimbPage/ClimbPage";
import EventsPage from "./components/EventsPage/EventsPage";
import FaqPage from "./components/FaqPage/FaqPage";
import ContactPage from "./components/ContactPage/ContactPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/climb" element={<ClimbPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
