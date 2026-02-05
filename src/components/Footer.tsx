import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { label: 'All Products', href: '/store' },
    { label: 'Fruit Powders', href: '/store' },
    { label: 'Vegetable Powders', href: '/store' },
    { label: 'Blends', href: '/store' },
    { label: 'Bundles', href: '/bundles' }
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Quality & Process', href: '/quality' },
    { label: 'Recipes', href: '/recipes' },
    { label: 'Contact', href: '/contact' },
    { label: 'Wholesale', href: '/wholesale' }
  ];

  const legalLinks = [
    { label: 'Shipping Policy', href: '/shipping-policy' },
    { label: 'Return & Refund Policy', href: '/return-policy' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="w-full bg-secondary/30 border-t border-foreground/10">
      <div className="max-w-[100rem] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              SunMilled Naturals
            </h3>
            <p className="font-paragraph text-sm text-foreground/70 mb-6">
              Real fruits & veggies—finely milled. Clean powders made from real produce for everyday nutrition.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-heading text-base font-semibold text-foreground mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-base font-semibold text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading text-base font-semibold text-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-xs text-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} SunMilled Naturals. All rights reserved.
            </p>
            <p className="font-paragraph text-xs text-foreground/60 text-center md:text-right max-w-2xl">
              These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
