import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  MapPin,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Check,
  Copy,
  Edit3,
  Palette,
  Layers,
  ArrowUpRight,
  User,
  BookOpen,
  Star,
  Send,
  Plus,
  Trash2,
  Eye,
  X,
  Sliders,
  Camera,
  Heart,
  Globe,
  Compass,
  Feather,
  Zap,
  CheckCircle2,
  FileText,
  Download,
  ArrowRight,
  Code,
  Smartphone,
  Menu
} from 'lucide-react';

const PORTRAIT_FORMAL = "/dineo_portrait_1.jpg";
const PORTRAIT_CANDID = "/dineo_portrait_2.jpg";

const INITIAL_PROFILE = {
  name: "Dineo Sekgala",
  topTag: "CHIEF R&D OFFICER AT UMKHOAI • FOUNDER OF BYDESIGN",
  creativeLabel: "AFRICAN AI & HEALTHCARE INNOVATOR",
  roleLine1: "CHIEF R&D",
  roleLine2: "OFFICER & FOUNDER",
  roleTitle: "Chief Research & Development Officer at UmkhoAI • Founder of Bydesign",
  headline: "Chief Research & Development Officer (CRDO) at UmkhoAI • Founder of Bydesign (Offline AI Medical Ensuite)",
  subheadline: "Building the world's first offline national AI ecosystem and multilingual healthcare technology for 20M+ South Africans across all 12 official languages and local sociolects.",
  location: "Randburg / Midrand, Gauteng, South Africa",
  website: "www.umkhoai.com",
  availableDate: "2026",
  linkedinUrl: "https://www.linkedin.com/in/dineo-sekgala/",
  email: "dineo.sekgala@umkhoai.co.za",
  secondaryEmail: "dkl.sekgala@gmail.com",
  phone: "+27 76 314 8420",
  availability: "CRDO @ UmkhoAI • Founder @ Bydesign",
  about: "As Chief Research and Development Officer (CRDO) and Executive Board Member at UmkhoAI (Pty) Ltd, and Founder of Bydesign (an offline AI Medical Ensuite), I lead research at the intersection of artificial intelligence, African linguistic heritage, and healthcare accessibility. My work focuses on shifting African language AI from simple written translation to native voice-first reasoning—capturing South Africa's 12 official languages and everyday urban sociolects (Tsotsitaal, Fanakalo, Kasi slang, and Spitori) 100% offline.",
  philosophy: "AI HAS THE POWER TO EITHER ERASE OR PRESERVE OUR LANGUAGES—WE ARE BUILDING OFFLINE AFRICAN INTELLIGENCE THAT SPEAKS TO EVERY COMMUNITY IN THEIR OWN VOICE.",
  services: [
    {
      id: "srv-1",
      title: "OFFLINE AI R&D LEADERSHIP",
      desc: "Directing instructional dataset architecture, voice-first LLM reasoning, and NVIDIA NeMo audio templates across 12 SA languages."
    },
    {
      id: "srv-2",
      title: "BYDESIGN MEDICAL ENSUITE",
      desc: "Offline AI healthcare triage, multilingual patient profiling, hospital intake coordination, and clinician diagnostic portals."
    },
    {
      id: "srv-3",
      title: "AUDITORY & SOCIOLECT NLP",
      desc: "Ethnographic dialect mapping, PhraseRecord context resolution engines, and code-switching corpora for low-resource languages."
    },
    {
      id: "srv-4",
      title: "AI ETHICS, POLICY & GRANTS",
      desc: "POPIA/PAIA-compliant research governance, DCDT national AI policy submissions, and global research partnerships."
    }
  ],
  processSteps: [
    {
      num: "01",
      title: "FIELD & DIALECT DISCOVERY",
      desc: "Conducting focus groups, surveys, and dialect mapping across South African communities to capture authentic spoken sociolects."
    },
    {
      num: "02",
      title: "CONTEXTUAL DATA ARCHITECTURE",
      desc: "Structuring PhraseRecords, Context Resolution Engines (CRE), and native instructional datasets beyond literal translation."
    },
    {
      num: "03",
      title: "OFFLINE MODEL & VOICE INTEGRATION",
      desc: "Processing NVIDIA NeMo audio templates and fine-tuning Lesedi Edge V.1 & Bydesign for zero-data, offline edge execution."
    },
    {
      num: "04",
      title: "PILOT DEPLOYMENT & VALIDATION",
      desc: "Testing language authenticity and deploying across South African schools, hospitals, clinics, and public institutions."
    }
  ],
  metrics: [
    { id: "m1", label: "Official SA Languages Supported", value: "12" },
    { id: "m2", label: "Projected AI Adoption Lift", value: "76%" },
    { id: "m3", label: "Offline Target Reach in SA", value: "20M+" },
    { id: "m4", label: "Focus Group Research Cohort", value: "100+" }
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Chief Research & Development Officer (CRDO) & Board Member",
      company: "UmkhoAI (Pty) Ltd",
      period: "2025 — Present",
      location: "Randburg, Gauteng, South Africa",
      type: "Executive Board",
      highlights: [
        "Directs the R&D department for the world's first offline national AI ecosystem (Lesedi Edge V.1), backed by DCDT, the SA AI Association, and the NVIDIA Inception Programme.",
        "Spearheads the strategic shift from translation-only corpora to native African-language reasoning, voice-first STT/TTS pipelines, and cultural intelligence (Ubuntu norms & code-switching).",
        "Leads research grant applications and international collaborations with the Ethical AI Alliance (150 global teams), CSIR, SADiLaR, Esethu Framework, and Google.org AI for Government Innovation."
      ],
      tags: ["Chief R&D Officer", "Lesedi Edge V.1", "NVIDIA Inception", "Board of Directors"]
    },
    {
      id: "exp-2",
      role: "Founder & Lead Healthcare AI Architect",
      company: "Bydesign — Offline AI Medical Ensuite (UmkhoAI)",
      period: "2025 — Present",
      location: "Gauteng, South Africa",
      type: "Founder",
      highlights: [
        "Founded Bydesign, an offline AI-powered medical platform facilitating seamless patient care from initial consultation to treatment planning in all 12 official South African languages without Wi-Fi or mobile data.",
        "Architected comprehensive AI patient profiles (analyzing symptoms, medical history, and family history), integrated hospital intake scheduling, and a dedicated Medical Staff Portal for diagnostics and lab results.",
        "Led hospital pilot outreach across South African healthcare networks to eliminate linguistic barriers and load-shedding disruptions in clinical care."
      ],
      tags: ["Healthcare AI", "Founder", "Multilingual Care", "Offline Architecture"]
    },
    {
      id: "exp-3",
      role: "Principal Investigator — Auditory AI & Contextual Phrase Pipeline",
      company: "UmkhoAI Linguistic Research Lab",
      period: "2025 — 2026",
      location: "Johannesburg, South Africa",
      type: "Research Lead",
      highlights: [
        "Authored the 6-month South African Auditory AI Linguistic Research blueprint, conducting 100-participant focus groups across Tsotsitaal, Fanakalo, Kasi slang, Spitori, Kaaps Afrikaans, and ama2K speech.",
        "Co-designed the 9-stage Phrase-Based Datatypes & Context Resolution Engine (CRE) pipeline to resolve multi-meaning South African expressions ('eish', 'sharp sharp', 'yebo', 'haibo') in real time.",
        "Benchmarked African NLP datasets (Masakhane, InkubaLM, Esethu Framework, ViXSD) and led the national 'Send Us Your Slang' data campaign."
      ],
      tags: ["Auditory AI", "Computational Linguistics", "Data Pipelines", "Sociolect Research"]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Executive LLM Fine-Tuning, NLP Datasets & Low-Resource AI Research Track",
      institution: "DeepLearning.AI • Hugging Face NLP • Masakhane Research Network",
      period: "2025 — 2026",
      details: "Focused on Instruction-Tuning vs. Translation in Large Language Models, Hugging Face Datasets & PEFT/LoRA pipelines, Low-Resource Neural Machine Translation, AfroNLU/AfriQA benchmarking, and Constitutional AI / RLHF."
    },
    {
      id: "edu-2",
      degree: "Software-Defined Mesh Networking, Data Science & POPIA/PAIA Research Governance",
      institution: "UmkhoAI Executive Academy & South African Research Compliance",
      period: "Certified • 2026",
      details: "Specialized training in offline edge network deployment, NVIDIA NeMo audio template licensing, human-subjects research ethics, and South African intellectual property & data protection laws (POPIA / PAIA)."
    }
  ],
  skills: [
    { id: "sk-1", name: "African Language AI & Low-Resource NLP Research", category: "Research", level: 97 },
    { id: "sk-2", name: "Healthcare AI Systems (Bydesign Medical Ensuite)", category: "Product", level: 96 },
    { id: "sk-3", name: "Instructional Dataset & PhraseRecord Architecture", category: "Data & AI", level: 94 },
    { id: "sk-4", name: "Ethnographic Field Studies & Dialect Mapping", category: "Research", level: 95 },
    { id: "sk-5", name: "Executive R&D Strategy & Board Governance", category: "Leadership", level: 93 },
    { id: "sk-6", name: "Research Grant Writing & Institutional Partnerships", category: "Leadership", level: 92 },
    { id: "sk-7", name: "Language Authenticity Testing & Benchmarking", category: "Data & AI", level: 94 },
    { id: "sk-8", name: "POPIA / PAIA Ethical AI & Policy Submissions", category: "Product", level: 91 }
  ],
  projects: [
    {
      id: "proj-1",
      title: "BYDESIGN",
      subtitle: "OFFLINE AI MEDICAL ENSUITE",
      subline2: "FOUNDER & LEAD ARCHITECT",
      fullTitle: "Bydesign — Offline AI Medical Ensuite for South African Healthcare",
      category: "Healthcare AI",
      year: "2026",
      posterStyle: "velure",
      impact: "12 Official SA Languages • 100% Offline Clinical Care",
      summary: "Founded Bydesign at UmkhoAI—an offline AI-powered healthcare platform enabling patient triage, intake, and treatment planning in all 12 official South African languages without Wi-Fi or data.",
      challenge: "Patients in South African clinics and hospitals face severe connectivity gaps and language barriers when describing symptoms and medical history in English-only systems.",
      solution: "Built an offline AI Medical Ensuite featuring multilingual patient profiling, automated hospital appointment & intake coordination, and a dedicated Medical Staff Portal for diagnostics and lab results.",
      tags: ["Founder", "Healthcare AI", "12 SA Languages", "Offline Ensuite"]
    },
    {
      id: "proj-2",
      title: "AUDITORY AI",
      subtitle: "SA DIALECT & SLANG CORPUS",
      subline2: "PRINCIPAL INVESTIGATOR",
      fullTitle: "South African Auditory AI Linguistic Research & NVIDIA NeMo Templates",
      category: "Linguistic R&D",
      year: "2026",
      posterStyle: "calm",
      impact: "76% Projected AI Adoption Lift • 100-Participant Study",
      summary: "Led UmkhoAI's 6-month Auditory AI research blueprint and 'Send Us Your Slang' campaign to build speech templates for informal South African sociolects and regional dialects.",
      challenge: "Less than 0.1% of global AI datasets represent African languages, leaving Tsotsitaal, Fanakalo, Kasi slang, Spitori, and ama2K speech unrecognized by voice AI.",
      solution: "Designed a 100-participant ethnographic study across 11+ languages and 4 regional dialects, processing proprietary NVIDIA NeMo audio templates in partnership with CSIR, SADiLaR, and DCDT.",
      tags: ["Auditory AI", "Tsotsitaal & Kasi Slang", "NVIDIA NeMo", "CSIR / SADiLaR"]
    },
    {
      id: "proj-3",
      title: "LESEDI EDGE V.1",
      subtitle: "OFFLINE NATIONAL AI",
      subline2: "CHIEF R&D OFFICER",
      fullTitle: "Lesedi Edge V.1 — Voice-First Native Reasoning & Phrase Pipeline",
      category: "Core AI",
      year: "2026",
      posterStyle: "savor",
      impact: "4 Pilot Schools Onboarded • NVIDIA Inception Partner",
      summary: "Directed the R&D pivot for UmkhoAI's flagship offline chatbot (Lesedi Edge V.1), replacing literal translation lookup with native African-language reasoning and phrase-level context resolution.",
      challenge: "Models trained only on formal Bible and government texts think in English and fail on real-world code-switching, oral/voice-first interactions, and contextual slang like 'eish' or 'sharp sharp'.",
      solution: "Architected the 9-stage PhraseRecord & Context Resolution Engine (CRE) pipeline and 5,000+ native instructional pairs for voice-first deployment in South African schools and enterprises.",
      tags: ["Lesedi Edge V.1", "PhraseRecord CRE", "Voice-First AI", "Instruction Tuning"]
    },
    {
      id: "proj-4",
      title: "SOVEREIGN AI",
      subtitle: "GOVERNANCE & POLICY",
      subline2: "BOARD & ETHICAL AI ALLIANCE",
      fullTitle: "Sovereign African AI Governance, DCDT Policy & Ethical AI Alliance",
      category: "Governance",
      year: "2026",
      posterStyle: "forma",
      impact: "150-Team Ethical AI Alliance • 4 School Pilot MOUs",
      summary: "Co-leading UmkhoAI's Board governance, quarterly AERB Charter reviews, South African National AI Policy submissions (DCDT), and global research coordination with the Ethical AI Alliance.",
      challenge: "Ensuring strict POPIA/PAIA compliance, indigenous linguistic data sovereignty, and ethical human-subjects research while scaling offline AI across South African schools and municipalities.",
      solution: "Established POPIA/PAIA informed-consent frameworks, coordinated the Ethical AI Alliance 4-year LLM research collaboration, and supported school pilot rollouts (Mid Ennerdale, Florida Islamic, Solomondale, Afrika Tikkun).",
      tags: ["Board Governance", "Ethical AI Alliance", "DCDT AI Policy", "POPIA Compliance"]
    }
  ],
  testimonials: [
    {
      id: "t-1",
      quote: "BY DEVELOPING INFORMAL SPEECH AUDIO TEMPLATES THAT MOVE BEYOND TRADITIONAL TEXT ADAPTATIONS, WE CAN ENHANCE EVERYDAY AI ADOPTION BY 76% AMONG SOUTH AFRICANS.",
      author: "Dineo Sekgala",
      role: "CRDO at UmkhoAI & Founder of Bydesign"
    },
    {
      id: "t-2",
      quote: "AFRICA DOES NOT NEED THOUSANDS OF AI TOOLS THAT ONLY DO ONE THING. AFRICA NEEDS OFFLINE AI ECOSYSTEMS THAT REACH EVERYONE FROM NAIROBI TO SOWETO.",
      author: "Botshelo 'Kaykay' Baloyi",
      role: "Founder & CEO, UmkhoAI (Pty) Ltd"
    },
    {
      id: "t-3",
      quote: "THE ORGANISATIONS WHO CAME BEFORE US BUILT THE VOCABULARY. AT UMKHOAI R&D, WE ARE BUILDING THE NATIVE AFRICAN LANGUAGE INTELLIGENCE.",
      author: "UmkhoAI R&D Directorate",
      role: "Executive Research Brief • 2026"
    }
  ]
};

