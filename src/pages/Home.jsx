// src/pages/Home.jsx
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import About from "../components/About";
import Features from "../components/Features";   // (new section example)
import CTA from "../components/CTA";             // Call to Action

export default function Home() {
  return (
    <div>
      <Hero />
      <Slider />
      <About />
      <Features />
      <CTA />
    </div>
  );
}
