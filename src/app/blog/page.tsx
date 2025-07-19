"use client";

import { cn } from "@/lib/utils";
import { BoxReveal, BlurIn } from "@/components/reveal-animations";
import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Award, BookOpen, Briefcase, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
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

const AboutPage = () => {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <section className="text-center space-y-6">
          <BlurIn delay={0.2}>
            <TypographyH1 className="text-6xl md:text-8xl font-thin bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </TypographyH1>
          </BlurIn>
          <BlurIn delay={0.4}>
            <TypographyP className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Machine Learning Engineer, Full-Stack Developer, and AI Researcher passionate about 
              creating innovative solutions that bridge the gap between cutting-edge research and 
              real-world applications.
            </TypographyP>
          </BlurIn>
        </section>

        {/* Education Section */}
        <section className="space-y-8">
          <BoxReveal delay={0.6} width="100%">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <BookOpen className="w-8 h-8 text-blue-400" />
              </div>
              <TypographyH2 className="text-4xl font-thin">Education</TypographyH2>
            </div>
          </BoxReveal>

          <div className="space-y-6">
            {/* UNSW */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-2 border-blue-500/20 hover:border-blue-500/40 transition-colors backdrop-blur-sm bg-background/50">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-400">B.E. (Hons) Software Engineering</h3>
                    <p className="text-lg text-muted-foreground">University of New South Wales</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>2025 – Present</span>
                    <MapPin className="w-4 h-4 ml-2" />
                    <span>Sydney, Australia</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Advanced coursework in Machine Learning & Distributed Systems
                </p>
              </Card>
            </motion.div>

            {/* Manipal */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-2 border-purple-500/20 hover:border-purple-500/40 transition-colors backdrop-blur-sm bg-background/50">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-400">B.E. Computer Science</h3>
                    <p className="text-lg text-muted-foreground">Manipal Academy of Higher Education</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>2023 – 2025</span>
                    <MapPin className="w-4 h-4 ml-2" />
                    <span>Manipal, India</span>
                  </div>
                </div>
                <div className="space-y-2">
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
        </section>

        {/* Professional Experience Section */}
        <section className="space-y-8">
          <BoxReveal delay={1.2} width="100%">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                <Briefcase className="w-8 h-8 text-green-400" />
              </div>
              <TypographyH2 className="text-4xl font-thin">Professional Experience</TypographyH2>
            </div>
          </BoxReveal>

          <div className="space-y-6">
            {/* Outlier */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-2 border-green-500/20 hover:border-green-500/40 transition-colors backdrop-blur-sm bg-background/50">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-green-400">Software Engineer – AI Training</h3>
                    <p className="text-lg text-muted-foreground">Outlier · Remote (US)</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <Calendar className="w-4 h-4" />
                      <span>Jun 2025 – Present</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-green-500/50 text-green-400">
                    Current Role
                  </Badge>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Design advanced coding questions that train LLMs on real-world software engineering workflows</li>
                  <li>• Review AI-generated code in Python, JavaScript, Java & Go for industry standards</li>
                  <li>• Curated datasets now power code-assistant models serving 200k+ developers</li>
                </ul>
              </Card>
            </motion.div>

            {/* InderMoney Lead */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-2 border-cyan-500/20 hover:border-cyan-500/40 transition-colors backdrop-blur-sm bg-background/50">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-cyan-400">Software Engineering Project Lead</h3>
                    <p className="text-lg text-muted-foreground">InderMoney Services Pvt Ltd · New Delhi</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <Calendar className="w-4 h-4" />
                      <span>May 2025 – Present</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                      Leadership
                    </Badge>
                    <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                      Full-Stack
                    </Badge>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Re-platformed legacy MS-Access banking stack to secure Django + MySQL system (30k+ customers)</li>
                  <li>• Built AI-driven spend-analysis pipelines, cutting processing time by 60%</li>
                  <li>• Led full-stack development with CI/CD and zero-downtime deployments</li>
                </ul>
              </Card>
            </motion.div>

            {/* SKOLAR */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-2 border-orange-500/20 hover:border-orange-500/40 transition-colors backdrop-blur-sm bg-background/50">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-orange-400">AI Developer</h3>
                    <p className="text-lg text-muted-foreground">SKOLAR · Remote</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <Calendar className="w-4 h-4" />
                      <span>Dec 2023 – Feb 2024</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-orange-500/50 text-orange-400">
                    ML/AI
                  </Badge>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Developed predictive ML models (XGBoost, LSTM) boosting forecast accuracy by 18pp</li>
                  <li>• Owned data cleaning, feature pipelines, and hyper-parameter optimization</li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Research & Publications Section */}
        <section className="space-y-8">
          <BoxReveal delay={2.0} width="100%">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <TypographyH2 className="text-4xl font-thin">Research & Publications</TypographyH2>
            </div>
          </BoxReveal>

          <div className="space-y-6">
            {/* Fake News Detection */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-2 border-purple-500/20 hover:border-purple-500/40 transition-colors backdrop-blur-sm bg-background/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-purple-400 mb-2">
                      Cross-Lingual & Temporal Dynamics in Fake News Detection
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">Under Review</Badge>
                      <Badge variant="secondary">IEEE TCSS</Badge>
                      <Badge variant="secondary">Lead Author</Badge>
                      <Badge variant="secondary">2024 – Present</Badge>
                    </div>
                  </div>
                  <TrendingUp className="w-6 h-6 text-purple-400 flex-shrink-0 mt-2" />
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">44k</div>
                      <div className="text-sm text-muted-foreground">Articles</div>
                    </div>
                    <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">92%</div>
                      <div className="text-sm text-muted-foreground">F1 Score</div>
                    </div>
                    <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">2</div>
                      <div className="text-sm text-muted-foreground">Languages</div>
                    </div>
                  </div>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Built multilingual transformer pipelines achieving state-of-the-art 92% F1 score</li>
                    <li>• Implemented temporal-aware sampling and robustness tests for topic drift</li>
                    <li>• Developed advanced cross-lingual transfer learning methodologies</li>
                  </ul>
                </div>
              </Card>
            </motion.div>

            {/* Trading Strategies */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-2 border-green-500/20 hover:border-green-500/40 transition-colors backdrop-blur-sm bg-background/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-green-400 mb-2">
                      Neural-Network–Based Trading Strategies in Pine Script
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">Working Paper</Badge>
                      <Badge variant="secondary">Principal Researcher</Badge>
                      <Badge variant="secondary">2024 – Present</Badge>
                    </div>
                  </div>
                  <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0 mt-2" />
                </div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Real-time trading strategy development for NIFTY/BankNIFTY options</li>
                  <li>• Hybrid CNN + LSTM model architecture for predictive market analysis</li>
                  <li>• Real-time data ingestion via WebSocket integration</li>
                </ul>
              </Card>
            </motion.div>

            {/* Heart Disease Prediction */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-2 border-blue-500/20 hover:border-blue-500/40 transition-colors backdrop-blur-sm bg-background/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                      Feature Engineering Optimization for Heart Disease Prediction
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">Published</Badge>
                      <Badge variant="secondary">ICAS Tech Symposium &apos;24</Badge>
                      <Badge variant="secondary">Co-author</Badge>
                      <Badge variant="secondary">89% ROC-AUC</Badge>
                    </div>
                  </div>
                  <Award className="w-6 h-6 text-blue-400 flex-shrink-0 mt-2" />
                </div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Advanced preprocessing techniques (MICE, Truncated SVD)</li>
                  <li>• Stacked models (Random Forest, ExtraTrees) achieving 89% ROC-AUC</li>
                  <li>• Comprehensive pipeline optimizing feature engineering</li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Awards & Certifications */}
        <section className="space-y-8">
          <BoxReveal delay={2.8} width="100%">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <TypographyH2 className="text-4xl font-thin">Honors & Awards</TypographyH2>
            </div>
          </BoxReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-colors backdrop-blur-sm bg-background/50 text-center">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">3rd Place</h3>
                <p className="text-muted-foreground">WARTEX 7.0 Hackathon (2024)</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-2 border-orange-500/20 hover:border-orange-500/40 transition-colors backdrop-blur-sm bg-background/50 text-center">
                <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-orange-400 mb-2">Top 10</h3>
                                 <p className="text-muted-foreground">IECSE Freshers&apos; Codesprint (2023)</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-2 border-pink-500/20 hover:border-pink-500/40 transition-colors backdrop-blur-sm bg-background/50 text-center">
                <Award className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-pink-400 mb-2">Top 10</h3>
                <p className="text-muted-foreground">IEEE-SBM WiE Codathon (2023)</p>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Leadership & Extracurricular */}
        <section className="space-y-8">
          <BoxReveal delay={3.6} width="100%">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                <Users className="w-8 h-8 text-indigo-400" />
              </div>
              <TypographyH2 className="text-4xl font-thin">Leadership & Extracurricular</TypographyH2>
            </div>
          </BoxReveal>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.8 }}
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
                  <li>• Instituted code reviews, CI pipelines, and sprint ceremonies</li>
                  <li>• Mentored juniors on Kaggle competitions - two achieved Expert rank</li>
                </ul>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-6 py-16">
          <BlurIn delay={4.0}>
                         <TypographyH2 className="text-4xl font-thin">Let&apos;s Build Something Amazing</TypographyH2>
          </BlurIn>
          <BlurIn delay={4.2}>
            <TypographyP className="text-xl text-muted-foreground max-w-2xl mx-auto">
                             Ready to collaborate on cutting-edge AI/ML projects or discuss innovative solutions? 
               Let&apos;s connect and explore the possibilities.
            </TypographyP>
          </BlurIn>
          <BoxReveal delay={4.4} width="fit-content">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="#contact" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-colors">
                Get In Touch
              </Link>
              <Link href="/resume_utkarsh_rajput.pdf" target="_blank" className="px-8 py-3 border-2 border-blue-500/50 rounded-lg text-blue-400 font-semibold hover:border-blue-500 hover:bg-blue-500/10 transition-colors">
                View Resume
              </Link>
            </div>
          </BoxReveal>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
