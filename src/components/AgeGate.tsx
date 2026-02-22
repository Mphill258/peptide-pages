import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AgeGate = ({ children }: { children: React.ReactNode }) => {
  const [verified, setVerified] = useState<boolean | null>(null);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("age_verified");
    if (stored === "true") {
      setVerified(true);
    } else {
      setVerified(false);
    }
  }, []);

  const handleConfirm = () => {
    sessionStorage.setItem("age_verified", "true");
    setVerified(true);
  };

  const handleDeny = () => {
    setDenied(true);
  };

  if (verified === null) return null;
  if (verified) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <AnimatePresence mode="wait">
        {!denied ? (
          <motion.div
            key="prompt"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="mx-4 w-full max-w-md rounded-xl border border-border/60 bg-card p-8 text-center shadow-2xl"
          >
            <h2 className="font-display text-2xl font-bold text-foreground">
              Age Verification
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              You must be at least <strong className="text-foreground">18 years old</strong> to
              access this website. All products are intended for laboratory
              research purposes only.
            </p>
            <div className="mt-8 flex gap-3">
              <button
                onClick={handleDeny}
                className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
              >
                I am under 18
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                I am 18 or older
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="denied"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mx-4 w-full max-w-md rounded-xl border border-border/60 bg-card p-8 text-center shadow-2xl"
          >
            <h2 className="font-display text-xl font-bold text-foreground">
              Access Denied
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              You must be at least 18 years old to access this website.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AgeGate;
