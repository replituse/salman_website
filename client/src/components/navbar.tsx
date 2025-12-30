import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Atom } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Courses", href: "/courses" },
    { name: "Fields of Physics", href: "/fields" },
    { name: "Expertise", href: "/#expertise" },
    { name: "Vision", href: "/#vision" },
    { name: "Programs", href: "/#programs" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-heading font-bold tracking-tighter flex items-center gap-2">
          <Atom className="text-primary h-8 w-8" />
          <span>Salman Sir <span className="text-primary">Physics</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors hover:text-primary",
                location === item.href ? "text-foreground font-bold" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Button className="hidden md:flex bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold transition-all duration-300 hover:scale-105">
          Book Counseling
        </Button>
      </div>
    </nav>
  );
}
