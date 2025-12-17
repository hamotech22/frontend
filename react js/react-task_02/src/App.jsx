import Navbar from "./components/Navbar/Navbar";
import './App.css'
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Pricing from "./components/Pricing/Pricing";



export default function App() {

  return (
    <div >
   
      <>
        <Navbar />
        <Pricing/>
        <About/>
         <Footer/>
      </>

    </div>
  );
}
