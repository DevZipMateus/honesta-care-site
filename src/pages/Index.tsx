import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TaxCalculator from "@/components/TaxCalculator";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <TaxCalculator />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
