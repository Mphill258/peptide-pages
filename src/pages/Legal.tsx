import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Research Use Only",
    content:
      "All products sold by PeptideLab are intended strictly for in-vitro research and educational purposes. They are not intended for human or animal consumption, nor for any therapeutic, diagnostic, or medicinal use.",
  },
  {
    title: "No Medical Advice",
    content:
      "PeptideLab does not provide medical advice. Nothing on this website should be interpreted as a recommendation for the treatment, cure, or prevention of any disease or medical condition. Always consult a qualified healthcare professional for medical guidance.",
  },
  {
    title: "Buyer Responsibility",
    content:
      "By purchasing from PeptideLab, you confirm that you are at least 18 years of age and that the products will be used solely for legitimate research or educational purposes. You accept full responsibility for the lawful and appropriate use of any products purchased.",
  },
  {
    title: "Product Information",
    content:
      "Product descriptions, specifications, and related information are provided for educational reference only. PeptideLab makes no claims regarding the efficacy, safety, or suitability of any product for any particular purpose beyond legitimate research use.",
  },
  {
    title: "Shipping & Delivery",
    content:
      "PeptideLab ships within the United Kingdom only. A flat delivery fee of £10 applies to all orders. We aim to dispatch all orders within 1–3 working days. PeptideLab is not responsible for delays caused by postal services.",
  },
  {
    title: "Limitation of Liability",
    content:
      "PeptideLab shall not be held liable for any damages, losses, or adverse effects arising from the misuse of products purchased from this website. Products are supplied on the condition that they will be used in accordance with all applicable laws and regulations.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this website, including text, graphics, logos, and design elements, is the property of PeptideLab and is protected by applicable intellectual property laws. Reproduction without written permission is prohibited.",
  },
];

const Legal = () => {
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
                Legal & <span className="text-gradient">Disclaimer</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Please read the following terms carefully before using this website
                or purchasing any products.
              </p>
            </motion.div>

            <div className="mx-auto mt-16 max-w-3xl space-y-8">
              {sections.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h2 className="font-display text-lg font-semibold text-card-foreground">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mx-auto mt-12 max-w-3xl text-center text-xs text-muted-foreground"
            >
              Last updated: February 2026
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
