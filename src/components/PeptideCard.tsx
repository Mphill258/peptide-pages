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
  image?: string;
}

const PeptideCard = ({ name, sequence, purity, weight, category, index, price, image }: PeptideCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-6 transition-all hover:border-primary/20 hover:shadow-[var(--shadow-glow)]"
    >
      {image && (
        <div className="mb-5 overflow-hidden rounded-lg border border-border/30">
          <img src={image} alt={name} className="h-48 w-full object-cover" />
        </div>
      )}

      <div className="mb-3 inline-block rounded-md border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-primary">
        {category}
      </div>

      <h3 className="font-display text-xl font-semibold text-card-foreground">
        {name}
      </h3>

      <p className="mt-2 font-mono text-[11px] tracking-wider text-muted-foreground/70">
        {sequence}
      </p>

      <div className="mt-5 flex items-center gap-6 border-t border-border/40 pt-5">
        <div>
          <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground/60">Purity</div>
          <div className="mt-0.5 font-display text-sm font-semibold text-primary">{purity}</div>
        </div>
        <div>
          <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground/60">Format</div>
          <div className="mt-0.5 font-display text-sm font-semibold text-card-foreground">{weight}</div>
        </div>
      </div>

      <div className="mt-5 border-t border-border/40 pt-5">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between rounded-lg border border-border/60 bg-secondary/50 px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
        >
          <span>View Pricing</span>
          <ChevronDown
            size={14}
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
            <div className="rounded-lg border border-primary/15 bg-primary/5 px-4 py-3">
              <div className="font-display text-2xl font-bold text-primary">{price}</div>
              <div className="mt-1 text-[10px] text-muted-foreground/60">
                + £10 UK delivery · Research use only · Not for human consumption
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <p className="mt-4 text-[9px] uppercase tracking-widest text-muted-foreground/40">
        For in-vitro research only · Not for human consumption
      </p>
    </motion.div>
  );
};

export default PeptideCard;