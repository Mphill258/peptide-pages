import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <span className="section-label">Get In Touch</span>
              <h1 className="mt-6 font-display text-4xl font-bold md:text-6xl">
                Contact <span className="text-gradient">Us</span>
              </h1>
              <div className="divider-gold mt-8" />
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                For research-related enquiries, wholesale discussions, or general
                information, please use the form below.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-10 flex items-center justify-center gap-2.5 rounded-lg border border-border/40 bg-card/50 px-5 py-3 text-sm text-muted-foreground backdrop-blur-sm"
              style={{ width: "fit-content" }}
            >
              <Mail size={14} className="text-primary" />
              <span>contact@omegapeptides.co.uk</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-4 max-w-lg text-center text-xs text-muted-foreground/60"
            >
              We do not provide medical advice and do not discuss personal use, dosing, or administration. All enquiries must relate to laboratory or research purposes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-12 max-w-xl"
            >
              {submitted ? (
                <div className="rounded-xl border border-primary/20 bg-card p-10 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-card-foreground">
                    Enquiry Received
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you. We'll respond within 24–48 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm md:p-8"
                >
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-foreground/70">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-foreground/70">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-foreground/70">
                      Organisation{" "}
                      <span className="normal-case tracking-normal text-muted-foreground/50">(optional)</span>
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                      placeholder="Your organisation"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-foreground/70">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                      placeholder="Your research enquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] hover:brightness-110"
                  >
                    Send Enquiry
                  </button>
                  <p className="text-center text-[10px] text-muted-foreground/50">
                    Please include your organisation or research purpose when submitting.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;