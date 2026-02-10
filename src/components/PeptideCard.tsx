import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface PeptideCardProps {
  name: string;
  sequence: string;
  purity: string;
  weight: string;
  category: string;
  index: number;
  price: string;
}

const PeptideCard = ({ name, sequence, purity, weight, category, index, price }: PeptideCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-glow)]"
    >
      <div className="mb-4 inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        {category}
      </div>

      <h3 className="font-display text-lg font-semibold text-card-foreground">
        {name}
      </h3>

      <p className="mt-2 font-mono text-xs tracking-wider text-muted-foreground">
        {sequence}
      </p>

      <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
        <div>
          <div className="text-xs text-muted-foreground">Purity</div>
          <div className="font-display text-sm font-semibold text-primary">{purity}</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Format</div>
          <div className="font-display text-sm font-semibold text-card-foreground">{weight}</div>
        </div>
      </div>

      <div className="mt-4 border-t border-border pt-4">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
        >
          <span>View Pricing</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <div className="pt-3">
            <div className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3">
              <div className="font-display text-2xl font-bold text-primary">{price}</div>
              <div className="mt-1 text-[10px] text-muted-foreground">
                + £10 UK delivery · Research use only · Not for human consumption
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-4">
        <p className="text-[10px] text-muted-foreground">
          For in-vitro research and educational purposes only. Not for human consumption.
        </p>
      </div>
    </motion.div>
  );
};

export default PeptideCard;
