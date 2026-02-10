import { motion } from "framer-motion";

interface PeptideCardProps {
  name: string;
  sequence: string;
  purity: string;
  weight: string;
  category: string;
  index: number;
}

const PeptideCard = ({ name, sequence, purity, weight, category, index }: PeptideCardProps) => {
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
          <div className="text-xs text-muted-foreground">Mol. Weight</div>
          <div className="font-display text-sm font-semibold text-card-foreground">{weight}</div>
        </div>
      </div>

      <button className="mt-4 w-full rounded-lg border border-border bg-secondary py-2.5 text-sm font-medium text-secondary-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary">
        View Details
      </button>
    </motion.div>
  );
};

export default PeptideCard;
