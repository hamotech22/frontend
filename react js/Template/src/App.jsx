
import Router from "./router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // استايلات AOS

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الانميشن بالميلي ثانية
      easing: "ease-in-out",
      once: true, // الانميشن يظهر مرة واحدة فقط عند scroll
    });
  }, []);

  return (
    <>
      <Router />
    </>
  );
}


// export default App;
