import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FlaskConical, Shield, Award } from "lucide-react";

const About = () => {
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
                About <span className="text-gradient">PeptideLab</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                PeptideLab is a UK-based supplier of research-grade peptide compounds.
                Our products are intended strictly for in-vitro research and educational
                purposes. We do not provide medical advice, and our products are not
                intended for human consumption.
              </p>
            </motion.div>

            <div className="mx-auto mt-20 grid max-w-4xl gap-8 md:grid-cols-3">
              {[
                {
                  icon: FlaskConical,
                  title: "Research-Focused",
                  description:
                    "Every product we supply is manufactured to support legitimate scientific research and educational study.",
                },
                {
                  icon: Shield,
                  title: "Quality Assurance",
                  description:
                    "All compounds undergo HPLC purification and third-party analysis to ensure research-grade quality.",
                },
                {
                  icon: Award,
                  title: "Transparent Testing",
                  description:
                    "Certificates of analysis are available for every batch, providing full transparency for researchers.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="rounded-xl border border-border bg-card p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
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
                <strong className="text-foreground">Disclaimer:</strong> PeptideLab products are
                sold exclusively for research and educational purposes. They are not intended for
                human or animal consumption. No medical advice is provided. By purchasing from
                PeptideLab, you confirm that you understand and agree to these terms.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
