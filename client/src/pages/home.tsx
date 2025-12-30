import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { 
  Atom, 
  Cpu, 
  Wind, 
  Users, 
  Trophy, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Sparkles,
  Rocket,
  BrainCircuit,
  Leaf
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

// Images
import heroBg from "@assets/generated_images/abstract_physics_and_stem_background_with_green_and_yellow_gradients.png";
import salmanPhoto from "@assets/salman-sir-photo.jpg";
// Video is served from public folder
import f1Image from "@assets/generated_images/f1_in_schools_aerodynamic_car_design_visualization.png";
import labImage from "@assets/generated_images/modern_stem_lab_with_robotics_projects.png";
import mentorImage from "@assets/generated_images/professional_mentorship_and_counseling_concept.png";

// Motivation & Tech Images
import imgHologram from "@assets/generated_images/student_interacting_with_futuristic_physics_hologram.png";
import imgRobotPlant from "@assets/generated_images/robotic_hand_holding_a_green_plant.png";
import imgQuantum from "@assets/generated_images/abstract_quantum_computing_visualization.png";
import imgRocketSunrise from "@assets/generated_images/students_watching_a_rocket_launch_at_sunrise.png";

// Soft Lazy Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.2, 
      ease: "easeOut"
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen font-sans bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-16 overflow-hidden bg-white dark:bg-white">
        {/* Physics Formulas Background */}
        <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 text-primary font-mono text-sm md:text-base leading-loose whitespace-nowrap select-none" style={{ fontFamily: 'Georgia, serif' }}>
            <div className="absolute top-[5%] left-[5%] rotate-[-5deg]">E = mc²</div>
            <div className="absolute top-[10%] right-[15%] rotate-[8deg]">F = ma</div>
            <div className="absolute top-[20%] left-[20%] rotate-[3deg]">v = u + at</div>
            <div className="absolute top-[15%] right-[40%] rotate-[-3deg]">s = ut + ½at²</div>
            <div className="absolute top-[30%] left-[8%] rotate-[6deg]">v² = u² + 2as</div>
            <div className="absolute top-[35%] right-[10%] rotate-[-8deg]">p = mv</div>
            <div className="absolute top-[45%] left-[35%] rotate-[4deg]">KE = ½mv²</div>
            <div className="absolute top-[50%] right-[25%] rotate-[-4deg]">PE = mgh</div>
            <div className="absolute top-[60%] left-[12%] rotate-[-6deg]">W = Fd cos θ</div>
            <div className="absolute top-[65%] right-[8%] rotate-[7deg]">P = W/t</div>
            <div className="absolute top-[75%] left-[25%] rotate-[5deg]">τ = r × F</div>
            <div className="absolute top-[80%] right-[30%] rotate-[-5deg]">ω = θ/t</div>
            <div className="absolute bottom-[15%] left-[45%] rotate-[3deg]">T = 2π√(l/g)</div>
            <div className="absolute bottom-[10%] right-[45%] rotate-[-7deg]">λ = v/f</div>
            <div className="absolute bottom-[5%] left-[10%] rotate-[8deg]">PV = nRT</div>
            <div className="absolute bottom-[20%] right-[5%] rotate-[-3deg]">ΔQ = mcΔT</div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-4"
          >
            <motion.div variants={fadeIn}>
              <Badge variant="outline" className="border-primary text-primary px-4 py-1.5 text-xs uppercase tracking-widest font-bold shadow-md">
                Elite Physics & STEM Mentor
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-[1.1] tracking-tighter">
              Transforming{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary animate-gradient-x">
                Curious Minds
              </span>{" "}
              Into Future{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                Innovators
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl font-semibold text-foreground max-w-xl leading-relaxed">
              Championship-winning F1 in Schools Coach. World-record breaker. 
              <span className="text-primary font-bold"> Dubai's premier STEM architect</span> shaping tomorrow's pioneers.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-base font-bold px-8 h-14 bg-primary text-white hover:bg-primary/90 shadow-2xl shadow-primary/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105"
                data-testid="button-explore-programs"
              >
                Unlock Your Potential
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base font-bold px-8 h-14 border-3 border-secondary text-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-500 hover:scale-105 shadow-lg"
                data-testid="button-book-counseling"
              >
                Start Your Journey
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <video 
              src="/hero_video.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline
              className="h-[70vh] max-h-[600px] w-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-0 pb-12 bg-white dark:bg-white">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-black dark:text-white"
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Salman Sir</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl font-semibold text-foreground leading-relaxed"
            >
              Championship-winning Physics educator and F1 in Schools mentor with proven expertise in practical STEM learning and global competition success.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left - Professional Photo */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="lg:col-span-4 flex flex-col items-center"
            >
              {/* Photo Container with Shadow */}
              <div className="relative w-full max-w-lg">
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800">
                    <img 
                      src={salmanPhoto} 
                      alt="Salman Sir" 
                      className="w-full h-auto object-cover" 
                    />
                  </div>
                </motion.div>
              </div>

              {/* Social Media Icons */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-5 mt-10"
              >
                <motion.a 
                  href="#" 
                  data-testid="link-instagram"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#833ab4] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="#" 
                  data-testid="link-youtube"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <Youtube className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="#" 
                  data-testid="link-linkedin"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-[#0077B5] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="#" 
                  data-testid="link-facebook"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="lg:col-span-8 space-y-8"
            >
              {/* Bio Text */}
              <div className="space-y-4">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="text-lg text-foreground leading-relaxed"
                >
                  I am a passionate Physics teacher at JSS International School, Dubai, and the F1 in Schools Club Incharge with championship-winning expertise. My journey is defined by a commitment to practical learning and hands-on STEM education.
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  className="text-lg text-foreground leading-relaxed"
                >
                  As a mentor, I believe in moving beyond textbooks. I guide students through complex engineering challenges, coding aerodynamic simulations, and competing on global stages. With a track record of global recognition and award-winning achievements, I combine proven frameworks with cross-category expertise to unlock the next level of growth in every student.
                </motion.p>
              </div>

              {/* Key Expertise Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="space-y-6 pt-6 border-t-2 border-primary/20"
              >
                <h3 className="text-2xl font-bold text-black dark:text-white flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                  Key Expertise:
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Expertise Item 1 */}
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-teal-50 to-teal-50/50 dark:from-teal-900/20 dark:to-teal-900/10 border border-teal-200/50 dark:border-teal-700/30"
                  >
                    <div className="p-3 bg-teal-500 text-white rounded-full flex-shrink-0 shadow-lg">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-black dark:text-white text-sm">Championship Coach</p>
                      <p className="text-xs text-foreground/70 mt-1">F1 in Schools World Recognition</p>
                    </div>
                  </motion.div>

                  {/* Expertise Item 2 */}
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-50/50 dark:from-blue-900/20 dark:to-blue-900/10 border border-blue-200/50 dark:border-blue-700/30"
                  >
                    <div className="p-3 bg-blue-500 text-white rounded-full flex-shrink-0 shadow-lg">
                      <Atom className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-black dark:text-white text-sm">Physics & STEM Education</p>
                      <p className="text-xs text-foreground/70 mt-1">Innovation & Concept-based Learning</p>
                    </div>
                  </motion.div>

                  {/* Expertise Item 3 */}
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-amber-50 to-amber-50/50 dark:from-amber-900/20 dark:to-amber-900/10 border border-amber-200/50 dark:border-amber-700/30"
                  >
                    <div className="p-3 bg-amber-500 text-white rounded-full flex-shrink-0 shadow-lg">
                      <Wind className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-black dark:text-white text-sm">Aerodynamics & Design</p>
                      <p className="text-xs text-foreground/70 mt-1">RC Car & F1 Technical Excellence</p>
                    </div>
                  </motion.div>

                  {/* Expertise Item 4 */}
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-50/50 dark:from-green-900/20 dark:to-green-900/10 border border-green-200/50 dark:border-green-700/30"
                  >
                    <div className="p-3 bg-green-500 text-white rounded-full flex-shrink-0 shadow-lg">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-black dark:text-white text-sm">Career Counseling</p>
                      <p className="text-xs text-foreground/70 mt-1">Growth & University Placement Guidance</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Cards - Professional Design */}
      <section id="expertise" className="py-12 bg-white dark:bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-black dark:text-white"
            >
              Areas of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Expertise</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl font-semibold text-foreground leading-relaxed"
            >
              Combining theoretical physics with engineering excellence to create holistic learning experiences.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                image: imgHologram,
                title: "Physics Teaching", 
                desc: "Concept-based learning focusing on core principles and real-world applications."
              },
              { 
                image: mentorImage,
                title: "STEM Mentorship", 
                desc: "Guiding students through engineering challenges and innovation projects."
              },
              { 
                image: f1Image,
                title: "F1 in Schools", 
                desc: "Leadership in aerodynamics, design, and team management for global competitions."
              },
              { 
                image: labImage,
                title: "RC Car Engineering", 
                desc: "Hands-on design, coding, and optimization of remote-controlled vehicles."
              },
              { 
                image: imgQuantum,
                title: "Career Counseling", 
                desc: "Strategic guidance for students aiming for top engineering and science universities."
              },
              { 
                image: imgRocketSunrise,
                title: "Competition Prep", 
                desc: "Rigorous training for National & World level STEM championships."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
              >
                <div className="h-full relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 min-h-80">
                  {/* Background Image */}
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Dark Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 group-hover:via-black/50 transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">{item.title}</h3>
                    <p className="text-white/85 text-base leading-relaxed group-hover:text-white transition-colors duration-300">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section - Premium Professional Design */}
      <section id="vision" className="py-20 md:py-28 bg-white dark:bg-white">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold font-heading mb-8 text-black dark:text-white"
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Vision</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed"
              >
                Empowering students to become innovative leaders who bridge scientific knowledge with practical engineering excellence on a global stage.
              </motion.p>
            </motion.div>
          </div>

          {/* Vision Cards with Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Innovation-Driven", 
                desc: "Fostering creative problem-solving through hands-on STEM projects and real-world engineering challenges.",
                image: f1Image,
                number: "01"
              },
              { 
                title: "Global Excellence", 
                desc: "Preparing students to compete and succeed at international competition levels with world-class coaching.",
                image: labImage,
                number: "02"
              },
              { 
                title: "Practical Learning", 
                desc: "Combining theoretical knowledge with engineering application to create lasting, tangible skills.",
                image: mentorImage,
                number: "03"
              },
              { 
                title: "Sustainable Future", 
                desc: "Developing environmentally conscious engineers who build solutions for tomorrow's challenges.",
                image: imgRocketSunrise,
                number: "04"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
              >
                <div className="h-full relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 min-h-96">
                  {/* Background Image */}
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Dark Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 group-hover:via-black/60 transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-end">
                    <div className="mb-4">
                      <span className="text-base font-bold text-secondary/90 tracking-widest">{item.number}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">{item.title}</h3>
                    <p className="text-white/85 text-base leading-relaxed group-hover:text-white transition-colors duration-300">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Journey */}
      <section id="journey" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl font-bold font-heading mb-4 text-white">Journey of Excellence</h2>
            <div className="h-1 w-24 bg-secondary rounded-full" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-white/20 -translate-x-1/2 md:translate-x-0 ml-6 md:ml-0" />

            {[
              { year: "2020", title: "Inception of F1 in Schools Club", desc: "Started the journey at JSS International School, laying the foundation for future champions." },
              { year: "2021", title: "National & UAE Championships", desc: "Guided teams to victory in regional competitions, establishing a reputation for excellence." },
              { year: "2022", title: "Team Nautilus Achievements", desc: "Mentored Team Nautilus to significant wins, focusing on engineering precision." },
              { year: "2023", title: "World Finals - Top in Asia", desc: "Achieved 8th place globally and Top in Asia & GCC. Set a world record race time of 1.074 seconds." },
              { year: "2024", title: "Global Recognition", desc: "Continued mentorship impact, hosting national competitions and presenting to KHDA." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                className={`relative flex items-center gap-8 mb-12 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content */}
                <div className="flex-1 ml-12 md:ml-0">
                  <div className={`bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors ${idx % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="text-secondary font-bold text-xl mb-1">{item.year}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80">{item.desc}</p>
                  </div>
                </div>
                
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 ml-6 md:ml-0 w-4 h-4 bg-secondary rounded-full border-4 border-primary z-10 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                
                {/* Spacer for other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4">Educational Programs</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialized courses designed to bridge the gap between textbook physics and real-world engineering.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {[
                {
                  title: "F1 in Schools (Juniors & Seniors)",
                  desc: "Comprehensive coaching on aerodynamics, car design using CAD, and race strategy.",
                  tags: ["Engineering", "Design", "Physics"]
                },
                {
                  title: "Advanced STEM Learning",
                  desc: "Project-based learning modules covering electronics, mechanics, and renewable energy.",
                  tags: ["Robotics", "Circuits", "Coding"]
                },
                {
                  title: "RC Car Engineering",
                  desc: "Build and race custom RC cars. Learn suspension geometry, motor tuning, and chassis balance.",
                  tags: ["Mechanics", "Hands-on", "Racing"]
                },
                {
                  title: "Physics Enrichment",
                  desc: "Deep dive into advanced physics concepts for high-school students preparing for competitive exams.",
                  tags: ["Academics", "Theory", "Problem Solving"]
                }
              ].map((program, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                >
                  <Card className="hover:border-primary/50 transition-colors cursor-pointer group hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center text-xl group-hover:text-primary transition-colors">
                        {program.title}
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                      </CardTitle>
                      <CardDescription className="text-base mt-2">{program.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        {program.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="bg-secondary/20 text-secondary-foreground hover:bg-secondary/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
              className="sticky top-24"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border bg-card">
                <img src={f1Image} alt="F1 Design" className="w-full h-64 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-heading mb-4">Why Choose These Programs?</h3>
                  <ul className="space-y-4">
                    {[
                      "Real-world application of Physics concepts",
                      "Development of soft skills: Leadership & Teamwork",
                      "Exposure to industry-standard software (CAD/CAM)",
                      "Direct mentorship from an award-winning coach"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8 bg-primary hover:bg-primary/90 text-lg py-6 shadow-lg hover:shadow-primary/20 transition-all">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact & Recognition */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
              className="order-2 lg:order-1"
            >
               <img src={mentorImage} alt="Mentorship" className="rounded-2xl shadow-xl w-full" />
            </motion.div>

            <motion.div 
              className="space-y-8 order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-4xl font-bold font-heading">
                Making a Real Impact
              </motion.h2>
              
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground">
                The true measure of success is the growth of my students. From visits by ISRO scientists to recognition from STEM leaders and educational authorities, our journey has been celebrated globally.
              </motion.p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "500+", label: "Students Mentored" },
                  { value: "15+", label: "Awards Won" },
                  { value: "1.074s", label: "World Record Time" },
                  { value: "Top 8", label: "Global Ranking" }
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={fadeIn}
                    className="p-6 bg-background rounded-xl shadow-sm border text-center hover:border-primary/50 transition-colors"
                  >
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold font-heading">Let's Collaborate</h2>
                <p className="text-muted-foreground text-lg">
                  Whether you're a student looking for guidance, a parent seeking mentorship, or a school aiming to set up a STEM lab, I'm here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Location</h4>
                    <p className="text-muted-foreground">Dubai, United Arab Emirates</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-muted-foreground">contact@salmansirphysics.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">WhatsApp</h4>
                    <p className="text-muted-foreground">+971 50 123 4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="p-6 md:p-8 shadow-lg border-muted">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription>Fill out the form below to book a counseling session or inquire about programs.</CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input placeholder="your@email.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="Counseling / F1 in Schools / General Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="How can I help you?" className="min-h-[150px]" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-lg h-12 transition-transform hover:scale-[1.02]">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - New Bright Yellow Design */}
      <footer className="py-20 bg-yellow-400 text-stone-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* About Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-heading border-b-2 border-stone-900 inline-block pb-1 mb-2">About Salman Sir</h3>
              <p className="text-stone-800 font-medium leading-relaxed">
                With a passion for Physics and engineering, I empower students to break boundaries in STEM competitions and academic excellence.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="p-2 bg-stone-900 text-yellow-400 rounded-full hover:bg-stone-800 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-stone-900 text-yellow-400 rounded-full hover:bg-stone-800 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-stone-900 text-yellow-400 rounded-full hover:bg-stone-800 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-stone-900 text-yellow-400 rounded-full hover:bg-stone-800 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Programs Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-heading border-b-2 border-stone-900 inline-block pb-1 mb-2">Programs</h3>
              <ul className="space-y-3 font-medium">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> F1 in Schools</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> STEM Mentorship</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Physics Enrichment</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Robotics & Coding</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Competition Prep</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-heading border-b-2 border-stone-900 inline-block pb-1 mb-2">Resources</h3>
              <ul className="space-y-3 font-medium">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Student Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Physics Concepts Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Gallery</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Career Guidance</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> FAQs</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-heading border-b-2 border-stone-900 inline-block pb-1 mb-2">Contact</h3>
              <div className="space-y-4 font-medium">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-stone-900" />
                  <span>JSS International School,<br/>Dubai, UAE</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-stone-900" />
                  <a href="mailto:contact@salmansir.com" className="hover:text-white transition-colors">contact@salmansir.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-stone-900" />
                  <a href="tel:+971501234567" className="hover:text-white transition-colors">+971 50 123 4567</a>
                </div>
                <div className="pt-2">
                  <Button className="w-full bg-stone-900 text-yellow-400 hover:bg-stone-800 border-none font-bold">
                    <Instagram className="w-4 h-4 mr-2" />
                    Follow on Instagram
                  </Button>
                </div>
              </div>
            </div>

          </div>
          
          <div className="mt-16 pt-8 border-t border-stone-900/20 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-800 font-medium text-sm">
            <div>
              © {new Date().getFullYear()} Salman Sir Physics. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
