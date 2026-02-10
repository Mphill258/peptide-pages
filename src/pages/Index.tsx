import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PeptideCatalog from "@/components/PeptideCatalog";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="font-display text-4xl font-bold md:text-6xl">
                Research-Focused Compounds &{" "}
                <span className="text-gradient">Educational Resources</span>
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                This website provides information and materials intended strictly
                for laboratory research and educational purposes. We operate with
                a strong emphasis on compliance, transparency, and responsible
                research practices.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                No content on this website is intended for human or veterinary
                consumption, and no medical advice is provided.
              </p>
            </motion.div>
          </div>
        </section>
        <PeptideCatalog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
