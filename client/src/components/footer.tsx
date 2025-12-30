import { motion } from "framer-motion";
import { Atom, Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Facebook } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "About", href: "/#about" },
        { label: "Courses", href: "/courses" },
        { label: "Fields of Physics", href: "/fields" },
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Physics Teaching", href: "/#expertise" },
        { label: "STEM Mentorship", href: "/#expertise" },
        { label: "Career Counseling", href: "/contact" },
      ]
    },
    {
      title: "Contact",
      links: [
        { label: "contact@salmansir.com", href: "mailto:contact@salmansir.com", icon: Mail },
        { label: "+971 50 123 4567", href: "tel:+971501234567", icon: Phone },
        { label: "Dubai, UAE", href: "#", icon: MapPin },
      ]
    }
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-background via-background to-primary/5 border-t border-primary/10">
      <div className="container mx-auto px-6 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Atom className="text-primary h-6 w-6" />
              <span className="font-heading font-bold text-lg">
                Salman Sir <span className="text-primary">Physics</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Elite physics education and STEM mentorship for tomorrow's innovators.
            </p>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                      data-testid={`link-footer-${section.title.toLowerCase()}-${linkIdx}`}
                    >
                      {'icon' in link && link.icon && <link.icon className="w-4 h-4" />}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Follow</h3>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all"
                  data-testid={`link-footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <p>&copy; {currentYear} Salman Sir Physics. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-privacy">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-terms">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
