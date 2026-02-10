import { motion } from "framer-motion";
import { Shield, Microscope, Truck, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "99%+ Purity Guaranteed",
    description:
      "Every batch is HPLC tested and verified. We provide certificates of analysis for full transparency.",
  },
  {
    icon: Microscope,
    title: "Research-Grade Quality",
    description:
      "Synthesized in ISO-certified facilities using solid-phase peptide synthesis for maximum consistency.",
  },
  {
    icon: Truck,
    title: "Fast & Discreet Shipping",
    description:
      "Temperature-controlled packaging with expedited shipping. Orders ship within 24 hours.",
  },
  {
    icon: Award,
    title: "Third-Party Tested",
    description:
      "Independent lab verification with mass spectrometry and amino acid analysis on every product.",
  },
];

const Benefits = () => {
  return (
    <section id="research" className="border-t border-border bg-muted/30 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Why <span className="text-gradient">PeptideLab</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Trusted by researchers worldwide
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
