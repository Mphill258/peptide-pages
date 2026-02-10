import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PeptideCatalog from "@/components/PeptideCatalog";
import { motion } from "framer-motion";
import { Shield, FlaskConical, FileCheck } from "lucide-react";

const trustItems = [
  { icon: FlaskConical, label: "HPLC Purified", desc: "≥99% purity verified" },
  { icon: Shield, label: "Third-Party Tested", desc: "Independent lab analysis" },
  { icon: FileCheck, label: "COA Included", desc: "Full documentation provided" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-28 md:py-36">
          <div className="absolute inset-0 hero-gradient" />
          <div className="container relative mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="section-label">Research-Grade Compounds</span>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl md:leading-tight">
                Precision Peptides for{" "}
                <span className="text-gradient">Scientific Research</span>
              </h1>
              <div className="divider-gold mt-8" />
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
                HPLC-purified compounds with full certificates of analysis,
                sourced for laboratory research and educational purposes.
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground/50">
                Not for human consumption · No medical advice provided
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mt-16 grid max-w-2xl gap-4 sm:grid-cols-3"
            >
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center rounded-lg border border-border/60 bg-card/50 px-4 py-5 text-center backdrop-blur-sm"
                >
                  <item.icon size={20} className="text-primary" />
                  <div className="mt-3 text-sm font-semibold text-foreground">{item.label}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{item.desc}</div>
                </div>
              ))}
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