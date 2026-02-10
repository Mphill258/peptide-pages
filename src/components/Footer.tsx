import { FlaskConical } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display text-xl font-bold">
              <FlaskConical size={20} className="text-primary" />
              <span className="text-gradient">PEPTIDE</span>
              <span className="text-foreground">LAB</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Premium research peptides with uncompromising quality. Every product is
              synthesized, purified, and verified to the highest scientific standards.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Products</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#peptides" className="transition-colors hover:text-primary">All Peptides</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Growth Hormone</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Recovery</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Skin & Hair</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">About Us</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Lab Reports</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Contact</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>© 2026 PeptideLab. For research purposes only. Not for human consumption.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
