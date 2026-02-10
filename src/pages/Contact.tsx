import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
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
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="font-display text-4xl font-bold md:text-6xl">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Have a question about our research compounds? We're here to help.
                Please note we do not provide medical advice.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-16 max-w-xl"
            >
              {submitted ? (
                <div className="rounded-xl border border-primary/30 bg-card p-8 text-center">
                  <MessageSquare size={40} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-display text-xl font-semibold text-card-foreground">
                    Message Received
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you for your enquiry. We'll respond within 24–48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your enquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] hover:brightness-110"
                  >
                    Send Enquiry
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    We do not provide medical advice. All enquiries relate to research compounds only.
                  </p>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mt-12 flex max-w-xl items-center justify-center gap-2 text-sm text-muted-foreground"
            >
              <Mail size={16} className="text-primary" />
              <span>info@peptidelab.co.uk</span>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
