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
import ScrollPage from "./components/ScrollPage/ScrollPage";
import EventViewPage from "./components/EventViewPage/EventViewPage";
import LoggedIn from "./components/LoggedIn/LoggedIn";
import EditEventPage from "./components/EditEventPage/EditEventPage";
import CreateEventPage from "./components/CreateEventPage/CreateEventPage";
import MyEventsPage from "./components/MyEventsPage/MyEventsPage";
import AccountPage from "./components/AccountPage/AccountPage";
import RegisterAdminPage from "./components/RegisterAdminPage/RegisterAdminPage";
import PrivateRouteAdmin from "./components/PrivateRoute/PrivateRouteAdmin";
import PrivateRouteUser from "./components/PrivateRoute/PrivateRouteUser";
import PrivateRouteNotUser from "./components/PrivateRoute/PrivateRouteNotUser";
import BookingCompletePage from "./components/BookingCompletePage/BookingCompletePage";

function App() {
  return (
    <BrowserRouter>
      <ScrollPage />
      <LoggedIn />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/climb" element={<ClimbPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventViewPage />} />
        <Route
          path="/events/:id/edit"
          element={
            <PrivateRouteAdmin>
              <EditEventPage />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/events/create"
          element={
            <PrivateRouteAdmin>
              <CreateEventPage />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/my-events"
          element={
            <PrivateRouteUser>
              <MyEventsPage />
            </PrivateRouteUser>
          }
        />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/login"
          element={
            <PrivateRouteNotUser>
              <LoginPage />
            </PrivateRouteNotUser>
          }
        />
        <Route
          path="/register"
          element={
            <PrivateRouteNotUser>
              <RegisterPage />
            </PrivateRouteNotUser>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRouteUser>
              <AccountPage />
            </PrivateRouteUser>
          }
        />
        <Route
          path="/booking-completed"
          element={
            <PrivateRouteUser>
              <BookingCompletePage />
            </PrivateRouteUser>
          }
        />
        <Route
          path="/register-admin"
          element={
            <PrivateRouteAdmin>
              <RegisterAdminPage />
            </PrivateRouteAdmin>
          }
        />

        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
