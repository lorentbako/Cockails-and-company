import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ContactUS from "./Pages/ContactUS";
import Homepage from "./Pages/Homepage";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import Services from "./Pages/Services";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUS />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
