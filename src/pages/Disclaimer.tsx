import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const disclaimerPoints = [
  "Not for human or veterinary consumption",
  "No medical, diagnostic, or therapeutic claims are made",
  "No dosing, administration, or personal use guidance is provided",
  "Content is not intended to replace professional medical advice",
  "All materials are for lawful in-vitro research use only",
];

const Disclaimer = () => {
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
              <span className="section-label">Legal Notice</span>
              <h1 className="mt-6 font-display text-4xl font-bold md:text-6xl">
                Research Use{" "}
                <span className="text-gradient">Disclaimer</span>
              </h1>
              <div className="divider-gold mt-8" />
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                All products and information provided on this website are
                intended strictly for laboratory research and educational
                purposes only.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-14 max-w-2xl rounded-xl border border-border/60 bg-card p-6 md:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                  <AlertTriangle size={18} className="text-primary" />
                </div>
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Important Notice
                </h2>
              </div>

              <ul className="space-y-4">
                {disclaimerPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground/60"
            >
              By accessing this website, you acknowledge and agree that all
              materials are used at your own discretion and solely for lawful
              research purposes.
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;