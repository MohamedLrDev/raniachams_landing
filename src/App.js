import AboutUs from "./components/AboutUs";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Products from "./components/Products";
import Advantages from "./components/Advantages";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <AboutUs />
      <Products />
      <Advantages />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
