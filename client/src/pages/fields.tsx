import { useQuery } from "@tanstack/react-query";
import { PhysicsField } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Youtube, ExternalLink, Lightbulb, Target, Rocket, Microscope } from "lucide-react";

export default function Fields() {
  const { data: fields = [], isLoading } = useQuery<PhysicsField[]>({
    queryKey: ["/api/physics-fields"],
  });

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="container py-12 space-y-12">
      <motion.div {...fadeIn} className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">The Beautiful Fields of Physics</h1>
        <p className="text-xl text-muted-foreground">
          Understanding the universe, from the subatomic to the galactic. A parent-friendly guide to modern physics education.
        </p>
      </motion.div>

      {isLoading ? (
        <div className="grid gap-8">
          {[1, 2].map((n) => (
            <Card key={n} className="h-80 animate-pulse bg-muted" />
          ))}
        </div>
      ) : (
        <div className="grid gap-12">
          {fields.map((field, idx) => (
            <motion.div
              key={field.id}
              {...fadeIn}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden border-2 hover:border-primary transition-colors">
                <div className="grid md:grid-cols-3">
                  <CardHeader className="md:col-span-1 bg-muted/30 p-8 space-y-6">
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs uppercase">Core Field</Badge>
                      <CardTitle className="text-3xl">{field.name}</CardTitle>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="text-xs font-bold uppercase text-muted-foreground">For Parents</p>
                          <p className="text-sm">{field.explanation}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <p className="text-xs font-bold uppercase text-muted-foreground">Exam Relevance</p>
                          <p className="text-sm">{field.examRelevance}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="md:col-span-2 p-8 space-y-8">
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <h4 className="font-bold flex items-center gap-2">
                          <Rocket className="h-5 w-5 text-primary" /> Real-World Impact
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{field.realWorldApps}</p>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-bold flex items-center gap-2">
                          <Microscope className="h-5 w-5 text-primary" /> How We Teach It
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{field.teachingApproach}</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex gap-2">
                        {field.youtubeLinks.map((link, i) => (
                          <Button key={i} variant="outline" size="sm" asChild className="gap-2">
                            <a href={link} target="_blank" rel="noopener noreferrer">
                              <Youtube className="h-4 w-4 text-red-600" />
                              Watch Sample Lecture {i + 1}
                            </a>
                          </Button>
                        ))}
                      </div>
                      <Button variant="default" className="gap-2">
                        View Related Courses
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      <motion.div {...fadeIn} className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center space-y-6">
        <h2 className="text-3xl font-bold">Curious which field is right for you?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our physics mentorship covers all foundational and advanced fields, ensuring students don't just memorize formulas but understand the fabric of reality.
        </p>
        <Button size="lg" className="px-8">Schedule a Free Demo Class</Button>
      </motion.div>
    </div>
  );
}
