import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Research", to: "/research" },
  { label: "Contact", to: "/contact" },
  { label: "Disclaimer", to: "/disclaimer" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 py-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded border border-primary/30 bg-primary/10">
                <span className="font-display text-sm font-bold text-primary">Ω</span>
              </div>
              <div className="font-display text-lg font-semibold tracking-wide">
                <span className="text-primary">OMEGA</span>
                <span className="text-foreground/60"> PEPTIDES</span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Providing research-grade compounds and educational resources for
              lawful laboratory use. Not for human consumption.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70">
              Pages
            </h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/70">
              Compliance
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>For in-vitro research only</li>
              <li>Not for human consumption</li>
              <li>No medical advice provided</li>
              <li>HPLC-purified, third-party tested</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 py-6">
          <p className="text-center text-xs text-muted-foreground/60">
            © 2026 Omega Peptides UK. All materials for research and educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;