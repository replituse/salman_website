import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Youtube, Instagram, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with:", email);
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4">About Salman Sir</h3>
            <p className="text-sm leading-relaxed mb-6">
              With a passion for Physics and engineering, I commit to break boundaries in STEM competitions and academic excellence.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
                { icon: Youtube, href: "#", label: "YouTube", color: "#FF0000" },
                { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0077B5" },
                { icon: Instagram, href: "#", label: "Instagram", color: "url(#instagram-gradient)" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  className="w-11 h-11 rounded-full text-white flex items-center justify-center transition-all shadow-lg"
                  style={{
                    backgroundColor: social.label === "Instagram" ? undefined : social.color,
                    background: social.label === "Instagram" ? "linear-gradient(135deg, #f58529 0%, #dd2a7b 50%, #833ab4 100%)" : undefined
                  }}
                  data-testid={`link-footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Programs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-3">
              {[
                { label: "F1 in Schools", href: "#" },
                { label: "STEM Mentorship", href: "#" },
                { label: "Physics Enrichment", href: "#" },
                { label: "Robotics & Coding", href: "#" },
                { label: "Competition Prep", href: "#" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-foreground transition-colors flex items-center gap-2"
                    data-testid={`link-footer-programs-${idx}`}
                  >
                    <span className="text-lg">→</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                { label: "Student Success Stories", href: "#" },
                { label: "Physics Concepts Blog", href: "#" },
                { label: "Gallery", href: "#" },
                { label: "Career Guidance", href: "#" },
                { label: "FAQs", href: "#" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-foreground transition-colors flex items-center gap-2"
                    data-testid={`link-footer-resources-${idx}`}
                  >
                    <span className="text-lg">→</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">JSS International School,</p>
                  <p className="text-sm">Dubai, UAE</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:contact@salmansir.com" className="text-sm hover:underline" data-testid="link-footer-email">
                  contact@salmansir.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+971501234567" className="text-sm hover:underline" data-testid="link-footer-phone">
                  +971 50 123 4567
                </a>
              </div>
              <Button 
                className="w-full mt-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold text-sm"
                data-testid="button-footer-instagram"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Follow on Instagram
              </Button>
            </div>
          </motion.div>

          {/* Subscribe Section - Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 lg:col-span-1"
          >
            <h3 className="font-bold text-lg mb-3">Subscribe</h3>
            <p className="text-sm mb-4 leading-relaxed">
              Stay updated with latest courses, physics tips, and exclusive content.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-primary-foreground focus:ring-primary-foreground/30 text-sm"
                required
                data-testid="input-footer-subscribe-email"
              />
              <Button
                type="submit"
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold text-sm flex items-center justify-center gap-2 h-10"
                data-testid="button-footer-subscribe"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-primary-foreground/20" />

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/90"
      >
        <p data-testid="text-footer-copyright">&copy; {currentYear} Salman Sir Physics. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary-foreground transition-colors underline" data-testid="link-footer-sitemap">Sitemap</a>
          <a href="#" className="hover:text-primary-foreground transition-colors underline" data-testid="link-footer-privacy">Privacy Policy</a>
          <a href="#" className="hover:text-primary-foreground transition-colors underline" data-testid="link-footer-terms">Terms of Use</a>
        </div>
      </motion.div>
    </footer>
  );
}
