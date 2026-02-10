import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";

const compounds = [
  {
    name: "Retatrutide (LY-3437943)",
    type: "GIP/GLP-1/Glucagon Triple Receptor Agonist",
    description:
      "Retatrutide is a novel investigational peptide developed by Eli Lilly. It is the first triple incretin receptor agonist, acting simultaneously on GIP, GLP-1, and glucagon receptors. Published Phase 2 clinical trial data (NEJM, 2023) demonstrated statistically significant reductions in body weight among participants. It is currently being evaluated in Phase 3 trials.",
    details: [
      { label: "Developer", value: "Eli Lilly and Company" },
      { label: "Mechanism", value: "Triple agonist — GIP, GLP-1 & glucagon receptors" },
      { label: "Molecular type", value: "Synthetic peptide" },
      { label: "Clinical stage", value: "Phase 3 (as of 2024)" },
      { label: "CAS Number", value: "2381089-83-2" },
    ],
  },
  {
    name: "Tirzepatide (Mounjaro)",
    type: "GIP/GLP-1 Dual Receptor Agonist",
    description:
      "Tirzepatide is a dual GIP and GLP-1 receptor agonist developed by Eli Lilly. It was approved by the FDA in May 2022 and by the MHRA in the UK. Published data from the SURMOUNT and SURPASS clinical trial programmes demonstrated significant effects on glycaemic control and body weight. It is the first dual incretin approved for clinical use.",
    details: [
      { label: "Developer", value: "Eli Lilly and Company" },
      { label: "Mechanism", value: "Dual agonist — GIP & GLP-1 receptors" },
      { label: "Molecular type", value: "Synthetic peptide (39 amino acids)" },
      { label: "Approval", value: "FDA approved May 2022; MHRA approved" },
      { label: "CAS Number", value: "2023788-19-2" },
    ],
  },
];

const Research = () => {
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
                Research <span className="text-gradient">Focus</span>
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                All information and materials referenced on this website are
                intended strictly for laboratory research and educational use
                only.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We do not discuss personal use, administration methods, or
                dosage. All enquiries must relate solely to lawful research or
                wholesale matters.
              </p>
            </motion.div>

            <div className="mx-auto mt-20 max-w-3xl space-y-10">
              {compounds.map((compound, i) => (
                <motion.div
                  key={compound.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-border bg-card p-6 md:p-8"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <FlaskConical size={18} className="text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-card-foreground">
                        {compound.name}
                      </h2>
                      <p className="font-mono text-xs tracking-wider text-primary">
                        {compound.type}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {compound.description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {compound.details.map((detail) => (
                      <div
                        key={detail.label}
                        className="rounded-lg border border-border bg-secondary/50 px-4 py-2.5"
                      >
                        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                          {detail.label}
                        </div>
                        <div className="mt-0.5 text-sm font-medium text-card-foreground">
                          {detail.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-[10px] text-muted-foreground">
                    Information sourced from published literature. For in-vitro research and educational purposes only. Not for human consumption.
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

export default Research;