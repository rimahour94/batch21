import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import ProtectRouting from "./ProtectRouting";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <ProtectRouting>
              <Home />
            </ProtectRouting>
          }
        />
        <Route
          path="/aboutus"
          element={
            <ProtectRouting>
              <AboutUs />
            </ProtectRouting>
          }
        />
        <Route
          path="/contactus"
          element={
            <ProtectRouting>
              <ContactUs />
            </ProtectRouting>
          }
        />
        <Route path="*" element={<h2>Page Not found</h2>} />
      </Routes>
    </Router>
  );
}
export default Routing;
