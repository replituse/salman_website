import { Atom, Zap, Lightbulb } from "lucide-react";

interface ImagePlaceholderProps {
  title: string;
  icon?: "atom" | "zap" | "bulb";
}

export function ImagePlaceholder({ title, icon = "atom" }: ImagePlaceholderProps) {
  const icons = {
    atom: <Atom className="w-24 h-24 text-white/40" />,
    zap: <Zap className="w-24 h-24 text-white/40" />,
    bulb: <Lightbulb className="w-24 h-24 text-white/40" />,
  };

  return (
    <div className="w-full h-64 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 rounded-lg flex flex-col items-center justify-center gap-4 relative overflow-hidden">
      {/* Physics background pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute text-primary font-mono text-sm top-4 left-4">E = mc²</div>
        <div className="absolute text-primary font-mono text-sm top-1/3 right-6">F = ma</div>
        <div className="absolute text-primary font-mono text-sm bottom-8 left-8">v² = u² + 2as</div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center gap-3">
        {icons[icon]}
        <h3 className="text-white/70 font-semibold text-center text-sm">{title}</h3>
        <p className="text-white/50 text-xs">Physics Learning Platform</p>
      </div>
    </div>
  );
}
