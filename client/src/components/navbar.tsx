import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Atom, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Courses", href: "/courses" },
    { name: "Fields of Physics", href: "/fields" },
    { name: "Expertise", href: "/#expertise" },
    { name: "Vision", href: "/#vision" },
    { name: "Programs", href: "/#programs" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return location === "/" && window.location.hash === href.slice(1);
    }
    return location === href;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-heading font-bold tracking-tighter flex items-center gap-2 flex-shrink-0">
          <Atom className="text-primary h-8 w-8" />
          <span className="hidden sm:inline">Salman Sir <span className="text-primary">Physics</span></span>
          <span className="sm:hidden">Salman Sir</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navItems.map((item) => (
            <div key={item.href} className="relative">
              <Link
                href={item.href}
                className={cn(
                  "text-sm transition-colors relative pb-1",
                  isActive(item.href) 
                    ? "text-primary font-bold" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button 
              className="hidden md:flex bg-primary text-white hover:bg-primary/90 font-bold transition-all duration-300 hover:scale-105"
              data-testid="button-book-counseling-navbar"
            >
              Book Counseling
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            data-testid="button-mobile-menu-toggle"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t bg-background/95 backdrop-blur overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-lg transition-all text-sm font-medium",
                    isActive(item.href)
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  )}
                  data-testid={`link-mobile-nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  className="w-full mt-4 bg-primary text-white hover:bg-primary/90 font-bold"
                  data-testid="button-mobile-book-counseling"
                >
                  Book Counseling
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
