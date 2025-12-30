import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-12">
      {/* Header */}
      <section className="container mx-auto px-6 mb-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Have questions about programs, counseling, or anything else? We'd love to hear from you. Reach out and let's start your journey to excellence.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input 
                      placeholder="Your name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="border-primary/30 focus:border-primary"
                      required
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="border-primary/30 focus:border-primary"
                      required
                      data-testid="input-contact-email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input 
                      type="tel"
                      placeholder="+971..." 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border-primary/30 focus:border-primary"
                      data-testid="input-contact-phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your inquiry..." 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-primary/30 focus:border-primary min-h-32"
                      required
                      data-testid="textarea-contact-message"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-primary text-white hover:bg-primary/90 font-bold h-12 text-base"
                    data-testid="button-contact-submit"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-6"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <a href="mailto:contact@salmansir.com" className="text-muted-foreground hover:text-primary transition-colors">contact@salmansir.com</a>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Phone</p>
                  <a href="tel:+971501234567" className="text-muted-foreground hover:text-primary transition-colors">+971 50 123 4567</a>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Location</p>
                  <p className="text-muted-foreground">Dubai, UAE</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-primary/20">
              <p className="font-semibold mb-4">Follow Us</p>
              <div className="flex gap-3">
                <motion.a 
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:shadow-lg transition-all"
                  data-testid="link-contact-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:shadow-lg transition-all"
                  data-testid="link-contact-youtube"
                >
                  <Youtube className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#833ab4] text-white flex items-center justify-center hover:shadow-lg transition-all"
                  data-testid="link-contact-instagram"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:shadow-lg transition-all"
                  data-testid="link-contact-facebook"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
