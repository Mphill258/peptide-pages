import { motion } from "framer-motion";
import PeptideCard from "./PeptideCard";
import retatrutideImg from "@/assets/retatrutide-pen.jpg";
import tirzepatideImg from "@/assets/tirzepatide-pen.jpg";

const peptides = [
  {
    name: "Retatrutide Pen",
    sequence: "GIP/GLP-1/Glucagon Triple Agonist",
    purity: "99.5%",
    weight: "60mg Pre-filled Pen",
    category: "Research Compound",
    price: "£200",
    image: retatrutideImg,
  },
  {
    name: "Tirzepatide (Mounjaro) Pen",
    sequence: "GIP/GLP-1 Dual Agonist",
    purity: "99.4%",
    weight: "60mg Pre-filled Pen",
    category: "Research Compound",
    price: "£170",
    image: tirzepatideImg,
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
          <span className="section-label">Product Catalogue</span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
            Research <span className="text-gradient">Compounds</span>
          </h2>
          <div className="divider-gold mt-6" />
          <p className="mt-6 text-base text-muted-foreground">
            HPLC-purified, third-party tested — for research and educational purposes only
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