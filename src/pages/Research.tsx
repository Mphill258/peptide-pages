import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, Microscope, FileText, GraduationCap } from "lucide-react";

const topics = [
  {
    icon: Microscope,
    title: "Peptide Science Overview",
    description:
      "Peptides are short chains of amino acids that play key roles in biological research. They are widely studied in academic and laboratory settings for their structural and functional properties.",
  },
  {
    icon: BookOpen,
    title: "Research Applications",
    description:
      "Peptide compounds are used in a variety of in-vitro research contexts, including receptor binding studies, cell culture experiments, and biochemical assays.",
  },
  {
    icon: FileText,
    title: "Quality & Purity Standards",
    description:
      "Research-grade peptides require rigorous purification. HPLC (High-Performance Liquid Chromatography) is the industry standard method for ensuring compound purity above 99%.",
  },
  {
    icon: GraduationCap,
    title: "Educational Resources",
    description:
      "We believe in supporting the scientific community with accessible information about peptide chemistry, synthesis methods, and analytical techniques.",
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
                Research & <span className="text-gradient">Education</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Educational resources for the scientific community. All information
                is provided for research and educational purposes only. No medical
                advice is given or implied.
              </p>
            </motion.div>

            <div className="mx-auto mt-20 grid max-w-4xl gap-8 md:grid-cols-2">
              {topics.map((topic, i) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="rounded-xl border border-border bg-card p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <topic.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-card-foreground">
                    {topic.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {topic.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mx-auto mt-16 max-w-2xl rounded-xl border border-border bg-card p-8 text-center"
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Notice:</strong> The information on this page is
                provided for educational purposes only. It does not constitute medical advice. Our
                products are not for human consumption and are sold strictly for in-vitro research use.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
