import { FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
              <FlaskConical size={20} className="text-primary" />
              <span className="text-gradient">OMEGA</span>
              <span className="text-foreground"> PEPTIDES UK</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Information and materials for laboratory research and educational
              purposes only. Not for human consumption.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Navigation</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="transition-colors hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-primary">About</Link></li>
              <li><Link to="/research" className="transition-colors hover:text-primary">Research</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Information</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/disclaimer" className="transition-colors hover:text-primary">Disclaimer</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>© 2026 Omega Peptides UK. For research and educational purposes only. Not for human consumption. No medical advice provided.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
