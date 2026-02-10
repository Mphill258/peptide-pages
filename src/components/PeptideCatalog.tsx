import { motion } from "framer-motion";
import PeptideCard from "./PeptideCard";

const peptides = [
  {
    name: "BPC-157",
    sequence: "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val",
    purity: "99.2%",
    weight: "1419.5 Da",
    category: "Recovery",
  },
  {
    name: "TB-500",
    sequence: "Ac-Ser-Asp-Lys-Pro",
    purity: "99.5%",
    weight: "4963 Da",
    category: "Tissue Repair",
  },
  {
    name: "CJC-1295",
    sequence: "Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Gln-Ser-Tyr-Arg-Lys-Val-Leu-Ala",
    purity: "99.1%",
    weight: "3367.9 Da",
    category: "Growth Hormone",
  },
  {
    name: "PT-141",
    sequence: "Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-OH",
    purity: "99.4%",
    weight: "1025.2 Da",
    category: "Melanocortin",
  },
  {
    name: "Ipamorelin",
    sequence: "Aib-His-D-2Nal-D-Phe-Lys-NH2",
    purity: "99.3%",
    weight: "711.9 Da",
    category: "Growth Hormone",
  },
  {
    name: "GHK-Cu",
    sequence: "Gly-His-Lys-Cu",
    purity: "98.9%",
    weight: "403.9 Da",
    category: "Skin & Hair",
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
            Featured <span className="text-gradient">Peptides</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            HPLC-purified, third-party tested, ready for research
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {peptides.map((peptide, i) => (
            <PeptideCard key={peptide.name} {...peptide} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeptideCatalog;