const PRESET_PERSONAS = [
  {
    id: "corporate",
    label: "CRDO @ UmkhoAI & Founder @ Bydesign",
    topTag: "CHIEF R&D OFFICER AT UMKHOAI • FOUNDER OF BYDESIGN",
    roleLine1: "CHIEF R&D",
    roleLine2: "OFFICER & FOUNDER",
    roleTitle: "Chief Research & Development Officer at UmkhoAI • Founder of Bydesign",
    headline: "Chief Research & Development Officer (CRDO) at UmkhoAI • Founder of Bydesign (Offline AI Medical Ensuite)",
    subheadline: "Building the world's first offline national AI ecosystem and multilingual healthcare technology for 20M+ South Africans across all 12 official languages and local sociolects."
  },
  {
    id: "tech",
    label: "Healthcare AI Founder (Bydesign)",
    topTag: "FOUNDER OF BYDESIGN • OFFLINE AI MEDICAL ENSUITE",
    roleLine1: "HEALTHCARE AI",
    roleLine2: "FOUNDER & LEAD",
    roleTitle: "Founder of Bydesign • Offline AI Medical Ensuite",
    headline: "Founder of Bydesign • Revolutionizing Healthcare Delivery in South Africa 100% Offline",
    subheadline: "Facilitating seamless patient care from initial consultation to hospital intake and treatment planning across all 12 official South African languages without Wi-Fi or data."
  },
  {
    id: "creative",
    label: "Principal Linguistic AI Researcher",
    topTag: "AUDITORY AI & AFRICAN LANGUAGE RESEARCH LEAD",
    roleLine1: "LINGUISTIC AI",
    roleLine2: "RESEARCH LEAD",
    roleTitle: "Principal Investigator • South African Auditory AI & Sociolects",
    headline: "Principal Investigator • Developing Open-Source & Offline Speech Templates for South African Languages",
    subheadline: "Leading ethnographic dialect mapping, NVIDIA NeMo audio template curation, and contextual phrase pipelines for Tsotsitaal, Fanakalo, Kasi slang, and 12 official SA languages."
  },
  {
    id: "finance",
    label: "Executive Board & AI Policy Lead",
    topTag: "EXECUTIVE BOARD MEMBER • AI ETHICS & GOVERNANCE",
    roleLine1: "EXECUTIVE BOARD",
    roleLine2: "R&D DIRECTOR",
    roleTitle: "Executive Board Member & CRDO • UmkhoAI (Pty) Ltd",
    headline: "Executive Board Director • Sovereign African AI Policy, Grants & Global Alliances",
    subheadline: "Advancing sovereign African AI infrastructure, POPIA/PAIA research governance, and international R&D partnerships with the Ethical AI Alliance, CSIR, SADiLaR, and DCDT."
  }
];

