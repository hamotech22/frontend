import { BrowserRouter, Route, Routes } from 'react-router';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import Navbar from '../components/Navbar';
import Main from '../pages/Layout';
import Footer from '../components/Footer';
import Contact from '../pages/Contact';
 
 export default function Router() {
   return (
     <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Error 404 || Page Not Found!!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
     </div>
   )
 }
 