import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import Components from "./pages/Components";

// Component pages
import Button from "./pages/components/Button";
import Card from "./pages/components/Card";
import CTA from "./pages/components/CTA";
import Accordion from "./pages/components/Accordion";
import FeaturesPage from "./pages/components/Features";
import Form from "./pages/components/Form";
import NavbarNew from "./pages/components/Navbar";
import Slider from "./pages/components/Slider";
import FooterComponent from "./pages/components/Footer"; // Avoid conflict with main Footer
import Uis from "./pages/Uis";
import TableShowcase from "./pages/components/Table";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-[#020202e1] dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/explore-ui" element={<Uis />} />

            {/* Components route with nested pages */}
            <Route path="/components" element={<Components />}>
              <Route path="button" element={<Button />} />
              <Route path="card" element={<Card />} />
              <Route path="form" element={<Form />} />
              <Route path="accordion" element={<Accordion />} />
              <Route path="slider" element={<Slider />} />
              <Route path="cta" element={<CTA />} />
              <Route path="features" element={<FeaturesPage />} />
              <Route path="navbar-new" element={<NavbarNew />} />
              <Route path="footer" element={<FooterComponent />} />
              <Route path="table" element={<TableShowcase/>}/>
              {/* Add more component pages here */}
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
