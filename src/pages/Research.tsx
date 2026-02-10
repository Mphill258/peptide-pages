import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Research = () => {
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
                Research <span className="text-gradient">Focus</span>
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                All information and materials referenced on this website are
                intended strictly for laboratory research and educational use
                only.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We do not discuss personal use, administration methods, or
                dosage. All enquiries must relate solely to lawful research or
                wholesale matters.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
