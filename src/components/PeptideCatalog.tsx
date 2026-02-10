import { motion } from "framer-motion";
import PeptideCard from "./PeptideCard";

const peptides = [
  {
    name: "Retatrutide Pen",
    sequence: "GIP/GLP-1/Glucagon Triple Agonist",
    purity: "99.5%",
    weight: "60mg Pre-filled Pen",
    category: "Weight Management",
    dosageInfo: {
      clicksPerMg: 4,
      doses: [
        { mg: 2, clicks: 8 },
        { mg: 4, clicks: 16 },
        { mg: 6, clicks: 24 },
        { mg: 8, clicks: 32 },
        { mg: 10, clicks: 40 },
        { mg: 12, clicks: 48 },
      ],
    },
  },
  {
    name: "Tirzepatide (Mounjaro) Pen",
    sequence: "GIP/GLP-1 Dual Agonist",
    purity: "99.4%",
    weight: "60mg Pre-filled Pen",
    category: "Weight Management",
    dosageInfo: {
      clicksPerMg: 4,
      doses: [
        { mg: 2.5, clicks: 10 },
        { mg: 5, clicks: 20 },
        { mg: 7.5, clicks: 30 },
        { mg: 10, clicks: 40 },
        { mg: 12.5, clicks: 50 },
        { mg: 15, clicks: 60 },
      ],
    },
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
            Our <span className="text-gradient">Peptide Pens</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Pre-filled, HPLC-purified, third-party tested — ready for research
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
