import { Routes, Route } from "react-router-dom";


// page components
import HomePage from "@/pages/Home/HomePage";
import AboutPage from "@/pages/About/AboutPage";
import ContactPage from "@/pages/Contact/ContactPage";
import ServicesPage from "@/pages/Services/ServicesPage";
import NotFound from "@/pages/NotFound/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services-list" element={<ServicesPage />} />

    {/* 404 page */}
      <Route path='*' element={<NotFound />} />
     
    </Routes>
  );
};

export default Router;
