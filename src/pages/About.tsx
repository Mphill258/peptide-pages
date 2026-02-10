import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Microscope, Scale, BookOpen } from "lucide-react";

const values = [
  {
    icon: Microscope,
    title: "Research Focus",
    description:
      "Every compound we supply is intended strictly for in-vitro laboratory research and educational study.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "HPLC-purified to ≥99% with certificates of analysis from independent third-party laboratories.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description:
      "We operate with full transparency and adhere to all applicable UK regulations governing research materials.",
  },
  {
    icon: BookOpen,
    title: "Educational Integrity",
    description:
      "All compound information is sourced from peer-reviewed publications and verified clinical data.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <section className="py-28">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="section-label">Who We Are</span>
              <h1 className="mt-6 font-display text-4xl font-bold md:text-6xl">
                About <span className="text-gradient">Omega Peptides</span>
              </h1>
              <div className="divider-gold mt-8" />
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                We are an independent research-focused organisation based in the
                United Kingdom, dedicated to providing high-purity compounds and
                accurate scientific information for lawful laboratory research.
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground/80">
                We do not provide guidance on personal use, administration, or
                dosing, and we make no medical or therapeutic claims whatsoever.
              </p>
            </motion.div>

            <div className="mx-auto mt-20 grid max-w-4xl gap-6 sm:grid-cols-2">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group rounded-xl border border-border/60 bg-card p-6 transition-all hover:border-primary/20 hover:shadow-[var(--shadow-glow)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                    <value.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;