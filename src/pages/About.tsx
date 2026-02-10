import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
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
                About <span className="text-gradient">Us</span>
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                We are an independent research-focused organisation dedicated to
                providing educational information and materials for lawful
                laboratory research purposes.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Our focus is on quality, accuracy, and responsible communication.
                We do not provide guidance on personal use, administration, or
                dosing, and we make no medical or therapeutic claims.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
