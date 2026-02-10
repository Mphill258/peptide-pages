import { motion } from "framer-motion";
import { ArrowRight, FlaskConical } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden hero-gradient">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Molecular peptide structure"
          className="h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
        >
          <FlaskConical size={16} className="text-primary" />
          <span className="text-sm font-medium text-primary">
            Research-Grade Peptides
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          Precision Peptides for{" "}
          <span className="text-gradient">Advanced Research</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Lab-tested, HPLC-purified peptides with 99%+ purity. Built for
          researchers who demand excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#peptides"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] hover:brightness-110"
          >
            Browse Catalog
            <ArrowRight size={16} />
          </a>
          <a
            href="#research"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-8 py-3.5 font-display text-sm font-semibold text-secondary-foreground transition-all hover:border-primary/40"
          >
            View Research
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 grid grid-cols-3 gap-8 border-t border-border/50 pt-10 md:gap-16"
        >
          {[
            { value: "99%+", label: "Purity" },
            { value: "150+", label: "Peptides" },
            { value: "10K+", label: "Researchers" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-bold text-primary md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
