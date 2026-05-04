import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  BrainCircuit, ShieldAlert, Clock, ArrowRight,
  MessageCircle, ShieldCheck, Zap, CheckCircle2,
  Workflow, Scale, Calculator, ChevronDown, Network, Lock, Rocket, 
  MapPin, FileText, Database, Server, Smartphone
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/918267078212";

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: { children: React.ReactNode, delay?: number, className?: string, direction?: "up"|"down"|"left"|"right"|"none" }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-16 md:mb-24">
    {subtitle && (
      <FadeIn direction="up">
        <h3 className="text-cyan font-semibold tracking-wider uppercase text-sm mb-4 flex items-center gap-2">
          <span className="w-8 h-px bg-cyan/50"></span> {subtitle}
        </h3>
      </FadeIn>
    )}
    <FadeIn direction="up" delay={0.1}>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">{title}</h2>
    </FadeIn>
  </div>
);

const ButtonPrimary = ({ href, children, className = "" }: { href: string, children: React.ReactNode, className?: string }) => (
  <a href={href} className={`inline-flex items-center justify-center h-14 px-8 rounded-lg bg-cyan text-midnight font-bold tracking-wide transition-all hover:bg-white hover:text-midnight hover:shadow-[0_0_30px_rgba(100,255,218,0.4)] ${className}`}>
    {children}
  </a>
);

