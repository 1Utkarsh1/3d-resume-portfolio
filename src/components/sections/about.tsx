"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Award, BookOpen, Briefcase, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BoxReveal, BlurIn } from "@/components/reveal-animations";
import { TypographyH2, TypographyP } from "@/components/ui/typography";
import RefinedCubeScroll from "@/components/refined-cube-scroll";
import Link from "next/link";

// Simple Badge component
const Badge = ({ children, variant, className }: { children: React.ReactNode; variant?: string; className?: string }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
    variant === 'secondary' ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200' : 
    variant === 'outline' ? 'border border-current text-current' : 
    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
  } ${className || ''}`}>
    {children}
  </span>
);

const AboutSection = () => {
  // Define refined cube scroll items - one main element per cube
  const cubeItems = [
    {
      id: "education",
      title: "Education",
      subtitle: "Academic Foundation",
      icon: <BookOpen className="w-8 h-8 text-blue-400" />,
      color: "blue",
      stats: [
        { label: "Degrees", value: "2" },
        { label: "Universities", value: "2" },
        { label: "Specialization", value: "ML" }
      ],
      content: (
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 border-2 border-blue-500/20 hover:border-blue-500/40 transition-colors backdrop-blur-sm bg-background/30">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">B.E. (Hons) Software Engineering</h3>
                <p className="text-lg text-blue-300">University of New South Wales</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>2025 – Present</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Sydney, Australia</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Advanced coursework in Machine Learning & Distributed Systems
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-6 border-2 border-purple-500/20 hover:border-purple-500/40 transition-colors backdrop-blur-sm bg-background/30">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-purple-400 mb-2">B.E. Computer Science</h3>
                <p className="text-lg text-purple-300">Manipal Academy of Higher Education</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>2023 – 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Manipal, India</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-muted-foreground">Deep-Learning specialisation</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Head of Software Dev., Enigma</Badge>
                  <Badge variant="secondary">Published Research</Badge>
                  <Badge variant="secondary">Heart Disease Prediction</Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      )
    },
    {
      id: "experience",
      title: "Experience",
      subtitle: "Professional Journey",
      icon: <Briefcase className="w-8 h-8 text-green-400" />,
      color: "green",
      stats: [
        { label: "Companies", value: "3" },
        { label: "Years", value: "2+" },
        { label: "Impact", value: "200k+" }
      ],
      content: (
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 border-2 border-green-500/20 hover:border-green-500/40 transition-colors backdrop-blur-sm bg-background/30">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-green-400 mb-1">Software Engineer – AI Training</h3>
                  <p className="text-lg text-green-300 mb-2">Outlier · Remote (US)</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Jun 2025 – Present</span>
                  </div>
                </div>
                <Badge variant="outline" className="border-green-500/50 text-green-400">Current</Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Design advanced coding questions training LLMs on real-world workflows</li>
                <li>• Review AI-generated code in Python, JavaScript, Java & Go</li>
                <li>• Curated datasets power code-assistant models serving 200k+ developers</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-6 border-2 border-cyan-500/20 hover:border-cyan-500/40 transition-colors backdrop-blur-sm bg-background/30">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-1">Software Engineering Project Lead</h3>
                  <p className="text-lg text-cyan-300 mb-2">InderMoney Services · New Delhi</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>May 2025 – Present</span>
                  </div>
                </div>
                <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">Leadership</Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Re-platformed legacy banking stack for 30k+ customers</li>
                <li>• Built AI-driven pipelines cutting processing time by 60%</li>
                <li>• Led full-stack development with zero-downtime deployments</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      )
    },
    {
      id: "research",
      title: "Research",
      subtitle: "Publications & Impact",
      icon: <Award className="w-8 h-8 text-purple-400" />,
      color: "purple",
      stats: [
        { label: "Publications", value: "3" },
        { label: "F1 Score", value: "92%" },
        { label: "Articles", value: "44k" }
      ],
      content: (
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 border-2 border-purple-500/20 hover:border-purple-500/40 transition-colors backdrop-blur-sm bg-background/30">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-purple-400 mb-2">
                    Cross-Lingual Fake News Detection
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">Under Review - IEEE TCSS</Badge>
                    <Badge variant="secondary">Lead Author</Badge>
                    <Badge variant="secondary">2024 – Present</Badge>
                  </div>
                </div>
                <TrendingUp className="w-6 h-6 text-purple-400 flex-shrink-0" />
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">44k</div>
                  <div className="text-xs text-muted-foreground">Articles</div>
                </div>
                <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">92%</div>
                  <div className="text-xs text-muted-foreground">F1 Score</div>
                </div>
                <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">2</div>
                  <div className="text-xs text-muted-foreground">Languages</div>
                </div>
              </div>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Built multilingual transformer pipelines achieving state-of-the-art results</li>
                <li>• Implemented temporal-aware sampling for topic drift robustness</li>
                <li>• Developed cross-lingual transfer learning methodologies</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-6 border-2 border-blue-500/20 hover:border-blue-500/40 transition-colors backdrop-blur-sm bg-background/30">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">
                    Neural Trading Strategies & Heart Disease Prediction
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">Working Paper</Badge>
                    <Badge variant="secondary">Published ICAS &apos;24</Badge>
                  </div>
                </div>
                <Award className="w-6 h-6 text-blue-400 flex-shrink-0" />
              </div>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Real-time NIFTY/BankNIFTY options trading strategies</li>
                <li>• 89% ROC-AUC heart disease prediction model</li>
                <li>• CNN + LSTM hybrid architectures for market analysis</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20">
      {/* Section Header */}
      <div className="text-center space-y-6 mb-16 px-4">
        <BlurIn delay={0.2}>
          <TypographyH2 className="text-6xl md:text-8xl font-thin bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </TypographyH2>
        </BlurIn>
        <BlurIn delay={0.4}>
          <TypographyP className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Machine Learning Engineer, Full-Stack Developer, and AI Researcher passionate about 
            creating innovative solutions that bridge the gap between cutting-edge research and 
            real-world applications.
          </TypographyP>
        </BlurIn>
      </div>

      {/* Refined Cube Scroll for Education, Experience, Research */}
      <RefinedCubeScroll items={cubeItems} />

      {/* Awards & Leadership - Regular Sections */}
      <div className="px-4 md:px-8 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Awards */}
          <BoxReveal delay={0.5} width="100%">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <TypographyH2 className="text-4xl font-thin">Honors & Awards</TypographyH2>
            </div>
          </BoxReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-colors backdrop-blur-sm bg-background/50 text-center">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">3rd Place</h3>
                <p className="text-muted-foreground">WARTEX 7.0 Hackathon (2024)</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-2 border-orange-500/20 hover:border-orange-500/40 transition-colors backdrop-blur-sm bg-background/50 text-center">
                <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-orange-400 mb-2">Top 10</h3>
                <p className="text-muted-foreground">IECSE Freshers&apos; Codesprint (2023)</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-2 border-pink-500/20 hover:border-pink-500/40 transition-colors backdrop-blur-sm bg-background/50 text-center">
                <Award className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-pink-400 mb-2">Top 10</h3>
                <p className="text-muted-foreground">IEEE-SBM WiE Codathon (2023)</p>
              </Card>
            </motion.div>
          </div>

          {/* Leadership */}
          <BoxReveal delay={0.8} width="100%">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                <Users className="w-8 h-8 text-indigo-400" />
              </div>
              <TypographyH2 className="text-4xl font-thin">Leadership</TypographyH2>
            </div>
          </BoxReveal>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 border-2 border-indigo-500/20 hover:border-indigo-500/40 transition-colors backdrop-blur-sm bg-background/50">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-indigo-400 mb-2">Enigma Technical Society</h3>
                  <p className="text-muted-foreground">Head of Software Development</p>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Led a 12-member team across five AI/ML projects</li>
                  <li>• Organized ML workshops for 200+ students</li>
                  <li>• Mentored juniors - two achieved Kaggle Expert rank</li>
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6 py-16 px-4">
        <BlurIn delay={1.2}>
          <TypographyH2 className="text-4xl font-thin">Let&apos;s Build Something Amazing</TypographyH2>
        </BlurIn>
        <BlurIn delay={1.4}>
          <TypographyP className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on cutting-edge AI/ML projects? Let&apos;s connect!
          </TypographyP>
        </BlurIn>
        <BoxReveal delay={1.6} width="fit-content">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="#contact" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-colors">
              Get In Touch
            </Link>
            <Link href="/resume_utkarsh_rajput.pdf" target="_blank" className="px-8 py-3 border-2 border-blue-500/50 rounded-lg text-blue-400 font-semibold hover:border-blue-500 hover:bg-blue-500/10 transition-colors">
              View Resume
            </Link>
          </div>
        </BoxReveal>
      </div>
    </section>
  );
};

export default AboutSection; 