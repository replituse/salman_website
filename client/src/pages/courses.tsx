import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Course } from "@shared/schema";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Globe, BookOpen, GraduationCap, MonitorPlay, Users, 
  Target, Rocket, ArrowLeft, Atom, HeartPulse, GraduationCap as BookIcon,
  ChevronRight, Award, Globe2, Briefcase
} from "lucide-react";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("all");
  const [level, setLevel] = useState("all");
  const [mode, setMode] = useState("all");

  const { data: courses = [], isLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = 
      course.examName.toLowerCase().includes(search.toLowerCase()) ||
      course.country.toLowerCase().includes(search.toLowerCase());
    const matchesCountry = country === "all" || course.country === country;
    const matchesLevel = level === "all" || course.academicLevel === level;
    const matchesMode = mode === "all" || course.mode === mode;
    return matchesSearch && matchesCountry && matchesLevel && matchesMode;
  });

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 }
  };

  const getCourseIcon = (examName: string) => {
    if (examName.includes("JEE")) return <Atom className="h-6 w-6 text-primary" />;
    if (examName.includes("NEET")) return <HeartPulse className="h-6 w-6 text-primary" />;
    return <BookIcon className="h-6 w-6 text-primary" />;
  };

  if (selectedCourse) {
    return (
      <motion.div {...fadeIn} className="min-h-screen pb-12">
        {/* Course Hero Section */}
        <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={selectedCourse.bannerImage || "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000"} 
              alt={selectedCourse.examName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>
          
          <div className="container relative z-10 text-center text-white space-y-4 px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-4 bg-primary text-white border-none px-4 py-1">
                {selectedCourse.examType}
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">
                {selectedCourse.examName} Physics
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium">
                {selectedCourse.learningOutcome}
              </p>
            </motion.div>
          </div>
          
          <Button 
            variant="ghost" 
            className="absolute top-8 left-8 text-white hover:bg-white/20 gap-2"
            onClick={() => setSelectedCourse(null)}
          >
            <ArrowLeft className="h-5 w-5" /> Back to Courses
          </Button>
        </section>

        {/* Structured Content Section */}
        <div className="container py-12 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section className="space-y-4">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Globe className="h-8 w-8 text-primary" /> Course Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {selectedCourse.overview}
                </p>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" /> Who It's For
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{selectedCourse.whoItIsFor}</p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" /> Teaching Approach
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{selectedCourse.teachingApproach}</p>
                  </CardContent>
                </Card>
              </div>

              <section className="space-y-4">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Rocket className="h-8 w-8 text-primary" /> Learning Outcomes
                </h2>
                <div className="bg-muted p-8 rounded-2xl border-l-4 border-primary">
                  <p className="text-lg font-medium">{selectedCourse.outcomes}</p>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <Card className="sticky top-24 shadow-xl border-primary/20">
                <CardHeader className="bg-primary/5">
                  <CardTitle>Enrollment Details</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground font-medium">Duration</span>
                    <span className="font-bold text-primary">{selectedCourse.duration}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground font-medium">Mode</span>
                    <span className="font-bold text-primary">{selectedCourse.mode}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground font-medium">Location</span>
                    <span className="font-bold text-primary">{selectedCourse.country}</span>
                  </div>
                  
                  <div className="space-y-3 pt-4">
                    <p className="text-sm font-semibold flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" /> Counselling Support
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      {selectedCourse.counsellingInfo}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/30 pt-6">
                  <Button className="w-full h-12 text-lg font-bold shadow-lg shadow-primary/20">
                    Enquire for this Course
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="pb-20 space-y-0">
      {/* Enhanced Hero Section with Background Image */}
      <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523050335102-c3250c82232c?auto=format&fit=crop&q=80&w=2000" 
            alt="Global Physics Academy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="container relative z-10 text-center text-white space-y-4 px-6">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Global Physics Courses</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed">
              Premium preparation for global competitive exams and board certifications. Concept-driven learning for the next generation of innovators.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container px-6 space-y-16 mt-[-50px]">
        {/* Sticky Filter Bar as a Control Panel */}
        <motion.div 
          {...fadeIn} 
          transition={{ delay: 0.1 }}
          className="sticky top-20 z-40 p-3 bg-background/95 backdrop-blur-xl border rounded-2xl shadow-2xl shadow-primary/5 border-primary/10 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="relative group">
              <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="Search exams..." 
                className="pl-9 bg-muted/50 border-none focus-visible:ring-1 focus-visible:ring-primary h-11"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger className="bg-muted/50 border-none focus:ring-1 focus:ring-primary h-11">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="UK">UK</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
              </SelectContent>
            </Select>
            <Select value={level} onValueChange={setLevel}>
              <SelectTrigger className="bg-muted/50 border-none focus:ring-1 focus:ring-primary h-11">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="High School">High School</SelectItem>
                <SelectItem value="Undergraduate">Undergraduate</SelectItem>
              </SelectContent>
            </Select>
            <Select value={mode} onValueChange={setMode}>
              <SelectTrigger className="bg-muted/50 border-none focus:ring-1 focus:ring-primary h-11">
                <SelectValue placeholder="Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Modes</SelectItem>
                <SelectItem value="Online">Online</SelectItem>
                <SelectItem value="Offline">Offline</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((n) => (
              <Card key={n} className="h-[450px] animate-pulse bg-muted" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((course, idx) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                  layout
                >
                  <Card 
                    className="group relative h-full flex flex-col border-none hover:-translate-y-3 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl overflow-hidden bg-card"
                    onClick={() => setSelectedCourse(course)}
                  >
                    {/* Course Card Thumbnail Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={course.thumbnailImage || "https://images.unsplash.com/photo-1523050335102-c3250c82232c?auto=format&fit=crop&q=80&w=800"} 
                        alt={course.examName}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge 
                          className="bg-primary/90 text-white border-none shadow-lg px-4 py-1 font-bold backdrop-blur-md"
                        >
                          {course.country}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="space-y-3 p-6 pb-2">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">{course.examName}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5 font-semibold">
                          <BookOpen className="h-4 w-4 text-primary" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1.5 font-semibold">
                          <MonitorPlay className="h-4 w-4 text-primary" />
                          {course.mode}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-1 px-6 pb-6">
                      <p className="text-[15px] text-muted-foreground line-clamp-3 leading-relaxed font-medium">
                        {course.learningOutcome}
                      </p>
                    </CardContent>
                    
                    <CardFooter className="p-6 pt-0">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 h-12 font-bold text-base transition-all gap-2 rounded-xl">
                        View Details <ChevronRight className="h-5 w-5" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Social Proof Trust Section */}
        <motion.section 
          {...fadeIn} 
          transition={{ delay: 0.3 }}
          className="py-12 border-t border-b bg-muted/20 rounded-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold tracking-tight">10+ Years</p>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Teaching Excellence</p>
            </div>
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Globe2 className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold tracking-tight">12+ Countries</p>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Global Student Presence</p>
            </div>
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold tracking-tight">1000+</p>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Successful Aspirants</p>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeIn} transition={{ delay: 0.4 }} className="bg-card border rounded-2xl p-10 space-y-8 shadow-sm">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">Global Physics Exams & Counselling</h2>
            <p className="text-lg text-muted-foreground">Expert guidance tailored for international curriculums.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                region: "India", 
                exams: "JEE, NEET, Boards", 
                desc: "Deep conceptual focus for the world's toughest engineering and medical entrances." 
              },
              { 
                region: "UK", 
                exams: "A-Levels", 
                desc: "Application-based learning tailored for Cambridge and Edexcel boards." 
              },
              { 
                region: "IB / IGCSE", 
                exams: "Global", 
                desc: "Inquiry-based approach perfect for international baccalaureate standards." 
              },
              { 
                region: "USA", 
                exams: "AP Physics, SAT", 
                desc: "Fast-paced problem solving techniques for American college entrances." 
              },
              { 
                region: "Middle East", 
                exams: "Regional Curriculums", 
                desc: "Contextualized learning paths for diverse regional school standards." 
              }
            ].map((item, idx) => (
              <div key={idx} className="space-y-3 p-6 rounded-2xl bg-muted/40 hover:bg-muted/60 transition-colors border border-transparent hover:border-primary/10">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" /> {item.region}
                </h3>
                <p className="text-sm font-bold text-primary">{item.exams}</p>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