const ButtonSecondary = ({ href, children, className = "" }: { href: string, children: React.ReactNode, className?: string }) => (
  <a href={href} className={`inline-flex items-center justify-center h-14 px-8 rounded-lg border border-cyan/30 bg-light-slate/30 text-white font-medium hover:bg-cyan/10 hover:border-cyan/60 transition-all ${className}`}>
    {children}
  </a>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<'law'|'ca'>('law');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Is our clients' data secure?", a: "Absolutely. We utilize bank-level encryption, localized server processing, and strict access controls. Our agents process data ephemerally where possible and push directly to your secure CRM/Drive, bypassing continuous storage on intermediate databases." },
    { q: "Will the AI give incorrect legal or tax advice?", a: "No. Our systems are engineered using deterministic, node-based architectures (n8n). They are explicitly locked to client intake, document triage, and routing. They are mathematically prevented from hallucinating advice." },
    { q: "Do our clients need to download an app?", a: "Zero friction. Everything operates natively within WhatsApp, an app your clients already use hourly. No portals, no logins, no app downloads required." },
    { q: "What is the typical ROI timeline?", a: "Most firms observe a positive return on investment within 45 days. The immediate recapture of 15+ billable hours per week, combined with preventing lost after-hours leads, accelerates the payback period significantly." }
  ];

  return (
    <div className="min-h-screen bg-midnight font-sans text-white selection:bg-cyan/30 selection:text-white">
      
      {/* 1. Sticky Executive Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 glass-panel border-x-0 border-t-0 border-b border-cyan/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-cyan/10 border border-cyan/30 flex items-center justify-center">
              <BrainCircuit className="text-cyan w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">Mythova</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#problem" className="hover:text-cyan transition-colors">The Problem</a>
            <a href="#solutions" className="hover:text-cyan transition-colors">Solutions</a>
            <a href="#architecture" className="hover:text-cyan transition-colors">Architecture</a>
            <a href="#roi" className="hover:text-cyan transition-colors">ROI</a>
            <a href="#process" className="hover:text-cyan transition-colors">Process</a>
            <a href="#faq" className="hover:text-cyan transition-colors">FAQ</a>
          </div>
          <a href={WHATSAPP_LINK} className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded bg-cyan text-midnight font-bold tracking-wide transition-all hover:bg-white text-sm">
            Book Free Audit
          </a>
        </div>
      </nav>

      {/* 2. High-Impact Hero Section */}
      <section className="relative pt-40 lg:pt-48 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex items-center z-10 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-slate rounded-full blur-[150px] pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-12 items-center w-full relative z-10">
          <div className="lg:col-span-7 max-w-2xl">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-cyan/20 bg-cyan/5 text-cyan text-xs font-semibold tracking-widest uppercase mb-8">
                <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" /> Enterprise AI Infrastructure
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight mb-8 text-white">
                We Automate Your Firm’s Friction. <span className="text-white/50">You Reclaim Your Billable Hours.</span>
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
                Mythova engineers secure, agentic AI workflows specifically for Law and CA firms. We automate client intake, document triage, and routine updates so your senior partners can focus on high-margin advisory.
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonPrimary href={WHATSAPP_LINK}>
                  <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp (Live Demo)
                </ButtonPrimary>
                <ButtonSecondary href="#architecture">
                  Explore The Architecture <ArrowRight className="w-5 h-5 ml-2" />
                </ButtonSecondary>
              </div>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.4} direction="left" className="relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center">
              {/* Floating Abstract UI Mockup */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan/5 to-transparent rounded-full blur-3xl" />
              <div className="relative w-full max-w-md glass-panel rounded-2xl p-6 border border-cyan/20 shadow-2xl overflow-hidden cyan-glow">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-cyan/50" />
                  </div>
                  <div className="text-xs text-white/40 font-mono">mythova-agent-core.sh</div>
                </div>
                
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex gap-4 opacity-70">
                    <span className="text-cyan">&gt;</span>
                    <span className="text-white/80">Receiving incoming lead via WhatsApp API...</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-cyan">&gt;</span>
                    <span className="text-white">Parsing query: "Need consultation for IT Returns"</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-cyan animate-pulse">|</span>
                    <div className="bg-light-slate/50 p-3 rounded border border-white/5 w-full">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-white/50">Intent Analysis</span>
                        <CheckCircle2 className="w-4 h-4 text-cyan" />
                      </div>
                      <div className="h-1.5 bg-dark-slate rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2, delay: 1 }} className="h-full bg-cyan" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 opacity-0 animate-[fadeIn_0.5s_ease-out_3s_forwards]">
                    <span className="text-cyan">&gt;</span>
                    <span className="text-white/80">Executing SOP: CA_Intake_Flow_v2</span>
                  </div>
                  <div className="flex gap-4 opacity-0 animate-[fadeIn_0.5s_ease-out_3.5s_forwards]">
                    <span className="text-cyan">&gt;</span>
                    <span className="text-cyan">Docs requested. Meeting scheduled. CRM updated.</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div animate={{ y: [-10, 10] }} transition={{ repeat: Infinity, duration: 4, repeatType: 'mirror' }} className="absolute -right-6 top-20 glass-panel p-4 py-3 rounded-lg border border-white/10 flex items-center gap-3 backdrop-blur-xl">
                <Lock className="text-cyan w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Encrypted Data</span>
              </motion.div>
              
              <motion.div animate={{ y: [10, -10] }} transition={{ repeat: Infinity, duration: 5, repeatType: 'mirror' }} className="absolute -left-6 bottom-20 glass-panel p-4 py-3 rounded-lg border border-white/10 flex items-center gap-3 backdrop-blur-xl">
                <Database className="text-white/70 w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">CRM Synced</span>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. The "Bleeding Edge" */}
      <section id="problem" className="relative py-24 md:py-32 px-6 bg-slate/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="The Bleeding Edge" title="Where Your Firm is Losing Money." />
          
          <div className="grid lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="glass-panel p-10 rounded-2xl h-full border border-red-500/10 hover:border-red-500/30 transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Clock className="text-red-400 w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">The 6 PM Bottleneck</h3>
                <p className="text-white/60 leading-relaxed">
                  Losing weekend and after-hours leads to faster competitors because your intake staff is off the clock. In modern services, speed to response is the primary closer.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="glass-panel p-10 rounded-2xl h-full border border-orange-500/10 hover:border-orange-500/30 transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <FileText className="text-orange-400 w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">The Document Chase</h3>
                <p className="text-white/60 leading-relaxed">
                  Wasting highly-paid partner hours sending WhatsApp messages begging clients for PAN cards, KYC, and case files. You are paying executive salaries for administrative chasing.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="glass-panel p-10 rounded-2xl h-full border border-yellow-500/10 hover:border-yellow-500/30 transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-yellow-400 w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">The 'Status Update' Drain</h3>
                <p className="text-white/60 leading-relaxed">
                  Answering the exact same routine questions ("Has my hearing date come?", "Is the ITR filed?") hundreds of times a month, destroying the deep-work focus required for complex cases.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Interactive Solutions */}
      <section id="solutions" className="relative py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Tailored Infrastructure" title="Engineered for Professional Services." />
          
          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
            {/* Tabs Header */}
            <div className="flex border-b border-white/10">
              <button 
                onClick={() => setActiveTab('law')}
                className={`flex-1 py-6 px-4 text-center font-bold text-lg transition-colors border-b-2 flex items-center justify-center gap-3 ${activeTab === 'law' ? 'border-cyan text-cyan bg-cyan/5' : 'border-transparent text-white/50 hover:text-white hover:bg-white/5'}`}
              >
                <Scale className="w-5 h-5" /> For Law Firms
              </button>
              <button 
                onClick={() => setActiveTab('ca')}
                className={`flex-1 py-6 px-4 text-center font-bold text-lg transition-colors border-b-2 flex items-center justify-center gap-3 ${activeTab === 'ca' ? 'border-cyan text-cyan bg-cyan/5' : 'border-transparent text-white/50 hover:text-white hover:bg-white/5'}`}
              >
                <Calculator className="w-5 h-5" /> For CA Firms
              </button>
            </div>
            
            {/* Tabs Content */}
            <div className="p-8 md:p-16">
              {activeTab === 'law' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-6 text-white">Automate the Defense.</h3>
                    <p className="text-white/70 text-lg mb-8 leading-relaxed">
                      Your legal strategy cannot process if you are bogged down in intake. We build robust ingestion systems that qualify leads across practice areas instantly.
                    </p>
                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-cyan/20 flex items-center justify-center shrink-0 border border-cyan/40">
                          <CheckCircle2 className="w-3 h-3 text-cyan" />
                        </div>
                        <div>
                          <strong className="block text-white mb-1">Automated Legal Intake</strong>
                          <span className="text-white/60 text-sm">Qualify prospects, detect conflicts of interest, and auto-book consultations for verified leads.</span>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-cyan/20 flex items-center justify-center shrink-0 border border-cyan/40">
                          <CheckCircle2 className="w-3 h-3 text-cyan" />
                        </div>
                        <div>
                          <strong className="block text-white mb-1">24/7 Case Status Bots</strong>
                          <span className="text-white/60 text-sm">Securely authenticate clients on WhatsApp and provide real-time updates from your CMS.</span>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-cyan/20 flex items-center justify-center shrink-0 border border-cyan/40">
                          <CheckCircle2 className="w-3 h-3 text-cyan" />
                        </div>
                        <div>
                          <strong className="block text-white mb-1">Secure NDA & Document Collection</strong>
                          <span className="text-white/60 text-sm">Agent systematically follows up for signatures and required case docs without partner intervention.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan/10 blur-[80px] rounded-full" />
                    <div className="glass-panel p-6 border border-cyan/20 rounded-xl relative">
                      <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                        <div className="w-10 h-10 rounded-full bg-light-slate flex items-center justify-center"><Scale className="w-5 h-5 text-cyan" /></div>
                        <div>
                          <div className="font-bold">Legal Intake Flow</div>
                          <div className="text-xs text-white/50">Active: 99.9% Uptime</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-light-slate/50 p-4 rounded-lg flex items-center gap-3">
                           <Workflow className="text-white/40 w-5 h-5"/>
                           <span className="text-sm">Trigger: WhatsApp Initial Message</span>
                        </div>
                        <div className="w-0.5 h-4 bg-cyan/30 mx-auto" />
                        <div className="bg-light-slate/50 p-4 rounded-lg flex items-center gap-3 border-l-2 border-cyan text-sm">
                           Verify case type limits (Family, Corporate, Criminal)
                        </div>
                        <div className="w-0.5 h-4 bg-cyan/30 mx-auto" />
                        <div className="bg-light-slate/50 p-4 rounded-lg flex items-center gap-3 border border-cyan/20 bg-cyan/5 text-sm">
                           Generate and dispatch fee agreement via Docusign
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'ca' && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-6 text-white">Precision at Scale.</h3>
                    <p className="text-white/70 text-lg mb-8 leading-relaxed">
                      Scale your accounting firm without scaling your headcount. We engineer systems that enforce rigid document compliance and completely eliminate late-filing chaos.
                    </p>
                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-cyan/20 flex items-center justify-center shrink-0 border border-cyan/40">
                          <CheckCircle2 className="w-3 h-3 text-cyan" />
                        </div>
                        <div>
                          <strong className="block text-white mb-1">GST/ITR Document Triage</strong>
                          <span className="text-white/60 text-sm">Agent parses WhatsApp uploads, verifies PDF types, and categorizes them automatically onto your server.</span>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-cyan/20 flex items-center justify-center shrink-0 border border-cyan/40">
                          <CheckCircle2 className="w-3 h-3 text-cyan" />
                        </div>
                        <div>
                          <strong className="block text-white mb-1">Automated Deadline Sequences</strong>
                          <span className="text-white/60 text-sm">Drip-feed custom WhatsApp reminders to clients missing documents before compliance deadlines.</span>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-cyan/20 flex items-center justify-center shrink-0 border border-cyan/40">
                          <CheckCircle2 className="w-3 h-3 text-cyan" />
                        </div>
                        <div>
                          <strong className="block text-white mb-1">Zero-Touch Onboarding</strong>
                          <span className="text-white/60 text-sm">Automatically extract PAN/Aadhar details from images and populate your internal CA management tools.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan/10 blur-[80px] rounded-full" />
                    <div className="glass-panel p-6 border border-cyan/20 rounded-xl relative">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                           <Calculator className="w-5 h-5 text-cyan" />
                           <span className="font-bold">Tax Season Orchestrator</span>
                        </div>
                        
                        <div className="flex gap-3 text-sm">
                          <div className="w-8 h-8 rounded shrink-0 bg-slate flex items-center justify-center border border-white/10">JD</div>
                          <div className="bg-light-slate/40 p-3 rounded-lg rounded-tl-none border border-white/5">
                            Attached is my Form 16. [Form16_2025.pdf]
                          </div>
                        </div>

                        <div className="flex gap-3 text-sm justify-end">
                          <div className="bg-cyan/10 p-3 rounded-lg rounded-tr-none border border-cyan/20 text-cyan">
                            Received, John. Processing via OCR...
                          </div>
                          <div className="w-8 h-8 rounded shrink-0 bg-cyan flex items-center justify-center font-bold text-midnight">M</div>
                        </div>

                        <div className="flex gap-3 text-sm justify-end">
                          <div className="bg-cyan/10 p-3 rounded-lg rounded-tr-none border border-cyan/20 text-cyan">
                            ✅ Form 16 Verified & Filed in Drive. <br/><br/>You are missing Capital Gains statements. Please upload by Friday.
                          </div>
                          <div className="w-8 h-8 rounded shrink-0 bg-cyan flex items-center justify-center font-bold text-midnight opacity-0">M</div>
                        </div>

                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Mythova Agentic Architecture */}
      <section id="architecture" className="relative py-24 md:py-32 px-6 bg-slate/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Technical Superiority" title="Not an AI Wrapper. A Deterministic Engine." />
          
          <div className="mb-16 max-w-3xl">
            <p className="text-lg text-white/70 leading-relaxed">
              We do not expose your clients to unpredictable LLMs. Mythova relies on strict, node-based agentic workflows (utilizing n8n architecture). Natural language processing is used purely to route intent and extract data, while deterministic logic gates ensure 100% compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Visual connector line for desktop */}
            <div className="hidden md:block absolute top-[45%] left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-cyan/0 via-cyan/40 to-cyan/0 z-0" />
            
            <FadeIn delay={0.1}>
              <div className="glass-panel p-8 rounded-2xl border border-white/10 relative z-10 text-center h-full">
                <div className="w-16 h-16 mx-auto rounded-full bg-light-slate border border-white/10 flex items-center justify-center mb-6 relative">
                  <Smartphone className="w-7 h-7 text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan text-midnight flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(100,255,218,0.5)]">1</div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">Lead Ingestion</h4>
                <p className="text-white/60 text-sm">
                  Client interfaces natively via WhatsApp or Webhook. The NLP layer instantly identifies the intent (e.g., "Need to file ITR" or "Need bail lawyer").
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="glass-panel p-8 rounded-2xl border border-cyan/30 relative z-10 text-center h-full bg-cyan/5">
                <div className="w-16 h-16 mx-auto rounded-full bg-cyan/20 border border-cyan/40 flex items-center justify-center mb-6 relative">
                  <Network className="w-7 h-7 text-cyan" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan text-midnight flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(100,255,218,0.5)]">2</div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">Agentic Logic Gate</h4>
                <p className="text-white/60 text-sm">
                  The deterministic n8n engine executes the specific firm SOP. It validates missing data, triggers OCR for uploaded docs, and handles conversational friction.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="glass-panel p-8 rounded-2xl border border-white/10 relative z-10 text-center h-full">
                <div className="w-16 h-16 mx-auto rounded-full bg-light-slate border border-white/10 flex items-center justify-center mb-6 relative">
                  <Server className="w-7 h-7 text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan text-midnight flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(100,255,218,0.5)]">3</div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">Secure Sync</h4>
                <p className="text-white/60 text-sm">
                  Verified data is pushed directly via API to your secured environments (Clio, Zoho, Google Drive, proprietary ERPs). 
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. ROI & Cost Comparison Table */}
      <section id="roi" className="relative py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading subtitle="The Economics of Automation" title="Mathematical Superiority." />

          <FadeIn>
            <div className="glass-panel rounded-3xl border border-cyan/20 overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-cyan/20">
                {/* Traditional */}
                <div className="p-10 md:p-14 bg-light-slate/20">
                  <h3 className="text-white/50 text-xl font-semibold mb-2 uppercase tracking-wide">Traditional</h3>
                  <div className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-6">Junior Hire / Admin</div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <ShieldAlert className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white">₹15,000 - ₹25,000 / mo</div>
                        <div className="text-sm text-white/50">Recurring fixed salary cost</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <ShieldAlert className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white">Works 9 to 5</div>
                        <div className="text-sm text-white/50">Misses after-hours opportunities</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <ShieldAlert className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white">Human Constraint</div>
                        <div className="text-sm text-white/50">Prone to data entry errors, gets sick, requires constant oversight and training</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mythova */}
                <div className="p-10 md:p-14 bg-cyan/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-cyan text-midnight font-bold py-1 px-8 text-xs transform rotate-45 translate-x-6 translate-y-6 shadow-md">
                    SCALE
                  </div>
                  <h3 className="text-cyan text-xl font-semibold mb-2 uppercase tracking-wide">The Mythova Edge</h3>
                  <div className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-6">Custom Intake Agent</div>
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white">Custom One-Time Build</div>
                        <div className="text-sm text-white/60">Asset ownership, negligible server running costs</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white">24/7/365 Uptime</div>
                        <div className="text-sm text-white/60">Instant response at 3 AM. Captures all leads.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white">Infinite Scalability</div>
                        <div className="text-sm text-white/60">Zero data entry errors. Handles 1 or 10,000 queries concurrently without breaking sweat.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Our 4-Step Integration Process */}
      <section id="process" className="relative py-24 px-6 bg-slate/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Deployment Protocol" title="Our 4-Step Integration Process." />
          
          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-0.5 bg-gradient-to-r from-cyan/10 via-cyan/30 to-cyan/10" />

            <div className="grid lg:grid-cols-4 gap-12 lg:gap-6 relative">
              {[
                { step: "01", title: "Discovery Audit", desc: "We map your current administrative friction. Identifying your specific time-wasting choke points and data silos." },
                { step: "02", title: "Workflow Design", desc: "Architecting the exact node-based logic and compliance rules. We show you the blueprint before writing code." },
                { step: "03", title: "Prototype & Testing", desc: "Building the agent and stress-testing it within a secure, isolated sandbox to ensure complete deterministic accuracy." },
                { step: "04", title: "Deployment & Handoff", desc: "Going live. Connecting the system to your WhatsApp API, CRM, and putting the agent to work with 24/7 maintenance." }
              ].map((item, idx) => (
                <div key={idx}>
                  <FadeIn delay={idx * 0.1}>
                    <div className="relative">
                      <div className="w-20 h-20 bg-midnight glass-panel border border-cyan/40 rounded-full flex items-center justify-center text-2xl font-bold text-cyan mb-8 relative z-10 shadow-[0_0_20px_rgba(100,255,218,0.15)]">
                        {item.step}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section id="faq" className="relative py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="Clarity & Security" title="Frequently Asked Questions." />

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <FadeIn delay={idx * 0.1}>
                  <div 
                    className={`glass-panel border transition-all duration-300 rounded-xl overflow-hidden cursor-pointer ${openFaq === idx ? 'border-cyan/40 bg-slate/40' : 'border-white/10 hover:border-white/20'}`}
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <div className="flex items-center justify-between p-6 md:p-8">
                      <h4 className="text-lg font-semibold text-white pr-8">{faq.q}</h4>
                      <ChevronDown className={`w-5 h-5 text-cyan shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </div>
                    <div 
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ maxHeight: openFaq === idx ? '300px' : '0px', opacity: openFaq === idx ? 1 : 0 }}
                    >
                      <div className="p-6 md:p-8 pt-0 text-white/70 leading-relaxed border-t border-white/5 mt-2">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. The Final Urgent CTA */}
      <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-midnight via-slate to-midnight border-t border-white/5">
        <div className="absolute inset-0 bg-[url('linear-gradient(rgba(100,255,218,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.03)_1px,transparent_1px)')] bg-[size:40px_40px] opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <FadeIn direction="up">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Stop managing paperwork. <br/>
              <span className="text-cyan">Start managing growth.</span>
            </h2>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Click below to message our lead developer directly on WhatsApp. We will build a customized workflow prototype for your firm before you pay a single rupee.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <a 
              href={WHATSAPP_LINK}
              className="inline-flex items-center justify-center h-20 px-10 rounded-2xl bg-cyan text-midnight font-bold text-xl tracking-wide transition-all shadow-[0_0_40px_rgba(100,255,218,0.3)] hover:shadow-[0_0_80px_rgba(100,255,218,0.5)] hover:bg-white hover:scale-105"
            >
              <MessageCircle className="w-8 h-8 mr-3" /> Secure Your Free Prototype
            </a>
          </FadeIn>
        </div>
      </section>

      {/* 10. Professional Footer */}
      <footer className="bg-midnight border-t border-white/10 py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                <BrainCircuit className="text-cyan w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Mythova Automation</span>
            </div>
            <p className="text-white/50 max-w-md mb-6 leading-relaxed text-sm">
              Engineered exclusively for high-tier Law and Chartered Accountant firms. We deploy sovereign AI infrastructure to scale your intelligence and secure your margins.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <MapPin className="w-4 h-4" /> Proudly engineered in Dehradun, Uttarakhand.
            </div>
          </div>
          
          <div className="flex md:justify-end gap-12">
            <div>
              <h5 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Company</h5>
              <div className="flex flex-col gap-3 text-sm text-white/50">
                <a href="#problem" className="hover:text-cyan transition-colors">The Problem</a>
                <a href="#solutions" className="hover:text-cyan transition-colors">Solutions</a>
                <a href="#architecture" className="hover:text-cyan transition-colors">Architecture</a>
              </div>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Legal</h5>
              <div className="flex flex-col gap-3 text-sm text-white/50">
                <a href="#" className="hover:text-cyan transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-cyan transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-cyan transition-colors">Security Architecture</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-white/30 text-xs">
          Copyright &copy; {new Date().getFullYear()} Mythova Automation. All rights reserved. Not affiliated with WhatsApp Inc.
        </div>
      </footer>

    </div>
  );
}
