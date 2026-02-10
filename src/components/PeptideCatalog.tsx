import { motion } from "framer-motion";
import PeptideCard from "./PeptideCard";

const peptides = [
  {
    name: "Retatrutide Pen",
    sequence: "GIP/GLP-1/Glucagon Triple Agonist",
    purity: "99.5%",
    weight: "60mg Pre-filled Pen",
    category: "Research Peptide",
    price: "£200",
  },
  {
    name: "Tirzepatide (Mounjaro) Pen",
    sequence: "GIP/GLP-1 Dual Agonist",
    purity: "99.4%",
    weight: "60mg Pre-filled Pen",
    category: "Research Peptide",
    price: "£170",
  },
];

const PeptideCatalog = () => {
  return (
    <section id="peptides" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Our <span className="text-gradient">Research Compounds</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Pre-filled, HPLC-purified, third-party tested — for research use only
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            UK delivery only · £10 shipping · Not for human consumption
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
          {peptides.map((peptide, i) => (
            <PeptideCard key={peptide.name} {...peptide} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeptideCatalog;
