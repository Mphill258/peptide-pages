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
        <section className="py-28">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="section-label">Scientific Data</span>
              <h1 className="mt-6 font-display text-4xl font-bold md:text-6xl">
                Research <span className="text-gradient">Profiles</span>
              </h1>
              <div className="divider-gold mt-8" />
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                Compound information sourced from peer-reviewed publications and
                regulatory filings. For laboratory research and educational use only.
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground/50">
                We do not discuss personal use, dosing, or administration
              </p>
            </motion.div>

            <div className="mx-auto mt-20 max-w-3xl space-y-8">
              {compounds.map((compound, i) => (
                <motion.div
                  key={compound.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-border/60 bg-card p-6 md:p-8"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                      <FlaskConical size={18} className="text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-card-foreground">
                        {compound.name}
                      </h2>
                      <p className="font-mono text-[11px] tracking-wider text-primary/80">
                        {compound.type}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {compound.description}
                  </p>

                  <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {compound.details.map((detail) => (
                      <div
                        key={detail.label}
                        className="rounded-lg border border-border/40 bg-secondary/30 px-4 py-2.5"
                      >
                        <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground/70">
                          {detail.label}
                        </div>
                        <div className="mt-0.5 text-sm text-card-foreground">
                          {detail.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-[10px] text-muted-foreground/50">
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