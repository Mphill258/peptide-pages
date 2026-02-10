import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PeptideCatalog from "@/components/PeptideCatalog";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <PeptideCatalog />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