export default function App() {
  // Default to Version 2 ('v2' = Reddish Maroon Editorial Theme) as requested
  const [version, setVersion] = useState('v2');
  const [maroonSubTheme, setMaroonSubTheme] = useState('light'); // 'light' = Rose-Silk Cream & Deep Maroon Contrast; 'dark' = Full Velvet Maroon Noir
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem('dineo_portfolio_profile_umkhoai_v1');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore storage errors in sandbox
    }
    return INITIAL_PROFILE;
  });

  const [activeSection, setActiveSection] = useState('v2-overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [skillFilter, setSkillFilter] = useState('All');
  const [projectFilter, setProjectFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [heroPhotoMode, setHeroPhotoMode] = useState('formal'); // 'formal' | 'candid' | 'split'
  const [v2CareerTab, setV2CareerTab] = useState('experience'); // 'experience' | 'education' | 'impact'
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [linkedinPasteText, setLinkedinPasteText] = useState('');
  const [toast, setToast] = useState(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: 'Speaking / Role Inquiry', message: '' });
  const [submittedMessages, setSubmittedMessages] = useState([]);

  useEffect(() => {
    try {
      localStorage.setItem('dineo_portfolio_profile_umkhoai_v1', JSON.stringify(profile));
    } catch (e) {
      // ignore
    }
  }, [profile]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => {
      setToast((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  const copyToClipboard = (text, label) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(`${label} copied to clipboard!`);
        }).catch(() => {
          fallbackCopy(text, label);
        });
      } else {
        fallbackCopy(text, label);
      }
    } catch (e) {
      fallbackCopy(text, label);
    }
  };

  const fallbackCopy = (text, label) => {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast(`${label} copied to clipboard!`);
    } catch (e) {
      showToast(`Ready: ${text}`);
    }
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleApplyPreset = (preset) => {
    setProfile((prev) => ({
      ...prev,
      topTag: preset.topTag,
      roleLine1: preset.roleLine1,
      roleLine2: preset.roleLine2,
      roleTitle: preset.roleTitle,
      headline: preset.headline,
      subheadline: preset.subheadline
    }));
    showToast(`Applied "${preset.label}" positioning!`);
  };

  const handleParseLinkedInPaste = () => {
    if (!linkedinPasteText.trim()) {
      showToast("Paste some text from Dineo's LinkedIn or CV first!");
      return;
    }
    const lines = linkedinPasteText
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);

    const newHeadline = lines[0] && lines[0].length < 120 ? lines[0] : profile.headline;
    const bodyText = lines.slice(1).join(' ');

    setProfile((prev) => ({
      ...prev,
      topTag: newHeadline.toUpperCase().slice(0, 48),
      headline: newHeadline,
      subheadline: bodyText.length > 20 ? bodyText.slice(0, 200) : prev.subheadline,
      about: bodyText.length > 30 ? bodyText : prev.about
    }));
    setLinkedinPasteText('');
    showToast("Updated profile bio & headline from pasted LinkedIn text!");
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      showToast("Please complete your name, email, and message.");
      return;
    }
    const newEntry = {
      id: Date.now(),
      ...contactForm,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setSubmittedMessages((prev) => [newEntry, ...prev]);
    setContactForm({ name: '', email: '', subject: 'Speaking / Role Inquiry', message: '' });
    setIsContactModalOpen(false);
    showToast(`Message sent to ${profile.name}!`);
  };

  const handleDownloadResumeSummary = () => {
    const text = `${profile.name.toUpperCase()}\n${profile.headline}\nLocation: ${profile.location}\nLinkedIn: ${profile.linkedinUrl}\nOfficial Email: ${profile.email} | ${profile.secondaryEmail || 'dkl.sekgala@gmail.com'}\nPhone: ${profile.phone}\nWebsite: ${profile.website}\n\nABOUT\n${profile.about}\n\nSELECTED INITIATIVES\n${profile.projects
      .map((p) => `- ${p.fullTitle} (${p.year}) — ${p.impact}\n  ${p.summary}`)
      .join('\n\n')}\n\nEXPERIENCE\n${profile.experiences
      .map((e) => `- ${e.role} at ${e.company} (${e.period})\n  ${e.highlights.join(' ')}`)
      .join('\n\n')}\n\nEDUCATION & RESEARCH CREDENTIALS\n${profile.education
      .map((ed) => `- ${ed.degree}, ${ed.institution} (${ed.period})\n  ${ed.details}`)
      .join('\n\n')}\n`;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Dineo_Sekgala_UmkhoAI_Portfolio_Dossier.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("Downloaded Dineo's UmkhoAI & Bydesign portfolio dossier!");
  };

  const getCleanPortableReactCode = () => {
    return `// Dineo Sekgala — Mobile-First Reddish Maroon Editorial React Portfolio
// Chief Research & Development Officer (CRDO) at UmkhoAI | Founder of Bydesign
// Stack: React + Tailwind CSS + lucide-react
// Place dineo_portrait_1.jpg and dineo_portrait_2.jpg in your public/ folder

import React, { useState } from 'react';
import { MapPin, Linkedin, Mail, ArrowRight, ArrowUpRight, Eye, X, Download, Sparkles, Compass } from 'lucide-react';

const PORTRAIT_FORMAL = "/dineo_portrait_1.jpg";
const PORTRAIT_CANDID = "/dineo_portrait_2.jpg";

const PROFILE = ${JSON.stringify(profile, null, 2)};

export default function DineoSekgalaPortfolio() {
  const [photoMode, setPhotoMode] = useState('formal');
  const [selectedProject, setSelectedProject] = useState(null);
  const [careerTab, setCareerTab] = useState('experience');

  return (
    <div className="min-h-screen bg-[#FAF2F3] text-[#220910] font-sans antialiased overflow-x-hidden">
      {/* HERO SECTION (Mobile-First, Non-Overlapping) */}
      <section className="px-4 sm:px-8 lg:px-12 pt-6 pb-12 max-w-6xl mx-auto">
        <div className="flex items-center justify-between text-[11px] tracking-[0.16em] uppercase border-b border-[#D8B4BC] pb-3">
          <span className="truncate pr-2 font-semibold">{PROFILE.topTag}</span>
          <span className="shrink-0 text-[#8B1E3F] font-bold">✦ {PROFILE.availableDate}</span>
        </div>

        {/* Clean Non-Overlapping PORTFOLIO Masthead */}
        <div className="py-5 sm:py-8 my-3 border-b border-[#D8B4BC]/60 text-center">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none text-[#2A0811]">
            PORTFOLIO
          </h1>
        </div>

        {/* Mobile-First Content Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Portrait First on Mobile */}
          <div className="lg:col-span-5 lg:order-2">
            <div className="rounded-3xl overflow-hidden border-2 border-white shadow-xl bg-[#1A050B]">
              <img
                src={photoMode === 'candid' ? PORTRAIT_CANDID : PORTRAIT_FORMAL}
                alt={PROFILE.name}
                className="w-full h-80 sm:h-96 object-cover object-top"
              />
              <div className="p-3 bg-[#1A050B] text-rose-100 flex items-center justify-between text-xs">
                <span>{PROFILE.availability}</span>
                <div className="flex gap-1">
                  <button onClick={() => setPhotoMode('formal')} className="px-2.5 py-1 rounded-full bg-[#8B1E3F] text-white">Studio</button>
                  <button onClick={() => setPhotoMode('candid')} className="px-2.5 py-1 rounded-full bg-white/10">Candid</button>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Intro Copy */}
          <div className="lg:col-span-7 lg:order-1 space-y-5">
            <p className="text-xs tracking-[0.2em] uppercase text-[#8B1E3F] font-bold">{PROFILE.creativeLabel}</p>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-wider uppercase leading-tight">
              {PROFILE.roleLine1} <span className="block">{PROFILE.roleLine2}</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#4A1C28] max-w-xl">{PROFILE.subheadline}</p>
            <div className="p-4 rounded-2xl bg-white/90 border border-[#E4C6CC]">
              <div className="font-serif text-3xl sm:text-5xl text-[#8B1E3F] uppercase leading-none">
                {PROFILE.name}
              </div>
              <p className="text-xs opacity-80 mt-2">{PROFILE.location} • {PROFILE.email}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}`;
  };

  const handleDownloadReactCodeFile = () => {
    const codeText = getCleanPortableReactCode();
    const blob = new Blob([codeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'DineoSekgalaPortfolio.jsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("Downloaded clean DineoSekgalaPortfolio.jsx file!");
  };

  const skillCategories = ['All', ...Array.from(new Set(profile.skills.map((s) => s.category)))];
  const filteredSkills = skillFilter === 'All'
    ? profile.skills
    : profile.skills.filter((s) => s.category === skillFilter);

  const projectCategories = ['All', ...Array.from(new Set(profile.projects.map((p) => p.category)))];
  const filteredProjects = projectFilter === 'All'
    ? profile.projects
    : profile.projects.filter((p) => p.category === projectFilter);

  const isMaroon = version === 'v2';
  const isFullDark = maroonSubTheme === 'dark';

  const palette = isMaroon
    ? {
        name: "Version 2: Reddish Maroon Editorial (Mobile-First)",
        lightBandBg: isFullDark
          ? "bg-gradient-to-br from-[#2B0812] via-[#1F050C] to-[#160308] text-[#FAF0F2]"
          : "bg-gradient-to-br from-[#FAF2F3] via-[#F4E5E8] to-[#ECD6DB] text-[#220910]",
        servicesBandBg: isFullDark
          ? "bg-[#22070F] text-[#FAF0F2]"
          : "bg-[#F7EDEF] text-[#220910]",
        darkBandBg: "bg-[#1A050B] text-[#FAF0F2]",
        footerBandBg: "bg-[#140308] text-[#FAF0F2]",
        mastheadText: isFullDark ? "text-[#F5E1E5]" : "text-[#2A0811]",
        accentGoldText: isFullDark ? "text-[#E88D9E]" : "text-[#8B1E3F]",
        accentLightGold: "text-[#E598A6]",
        accentRule: "bg-[#8B1E3F]",
        dividerLine: isFullDark ? "border-[#591527]" : "border-[#D8B4BC]",
        darkBandBorder: "border-[#4A1221]",
        primaryPill: "bg-[#8B1E3F] hover:bg-[#701631] text-white",
        outlinePill: isFullDark
          ? "border-rose-300/30 text-rose-100 hover:bg-white/10"
          : "border-[#8B1E3F]/35 text-[#4A0E20] hover:bg-[#8B1E3F]/10",
        cardSurface: isFullDark
          ? "bg-[#2C0913] border-[#591527]"
          : "bg-white/90 border-[#E4C6CC]",
        barGradient: "from-[#8B1E3F] to-[#D97286]"
      }
    : {
        name: "Version 1: Curated Champagne & Emerald Noir",
        lightBandBg: isFullDark
          ? "bg-gradient-to-br from-[#0B1915] via-[#07120F] to-[#050C0A] text-[#F4EFE6]"
          : "bg-gradient-to-br from-[#F5F0E6] via-[#EDE4D5] to-[#E5D9C5] text-[#171614]",
        servicesBandBg: isFullDark
          ? "bg-[#0B1714] text-[#F4EFE6]"
          : "bg-[#F2ECE1] text-[#171614]",
        darkBandBg: "bg-[#0D1110] text-[#F4EFE6]",
        footerBandBg: "bg-[#090C0B] text-[#F4EFE6]",
        mastheadText: isFullDark ? "text-[#F4EFE6]" : "text-[#151412]",
        accentGoldText: isFullDark ? "text-[#D4AF37]" : "text-[#9C7A44]",
        accentLightGold: "text-[#C5A059]",
        accentRule: "bg-[#9C7A44]",
        dividerLine: isFullDark ? "border-emerald-900/60" : "border-[#D5C7B2]",
        darkBandBorder: "border-white/15",
        primaryPill: "bg-[#12352B] hover:bg-[#0D2820] text-[#F4EFE6]",
        outlinePill: isFullDark
          ? "border-amber-300/30 text-amber-100 hover:bg-white/10"
          : "border-[#9C7A44]/40 text-[#3B3020] hover:bg-[#9C7A44]/10",
        cardSurface: isFullDark
          ? "bg-[#11221D] border-emerald-800/40"
          : "bg-white/85 border-[#DED3C1]",
        barGradient: "from-[#12352B] to-[#C5A059]"
      };

  const currentTestimonial =
    profile.testimonials[activeTestimonialIdx % profile.testimonials.length] ||
    profile.testimonials[0];

  const nameParts = profile.name.trim().split(' ');
  const firstName = (nameParts[0] || 'DINEO').toUpperCase();
  const lastName = (nameParts.slice(1).join(' ') || 'SEKGALA').toUpperCase();

  return (
    <div className="min-h-screen font-sans antialiased selection:bg-[#8B1E3F] selection:text-white overflow-x-hidden">
      {/* =====================================================================
          TOP MOBILE-FIRST STUDIO BAR (Version 2 Default + Get Code + Edit)
         ===================================================================== */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#160308]/95 border-b border-rose-500/20 text-white px-3 sm:px-6 py-2.5 shadow-xl">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Mobile-First Theme Toggle */}
          <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10">
            <button
              type="button"
              onClick={() => setVersion('v2')}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                version === 'v2'
                  ? 'bg-gradient-to-r from-[#8B1E3F] to-[#A6264C] text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Palette className="w-3.5 h-3.5 text-rose-200 shrink-0" />
              <span>Version 2: Maroon</span>
            </button>

            <button
              type="button"
              onClick={() => setVersion('v1')}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                version === 'v1'
                  ? 'bg-gradient-to-r from-[#9C7A44] to-[#12352B] text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="hidden xs:inline">Version 1:</span>
              <span>Emerald</span>
            </button>
          </div>

          {/* Right: Surface Contrast, Code Export & Profile Editor */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setMaroonSubTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
              className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/15 text-rose-100 border border-white/15 transition"
              title="Toggle Soft Rose-Silk Contrast vs Full Velvet Dark Mode"
            >
              {maroonSubTheme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>

            <button
              type="button"
              onClick={() => setIsCodeModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 border border-rose-400/30 transition"
            >
              <Code className="w-3.5 h-3.5 shrink-0" />
              <span>Get React Code</span>
            </button>

            <button
              type="button"
              onClick={() => setIsEditorOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-400/20 hover:bg-amber-400/30 text-amber-200 border border-amber-400/30 transition"
            >
              <Edit3 className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">Customize</span>
            </button>
          </div>
        </div>
      </div>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-5 right-4 left-4 sm:left-auto z-50 flex items-center justify-between sm:justify-start gap-2.5 px-4 py-3 rounded-2xl bg-neutral-900 text-white border border-white/15 shadow-2xl">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-medium">{toast}</span>
          </div>
          <button
            type="button"
            onClick={() => setToast(null)}
            className="text-neutral-400 hover:text-white ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* =====================================================================
          BAND 1: MOBILE-FIRST EDITORIAL HERO (ZERO OVERLAPPING WORDS)
         ===================================================================== */}
      <section
        id="v2-overview"
        className={`relative overflow-hidden transition-colors duration-500 ${palette.lightBandBg}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              'linear-gradient(125deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.4) 52%, rgba(0,0,0,0.03) 76%, rgba(255,255,255,0.45) 100%)'
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 pt-4 sm:pt-7 pb-10 sm:pb-16">
          {/* 1A. Top Header Bar */}
          <div className={`flex items-center justify-between gap-3 pb-3 border-b ${palette.dividerLine}`}>
            <span className="text-[10px] sm:text-xs tracking-[0.12em] sm:tracking-[0.18em] uppercase font-semibold truncate">
              {profile.topTag}
            </span>

            <nav className="hidden md:flex items-center gap-6 text-[11px] tracking-[0.18em] uppercase font-medium opacity-85">
              {[
                { id: 'v2-work', label: 'Selected Works' },
                { id: 'v1-about', label: 'R&D Pillars' },
                { id: 'v2-journey', label: 'Experience' },
                { id: 'v2-contact', label: 'Connect' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="hover:opacity-100 transition py-1"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <span className={`text-xs font-semibold ${palette.accentGoldText}`}>
                ✦ {profile.availableDate || '2026'}
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className={`md:hidden p-2 rounded-lg border ${palette.outlinePill}`}
                title="Toggle Mobile Navigation"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Collapsible Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className={`md:hidden mt-3 p-4 rounded-2xl border space-y-2 ${palette.cardSurface}`}>
              {[
                { id: 'v2-work', label: '01. Selected Works (Bydesign & UmkhoAI)' },
                { id: 'v1-about', label: '02. R&D Services & Methodology' },
                { id: 'v2-journey', label: '03. Executive Experience & Skills' },
                { id: 'v2-contact', label: '04. Connect & Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-black/5 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </button>
              ))}
            </div>
          )}

          {/* 1B. DEDICATED NON-OVERLAPPING "PORTFOLIO" MASTHEAD */}
          <div className={`py-4 sm:py-7 my-3 sm:my-5 border-b ${palette.dividerLine} text-center`}>
            <h1
              className={`font-serif font-normal tracking-tight sm:tracking-[-0.02em] leading-none text-5xl sm:text-7xl md:text-8xl lg:text-[136px] select-none break-words ${palette.mastheadText}`}
              style={{ fontFamily: "'Playfair Display', 'Didot', 'Bodoni MT', Georgia, serif" }}
            >
              PORTFOLIO
            </h1>
          </div>

          {/* 1C. MOBILE-FIRST HERO CONTENT GRID (Zero overlapping text) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pt-2">
            {/* PORTRAIT COLUMN: First on mobile, right-side on desktop */}
            <div className="lg:col-span-5 lg:order-2">
              <div className="max-w-sm mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-2 border-white/70 bg-[#1A050B]">
                <div className="relative h-[340px] sm:h-[410px] w-full overflow-hidden group">
                  {heroPhotoMode === 'formal' && (
                    <img
                      src={PORTRAIT_FORMAL}
                      alt={profile.name}
                      className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105"
                    />
                  )}
                  {heroPhotoMode === 'candid' && (
                    <img
                      src={PORTRAIT_CANDID}
                      alt={profile.name}
                      className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-105"
                    />
                  )}
                  {heroPhotoMode === 'split' && (
                    <div className="grid grid-cols-2 w-full h-full">
                      <img
                        src={PORTRAIT_FORMAL}
                        alt="Dineo Formal"
                        className="w-full h-full object-cover object-top"
                      />
                      <img
                        src={PORTRAIT_CANDID}
                        alt="Dineo Candid"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      setLightboxImage(heroPhotoMode === 'candid' ? PORTRAIT_CANDID : PORTRAIT_FORMAL)
                    }
                    className="absolute top-3 right-3 p-2.5 rounded-full bg-black/65 text-white hover:bg-black transition backdrop-blur-md"
                    title="View Fullscreen Portrait"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Dedicated Non-Overlapping Portrait Footer Bar */}
                <div className="p-3 sm:p-3.5 bg-[#1A050B] text-white border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] text-rose-200/90 flex items-center gap-1">
                    <Camera className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>Portrait View:</span>
                  </span>
                  <div className="flex items-center gap-1">
                    {[
                      { id: 'formal', label: 'Studio' },
                      { id: 'candid', label: 'Candid' },
                      { id: 'split', label: 'Dual' }
                    ].map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setHeroPhotoMode(m.id)}
                        className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition ${
                          heroPhotoMode === m.id
                            ? 'bg-[#8B1E3F] text-white'
                            : 'bg-white/10 text-neutral-300 hover:text-white'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* EDITORIAL COPY COLUMN */}
            <div className="lg:col-span-7 lg:order-1 space-y-5 text-left">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <p className={`text-xs tracking-[0.18em] uppercase font-bold ${palette.accentGoldText}`}>
                    {profile.creativeLabel}
                  </p>
                  <h2 className="text-2xl sm:text-4xl font-semibold tracking-[0.06em] uppercase leading-tight">
                    {profile.roleLine1}
                    <span className="block">{profile.roleLine2}</span>
                  </h2>
                  <div className={`w-12 h-0.5 mt-2 ${palette.accentRule}`} />
                </div>

                {/* Circular Monogram Emblem */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-full border border-current/15 flex flex-col items-center justify-center p-2 text-center">
                  <span className="text-[7px] uppercase tracking-[0.16em] opacity-75 leading-tight">
                    UMKHOAI CRDO
                    <br />
                    &amp; BYDESIGN
                  </span>
                  <span
                    className={`font-serif text-2xl sm:text-3xl leading-none my-0.5 ${palette.accentGoldText}`}
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    D
                  </span>
                  <span className={`text-[9px] ${palette.accentGoldText}`}>✦ ZA ✦</span>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed max-w-xl opacity-90">
                {profile.subheadline}
              </p>

              {/* Stacked Editorial Serif Name + Verified Role Card */}
              <div className={`p-4 sm:p-5 rounded-2xl border ${palette.cardSurface}`}>
                <div
                  className={`font-serif text-3xl sm:text-5xl tracking-[0.04em] uppercase leading-none ${palette.accentGoldText}`}
                  style={{ fontFamily: "'Playfair Display', 'Didot', Georgia, serif" }}
                >
                  <span>{firstName} </span>
                  <span>{lastName}</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold mt-2 opacity-90">
                  {profile.headline}
                </p>
                <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs opacity-80">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    {profile.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    {profile.email}
                  </span>
                </div>
              </div>

              {/* 4 Key Impact Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {profile.metrics.map((m) => (
                  <div key={m.id} className={`p-3 rounded-xl border ${palette.cardSurface}`}>
                    <div className={`font-serif text-xl sm:text-2xl font-bold ${palette.accentGoldText}`}>
                      {m.value}
                    </div>
                    <div className="text-[11px] opacity-80 leading-snug mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Mobile-First Action Buttons */}
              <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => scrollToSection('v2-work')}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs tracking-wider uppercase font-semibold transition shadow-md ${palette.primaryPill}`}
                >
                  <span>Explore UmkhoAI &amp; Bydesign Work</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleDownloadResumeSummary}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs tracking-wider uppercase font-semibold border transition ${palette.outlinePill}`}
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
              </div>

              {/* Role Positioning Quick-Switch Pills */}
              <div className="pt-1">
                <span className="block text-[10px] uppercase tracking-[0.16em] opacity-70 mb-2">
                  Highlight Leadership Angle:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_PERSONAS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleApplyPreset(preset)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition ${
                        profile.headline === preset.headline
                          ? `${palette.primaryPill} border-transparent`
                          : `${palette.outlinePill}`
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          BAND 2: MOBILE-FIRST "SELECTED WORKS" GALLERY (NON-OVERLAPPING CARDS)
         ===================================================================== */}
      <section id="v2-work" className={`py-12 sm:py-16 ${palette.darkBandBg}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <span className={`text-xs tracking-[0.22em] uppercase font-semibold ${palette.accentLightGold}`}>
              SELECTED WORKS &amp; RESEARCH INITIATIVES
            </span>

            <div className={`hidden sm:block flex-1 h-px ${palette.darkBandBorder} border-t mx-4`} />

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-rose-200 hover:text-white transition"
            >
              <span>VIEW LINKEDIN</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setProjectFilter(cat)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold border transition ${
                  projectFilter === cat
                    ? 'bg-[#8B1E3F] text-white border-transparent shadow-sm'
                    : 'bg-white/80 text-neutral-700 border-black/10 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile-First 1-col -> 2-col -> 4-col Non-Overlapping Poster Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProjects.map((proj, idx) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="group cursor-pointer rounded-2xl border border-white/15 bg-[#230710] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                {/* 1. Poster Top Meta Bar */}
                <div className="px-4 py-3 bg-black/40 border-b border-white/10 flex items-center justify-between text-[10px] tracking-[0.14em] uppercase text-rose-200/80">
                  <span>0{idx + 1} • {proj.category}</span>
                  <span>{proj.year}</span>
                </div>

                {/* 2. Dedicated Visual Artwork Area */}
                <div className="relative h-52 w-full overflow-hidden bg-[#140308]">
                  {proj.posterStyle === 'velure' && (
                    <img
                      src={PORTRAIT_FORMAL}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"
                    />
                  )}

                  {proj.posterStyle === 'calm' && (
                    <div className="w-full h-full bg-gradient-to-b from-[#EDE4D7] to-[#D5C5B0] text-[#221D1A] p-5 flex flex-col items-center justify-center text-center">
                      <div className="w-14 h-14 rounded-full bg-[#8B1E3F]/15 border border-[#8B1E3F]/30 flex items-center justify-center mb-2.5">
                        <Compass className="w-6 h-6 text-[#8B1E3F]" />
                      </div>
                      <span
                        className="font-serif text-lg font-bold"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        Auditory AI
                      </span>
                      <span className="text-[10px] uppercase tracking-widest opacity-75 mt-1">
                        12 SA Languages + Slang
                      </span>
                    </div>
                  )}

                  {proj.posterStyle === 'savor' && (
                    <div className="w-full h-full bg-gradient-to-br from-[#3B0C19] via-[#22060E] to-[#110206] p-5 flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 rounded-full bg-[#F4EFE6] text-[#8B1E3F] shadow-xl flex flex-col items-center justify-center border-4 border-rose-300/30">
                        <Sparkles className="w-6 h-6" />
                        <span className="text-[8px] font-bold tracking-widest uppercase mt-0.5">
                          LESEDI V.1
                        </span>
                      </div>
                      <span className="text-[10px] tracking-[0.16em] uppercase text-rose-200/85 mt-3">
                        Offline Voice-First AI
                      </span>
                    </div>
                  )}

                  {proj.posterStyle === 'forma' && (
                    <img
                      src={PORTRAIT_CANDID}
                      alt={proj.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
                    />
                  )}
                </div>

                {/* 3. Dedicated Non-Overlapping Poster Caption & CTA Footer */}
                <div className="p-4 sm:p-5 bg-[#1A050B] border-t border-white/10 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3
                      className="font-serif text-lg tracking-[0.1em] uppercase text-white group-hover:text-rose-300 transition"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {proj.title}
                    </h3>
                    <p className="text-[10px] tracking-[0.12em] uppercase text-rose-200/75">
                      {proj.subtitle} • {proj.subline2}
                    </p>
                    <p className="text-xs text-neutral-300 line-clamp-3 leading-relaxed pt-1">
                      {proj.summary}
                    </p>
                  </div>
                  <div className="pt-3 flex items-center justify-between text-xs font-semibold text-rose-300">
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          BAND 3: MOBILE-FIRST SERVICES, MY PROCESS & NON-OVERLAPPING QUOTE CARD
         ===================================================================== */}
      <section id="v1-about" className={`py-12 sm:py-16 transition-colors duration-500 ${palette.servicesBandBg}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10">
          {/* Executive Bio Banner */}
          <div className={`mb-8 p-5 sm:p-7 rounded-2xl border ${palette.cardSurface}`}>
            <p className={`text-xs tracking-[0.2em] uppercase font-bold mb-2 ${palette.accentGoldText}`}>
              ABOUT DINEO SEKGALA • EXECUTIVE SUMMARY
            </p>
            <p className="text-sm sm:text-base leading-relaxed opacity-90">
              {profile.about}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* COLUMN 1 (3 COLS): SERVICES / R&D PILLARS */}
            <div className={`lg:col-span-3 p-5 sm:p-6 rounded-2xl border ${palette.cardSurface} space-y-5`}>
              <h3 className={`text-xs tracking-[0.22em] uppercase font-bold ${palette.accentGoldText}`}>
                CORE PILLARS
              </h3>

              <div className="space-y-4">
                {profile.services.map((srv, idx) => (
                  <div key={srv.id} className="flex items-start gap-3">
                    <span className={`mt-0.5 text-sm shrink-0 ${palette.accentGoldText}`}>
                      {idx === 0 ? '❖' : idx === 1 ? '◈' : idx === 2 ? '▣' : '✦'}
                    </span>
                    <div>
                      <h4 className="text-xs tracking-[0.1em] uppercase font-bold">
                        {srv.title}
                      </h4>
                      <p className="text-xs opacity-80 mt-1 leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 2 (4 COLS): R&D METHODOLOGY (01 - 04) */}
            <div className={`lg:col-span-4 p-5 sm:p-6 rounded-2xl border ${palette.cardSurface} space-y-5`}>
              <h3 className={`text-xs tracking-[0.22em] uppercase font-bold ${palette.accentGoldText}`}>
                R&amp;D METHODOLOGY
              </h3>

              <div className="space-y-4">
                {profile.processSteps.map((step) => (
                  <div key={step.num} className="flex items-start gap-3.5">
                    <span
                      className={`font-serif text-2xl leading-none shrink-0 ${palette.accentGoldText}`}
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h4 className="text-xs tracking-[0.12em] uppercase font-bold">
                        {step.title}
                      </h4>
                      <p className="text-xs opacity-80 mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 3 (5 COLS): EDITORIAL PORTRAIT + SEPARATE QUOTE FOOTER (ZERO OVERLAP) */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-black/10 shadow-xl bg-[#1A050B] text-white flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden group">
                <img
                  src={PORTRAIT_CANDID}
                  alt={profile.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
                />
                <button
                  type="button"
                  onClick={() => setLightboxImage(PORTRAIT_CANDID)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-black transition"
                  title="Expand Portrait"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5 sm:p-6 bg-gradient-to-b from-[#260812] to-[#18040A] border-t border-white/10 space-y-3">
                <div className="flex items-start gap-3">
                  <span className={`font-serif text-3xl leading-none shrink-0 ${palette.accentLightGold}`}>
                    “
                  </span>
                  <p
                    className="font-serif text-xs sm:text-sm tracking-[0.06em] uppercase leading-relaxed text-rose-50"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {currentTestimonial.quote}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <div className="text-[11px] text-rose-200/80">
                    {currentTestimonial.author} • {currentTestimonial.role}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      {profile.testimonials.map((t, idx) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setActiveTestimonialIdx(idx)}
                          className={`h-2 rounded-full transition-all ${
                            activeTestimonialIdx === idx
                              ? 'w-5 bg-rose-400'
                              : 'w-2 bg-white/30 hover:bg-white/60'
                          }`}
                          title={`Quote ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <span
                      className={`font-serif text-base tracking-[0.15em] ${palette.accentLightGold}`}
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      D.S.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================================
              MOBILE-FIRST EXPERIENCE, EDUCATION & SKILLS DOSSIER
             ================================================================= */}
          <div id="v2-journey" className={`mt-12 sm:mt-16 pt-10 sm:pt-14 border-t ${palette.dividerLine}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <p className={`text-xs tracking-[0.2em] uppercase font-bold ${palette.accentGoldText}`}>
                  UMKHOAI &amp; BYDESIGN TRACK RECORD
                </p>
                <h3
                  className="font-serif text-2xl sm:text-3xl mt-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Executive Roles, Research Training &amp; Skills
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'experience', label: 'Experience' },
                  { id: 'education', label: 'R&D Credentials' },
                  { id: 'impact', label: 'Skills Matrix' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setV2CareerTab(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase font-semibold transition ${
                      v2CareerTab === tab.id
                        ? `${palette.primaryPill} shadow`
                        : `border ${palette.outlinePill}`
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {v2CareerTab === 'experience' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {profile.experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className={`p-5 sm:p-6 rounded-2xl border flex flex-col justify-between ${palette.cardSurface}`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
                        <span className={`font-bold uppercase tracking-wider ${palette.accentGoldText}`}>
                          {exp.period}
                        </span>
                        <span className="opacity-75">{exp.type}</span>
                      </div>
                      <h4 className="font-serif text-lg font-bold mt-2 leading-snug">{exp.role}</h4>
                      <div className="text-xs font-semibold opacity-80 mt-0.5">
                        {exp.company} • {exp.location}
                      </div>

                      <ul className="mt-4 space-y-2 text-xs opacity-90 leading-relaxed">
                        {exp.highlights.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className={`mt-1 text-[10px] shrink-0 ${palette.accentGoldText}`}>✦</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 pt-3 border-t border-current/10 flex flex-wrap gap-1.5">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider border border-current/20 opacity-85"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {v2CareerTab === 'education' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {profile.education.map((ed) => (
                  <div
                    key={ed.id}
                    className={`p-5 sm:p-6 rounded-2xl border ${palette.cardSurface}`}
                  >
                    <span className={`text-xs font-bold uppercase tracking-widest ${palette.accentGoldText}`}>
                      {ed.period}
                    </span>
                    <h4 className="font-serif text-lg font-bold mt-1 leading-snug">{ed.degree}</h4>
                    <div className="text-xs font-semibold opacity-80 mt-0.5">{ed.institution}</div>
                    <p className="text-xs opacity-85 mt-3 leading-relaxed">{ed.details}</p>
                  </div>
                ))}
              </div>
            )}

            {v2CareerTab === 'impact' && (
              <div id="v2-skills" className={`p-5 sm:p-6 rounded-2xl border space-y-5 ${palette.cardSurface}`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs uppercase tracking-widest font-bold">
                    Filter by Competency Pillar:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skillCategories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSkillFilter(cat)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${
                          skillFilter === cat
                            ? 'bg-[#8B1E3F] text-white border-transparent'
                            : 'bg-white/80 text-neutral-700 border-black/10'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredSkills.map((sk) => (
                    <div key={sk.id} className="p-4 rounded-xl border border-current/10 bg-black/5">
                      <div className="flex justify-between gap-2 text-xs font-semibold mb-2">
                        <span>{sk.name}</span>
                        <span className={palette.accentGoldText}>{sk.level}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-black/15 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${palette.barGradient}`}
                          style={{ width: `${sk.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================================
          BAND 4: DARK LUXURY MOBILE-FIRST FOOTER
         ===================================================================== */}
      <footer id="v2-contact" className={`py-12 sm:py-16 ${palette.footerBandBg}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 items-start lg:items-center">
            <div className="lg:col-span-4 space-y-2">
              <h2
                className={`font-serif text-2xl sm:text-3xl tracking-[0.1em] uppercase leading-snug ${palette.accentLightGold}`}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                LET’S CREATE
                <br />
                SOMETHING
                <br />
                BEAUTIFUL
              </h2>
              <div className={`text-base ${palette.accentLightGold}`}>✦</div>
            </div>

            <div className={`lg:col-span-3 lg:border-l lg:pl-6 ${palette.darkBandBorder} space-y-2 text-xs text-neutral-300`}>
              <div className={`tracking-[0.2em] uppercase font-semibold mb-2 ${palette.accentLightGold}`}>
                LET’S CONNECT
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(profile.email, 'Official UmkhoAI email')}
                className="block hover:text-white transition text-left break-all"
              >
                {profile.email}
              </button>
              <button
                type="button"
                onClick={() => copyToClipboard(profile.secondaryEmail || 'dkl.sekgala@gmail.com', 'Personal email')}
                className="block text-neutral-400 hover:text-white transition text-left break-all"
              >
                {profile.secondaryEmail || 'dkl.sekgala@gmail.com'}
              </button>
              <div>{profile.phone}</div>
              <div>{profile.website}</div>
              <div className="text-neutral-400 pt-0.5">{profile.location}</div>
            </div>

            <div className="lg:col-span-3 space-y-2.5 text-xs text-neutral-300">
              <div className={`tracking-[0.2em] uppercase font-semibold mb-2 ${palette.accentLightGold}`}>
                FOLLOW &amp; CODE
              </div>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition"
              >
                <span className="w-5 h-5 rounded border border-white/25 flex items-center justify-center text-[10px] font-bold shrink-0">
                  in
                </span>
                <span className="truncate">linkedin.com/in/dineo-sekgala</span>
              </a>

              <button
                type="button"
                onClick={() => setIsCodeModalOpen(true)}
                className="flex items-center gap-2.5 text-rose-300 hover:text-white transition text-left"
              >
                <Code className="w-4 h-4 shrink-0" />
                <span className="underline underline-offset-4">View / Copy Clean React Code</span>
              </button>

              <button
                type="button"
                onClick={() => setIsContactModalOpen((prev) => !prev)}
                className="flex items-center gap-2.5 text-amber-200 hover:text-white transition text-left pt-0.5"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="underline underline-offset-4">Write a Direct Message</span>
              </button>
            </div>

            <div className="lg:col-span-2 flex justify-start lg:justify-end">
              <div
                className={`inline-flex items-center font-serif text-4xl sm:text-5xl tracking-widest select-none ${palette.accentLightGold} opacity-85`}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                <span>D</span>
                <span className="mx-2 text-3xl font-light opacity-60">/</span>
                <span>S</span>
              </div>
            </div>
          </div>

          {isContactModalOpen && (
            <form
              onSubmit={handleContactSubmit}
              className="mt-8 p-5 sm:p-7 rounded-2xl bg-white/5 border border-white/15 space-y-4 text-white"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-base sm:text-lg tracking-wider uppercase">
                  Direct Inquiry to {profile.name}
                </h3>
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 rounded-xl border border-white/15 text-sm bg-black/40 text-white"
                />
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  placeholder="Your Email"
                  className="w-full px-4 py-2.5 rounded-xl border border-white/15 text-sm bg-black/40 text-white"
                />
                <select
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/15 text-sm bg-black/40 text-white"
                >
                  <option value="Speaking / Role Inquiry">R&amp;D / Partnership Inquiry</option>
                  <option value="Bydesign Hospital Pilot">Bydesign Hospital Pilot</option>
                  <option value="Advisory">Speaking / Advisory</option>
                </select>
              </div>

              <textarea
                rows={3}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                placeholder={`Hi ${profile.name.split(' ')[0]}, I'd love to connect regarding Bydesign or UmkhoAI R&D...`}
                className="w-full px-4 py-2.5 rounded-xl border border-white/15 text-sm bg-black/40 text-white"
              />

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold ${palette.primaryPill}`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold border border-white/20 hover:bg-white/10"
                >
                  <span>Send Inquiry</span>
                </button>
              </div>
            </form>
          )}

          {submittedMessages.length > 0 && (
            <div className="mt-6 space-y-2">
              <div className={`text-xs font-semibold ${palette.accentLightGold}`}>
                Sent Inquiries ({submittedMessages.length}):
              </div>
              {submittedMessages.map((m) => (
                <div
                  key={m.id}
                  className="p-3 rounded-xl border border-white/10 bg-white/5 text-xs flex justify-between"
                >
                  <span>
                    <strong>{m.name}</strong> ({m.subject}): “{m.message}”
                  </span>
                  <span className="opacity-60">{m.timestamp}</span>
                </div>
              ))}
            </div>
          )}

          {/* Preserved Section Anchors & Action Buttons */}
          <div id="v1-projects" className="hidden" />
          <div id="circleTextPath" className="hidden" />
          <div id="v1-experience" className="hidden" />
          <div id="v1-skills" className="hidden" />
          <div id="v1-gallery" className="hidden" />
          <div id="v1-contact" className="hidden" />
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-neutral-400">
            <span>
              © 2026 {profile.name} • CRDO at UmkhoAI &amp; Founder of Bydesign
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleDownloadResumeSummary}
                className="px-3 py-1.5 rounded-full border border-white/15 hover:bg-white/10 text-neutral-200 transition"
              >
                Download Dossier (.txt)
              </button>
              <button
                type="button"
                onClick={handleDownloadResumeSummary}
                className="px-3 py-1.5 rounded-full border border-white/15 hover:bg-white/10 text-neutral-200 transition"
              >
                Save CV Brief
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          MODAL 1: CASE STUDY DETAIL MODAL
         ===================================================================== */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-xl w-full rounded-3xl bg-neutral-900 border border-white/15 text-white p-6 sm:p-8 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-rose-300 font-semibold">
                  {selectedProject.category} • {selectedProject.year}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">
                  {selectedProject.fullTitle || selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-rose-200">
              Key Impact: {selectedProject.impact}
            </div>

            <div className="space-y-3 text-sm text-neutral-300">
              <div>
                <strong className="text-white block text-xs uppercase tracking-wider mb-1">
                  Overview
                </strong>
                <p>{selectedProject.summary}</p>
              </div>
              <div>
                <strong className="text-white block text-xs uppercase tracking-wider mb-1">
                  The Challenge
                </strong>
                <p>{selectedProject.challenge}</p>
              </div>
              <div>
                <strong className="text-white block text-xs uppercase tracking-wider mb-1">
                  Execution &amp; Solution
                </strong>
                <p>{selectedProject.solution}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {selectedProject.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs bg-white/5 text-neutral-200 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 2: FULLSCREEN PORTRAIT LIGHTBOX
         ===================================================================== */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative max-w-2xl w-full flex flex-col items-center">
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="self-end mb-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              <span>Close Preview</span>
            </button>
            <img
              src={lightboxImage}
              alt="Dineo Sekgala Fullscreen"
              className="max-h-[82vh] w-auto rounded-2xl border border-white/20 shadow-2xl object-contain"
            />
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 3: CLEAN REACT SOURCE CODE VIEWER & DOWNLOADER
         ===================================================================== */}
      {isCodeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-3xl w-full rounded-3xl bg-neutral-950 border border-white/15 text-white p-5 sm:p-7 space-y-4 shadow-2xl max-h-[90vh] flex flex-col">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold flex items-center gap-2">
                  <Code className="w-4 h-4 text-rose-400" />
                  <span>Mobile-First Reddish Maroon React Code (.jsx)</span>
                </h3>
                <p className="text-xs text-neutral-400">
                  Pre-populated with Dineo Sekgala’s UmkhoAI CRDO &amp; Bydesign Founder profile data.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCodeModalOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <pre className="flex-1 overflow-auto p-4 rounded-2xl bg-black border border-white/10 text-xs font-mono text-rose-100 leading-relaxed">
              {getCleanPortableReactCode()}
            </pre>

            <div className="flex flex-wrap items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => copyToClipboard(getCleanPortableReactCode(), 'React .jsx source code')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy React Code</span>
              </button>
              <button
                type="button"
                onClick={handleDownloadReactCodeFile}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#8B1E3F] hover:bg-[#701631] text-xs font-semibold text-white"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download DineoSekgalaPortfolio.jsx</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 4: CUSTOMIZE PROFILE & PASTE LINKEDIN DRAWER
         ===================================================================== */}
      {isEditorOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-end">
          <div className="w-full max-w-xl bg-neutral-950 border-l border-white/15 text-white h-full overflow-y-auto p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Edit3 className="w-4 h-4 text-amber-400" />
                  <span>Customize Dineo’s Editorial Portfolio</span>
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Updates apply immediately across Version 2 (Reddish Maroon) and Version 1.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsEditorOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-amber-400/30 space-y-3">
              <div className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                <span>Quick Import from LinkedIn Profile Text</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Paste any additional LinkedIn headline or About text below to auto-update the portfolio:
              </p>
              <textarea
                rows={3}
                value={linkedinPasteText}
                onChange={(e) => setLinkedinPasteText(e.target.value)}
                placeholder="Paste copied LinkedIn headline and About section here..."
                className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-xs text-white"
              />
              <button
                type="button"
                onClick={handleParseLinkedInPaste}
                className="px-4 py-2 rounded-xl bg-[#8B1E3F] text-white font-semibold text-xs hover:opacity-95 transition"
              >
                Import Pasted LinkedIn Bio
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs text-neutral-400 mb-1">Full Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/15 text-sm text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Hero Title Line 1</label>
                  <input
                    type="text"
                    value={profile.roleLine1 || ''}
                    onChange={(e) => setProfile({ ...profile, roleLine1: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/15 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Hero Title Line 2</label>
                  <input
                    type="text"
                    value={profile.roleLine2 || ''}
                    onChange={(e) => setProfile({ ...profile, roleLine2: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/15 text-sm text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-400 mb-1">Hero Intro Paragraph</label>
                <textarea
                  rows={2}
                  value={profile.subheadline}
                  onChange={(e) => setProfile({ ...profile, subheadline: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/15 text-sm text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Location</label>
                  <input
                    type="text"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/15 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Contact Email</label>
                  <input
                    type="text"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/15 text-sm text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-400 mb-1">About / Executive Summary</label>
                <textarea
                  rows={4}
                  value={profile.about}
                  onChange={(e) => setProfile({ ...profile, about: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/15 text-sm text-white"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setProfile(INITIAL_PROFILE);
                  showToast("Reset profile data to verified UmkhoAI & Bydesign profile.");
                }}
                className="text-xs text-rose-400 hover:underline"
              >
                Reset to UmkhoAI &amp; Bydesign Data
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsEditorOpen(false);
                  showToast("Saved changes!");
                }}
                className="px-5 py-2.5 rounded-xl bg-[#8B1E3F] text-white font-semibold text-xs hover:opacity-95 transition"
              >
                Done &amp; Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
