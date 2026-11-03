'use client'

import { useState } from 'react'
import {
  ArrowDownToLine,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  Code2,
  FileSpreadsheet,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Network,
  Phone,
  Settings2,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
  X,
} from 'lucide-react'

const profileImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21c27b47-685b-466c-9237-196cdba39eb8-VVTRnvTNp8X8zoso7YccJ2Z8V2Z1iu.png'
const resumeUrl = 'https://blobs.vusercontent.net/blob/Roland_Trazona_Resume%20%282%29-KPHVsC4k0B4D6zTLljH70lD6GCLc7d.pdf'

const skills = ['Operations Management', 'Workforce Planning', 'Scheduling', 'Forecasting', 'Process Improvement', 'Advanced Excel', 'Google Sheets', 'ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Training Development', 'Customer Support Leadership']
const services = [
  { icon: UsersRound, title: 'Workforce Management', description: 'Build reliable scheduling, capacity planning, seat utilization, and performance reporting systems.' },
  { icon: Settings2, title: 'Operations Systems', description: 'Turn manual, ad hoc processes into clear SOPs and scalable operating rhythms.' },
  { icon: FileSpreadsheet, title: 'Reporting & Analysis', description: 'Create decision-ready dashboards and spreadsheet models that reveal actionable insights.' },
  { icon: Sparkles, title: 'AI-Powered Productivity', description: 'Use practical AI workflows for research, documentation, reporting, and process design.' },
]
const experience = [
  { date: 'JUL 2024 — AUG 2026', role: 'WFM Department Founder → Department Manager', company: 'EmpireOneCX', description: 'Built the Workforce Management function from the ground up, then scaled it from a single-site build into a 15-person, multi-country operation across San Carlos, Cebu, and Colombia.', tags: ['Workforce Planning', 'Capacity Planning', 'Team Leadership'] },
  { date: 'JUL 2019 — JUN 2024', role: 'Trainer', company: 'Teleperformance · Cebu IT Park', description: 'Delivered new-hire and upskill programs, developed training materials, and created compliance reports that supported KPI performance and audit readiness.', tags: ['Training & Development', 'Coaching', 'Reporting'] },
  { date: 'OCT 2018 — MAY 2019', role: 'Customer Service Associate II', company: 'Concentrix · Cebu IT Park', description: 'Handled service inquiries, billing, and troubleshooting support for a major cable and internet service provider.', tags: ['Customer Support', 'Troubleshooting'] },
  { date: 'JUN 2016 — OCT 2018', role: 'Technical Support Associate', company: 'Convergys · Cebu IT Park', description: 'Provided technical troubleshooting and product support for DSL internet services for a major U.S. telecom provider.', tags: ['Technical Support', 'Problem Solving'] },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const navItems = ['About', 'Services', 'Experience', 'Skills', 'Contact']

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <nav className="nav-wrap" aria-label="Primary navigation">
        <a className="wordmark" href="#top" onClick={() => setMenuOpen(false)}><span>RT</span> Roland Trazona</a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </div>
      </nav>

      <section className="hero section-pad" id="top">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="status-dot" /> Available for opportunities</div>
          <h1>Operations that <em>scale.</em><br />Systems that <span>work.</span></h1>
          <p className="hero-lede">Helping businesses scale through operational excellence, workforce planning, process optimization, and AI-powered productivity.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Let&apos;s work together <ArrowUpRight size={17} /></a><a className="button button-ghost" href={resumeUrl} target="_blank" rel="noreferrer"><ArrowDownToLine size={17} /> Download resume</a></div>
          <div className="hero-proof"><div><strong>10+</strong><span>Years of experience</span></div><div><strong>15</strong><span>Person WFM team built</span></div><div><strong>03</strong><span>Countries supported</span></div></div>
        </div>
        <div className="hero-portrait reveal delay-one"><div className="portrait-ring" /><div className="portrait-card"><img src={profileImage} alt="Professional portrait of Roland Trazona" /><div className="portrait-caption"><span>Based in</span><strong>San Carlos City, PH</strong></div></div><div className="floating-card float-top"><BarChart3 size={17} /><span><b>15-person</b> function scaled</span></div><div className="floating-card float-bottom"><span className="mini-check"><Check size={12} /></span><span>Systems over guesswork</span></div></div>
      </section>

      <section className="logo-strip"><span>OPERATIONS</span><span>WORKFORCE</span><span>PROCESS</span><span>PRODUCTIVITY</span><span>PEOPLE</span></section>

      <section className="section-pad section-grid" id="about">
        <div className="section-label"><span>01</span><span className="line" /><span>About me</span></div>
        <div className="about-content"><div><h2>Clarity for the <span>complex.</span></h2><p className="large-copy">I help growing teams replace reactive work with reliable systems. My background spans 10+ years in BPO operations, training, workforce management, and customer support — giving me a practical view of what it takes to keep people, processes, and performance moving together.</p><p>I built a Workforce Management department from zero: no software, no precedent, and no playbook. Through self-directed research, structured spreadsheets, and AI-assisted workflows, I created the operating system that supported a 15-person team across multiple countries.</p><a className="text-link" href="#experience">Explore my experience <ArrowUpRight size={16} /></a></div><div className="quote-card"><div className="quote-mark">“</div><p>Build the system once. Make it useful every day.</p><span>— Roland&apos;s operating principle</span></div></div>
      </section>

      <section className="section-pad highlights-section"><div className="section-label"><span>02</span><span className="line" /><span>Career highlights</span></div><div className="highlight-grid"><div className="highlight-card featured"><div className="icon-box"><Network size={20} /></div><span className="card-kicker">01 / Build</span><h3>From one person<br />to a function.</h3><p>Founded a WFM department with no existing systems, then scaled it into a 15-person operation.</p><div className="card-arrow"><ArrowUpRight size={18} /></div></div><div className="highlight-card"><div className="icon-box"><Globe2 size={20} /></div><span className="card-kicker">02 / Connect</span><h3>Multi-site,<br />multi-country.</h3><p>Coordinated operations across San Carlos, Cebu, and Colombia.</p></div><div className="highlight-card"><div className="icon-box"><Sparkles size={20} /></div><span className="card-kicker">03 / Improve</span><h3>AI as a<br />force multiplier.</h3><p>Applied AI for research, reporting, documentation, and process design.</p></div></div></section>

      <section className="section-pad services-section" id="services"><div className="section-label"><span>03</span><span className="line" /><span>What I do</span></div><div className="section-heading"><h2>Practical systems.<br /><span>Measurable impact.</span></h2><p>From daily execution to long-term scale, I build the structure teams need to perform at their best.</p></div><div className="services-grid">{services.map((service, index) => { const Icon = service.icon; return <div className="service-card" key={service.title}><span className="service-num">0{index + 1}</span><Icon className="service-icon" size={26} /><h3>{service.title}</h3><p>{service.description}</p><a href="#contact" aria-label={`Learn more about ${service.title}`}><ArrowUpRight size={17} /></a></div> })}</div></section>

      <section className="section-pad experience-section" id="experience"><div className="section-label"><span>04</span><span className="line" /><span>Professional experience</span></div><div className="section-heading row-heading"><h2>A career built<br /><span>around outcomes.</span></h2><span className="timeline-note">2016 — Present</span></div><div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.role}><div className="timeline-date">{item.date}</div><div className="timeline-dot" /><div className="timeline-body"><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.description}</p><div className="tag-list">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>

      <section className="section-pad skills-section" id="skills"><div className="section-label"><span>05</span><span className="line" /><span>Toolkit</span></div><div className="skills-layout"><div><h2>Skills that keep<br /><span>work moving.</span></h2><p>Tools are only valuable when they help people make better decisions. I bring both the operational thinking and the technical fluency to make that happen.</p></div><div className="skill-cloud">{skills.map((skill, i) => <span className={i < 5 ? 'skill-chip featured-chip' : 'skill-chip'} key={skill}>{skill}</span>)}</div></div></section>

      <section className="section-pad stats-section"><div className="stats-header"><div className="section-label"><span>06</span><span className="line" /><span>By the numbers</span></div><h2>Built for <span>momentum.</span></h2></div><div className="stats-grid"><div className="stat-card"><strong>10<span>+</span></strong><p>Years across BPO operations, training, and workforce management.</p></div><div className="stat-card"><strong>15</strong><p>People in a WFM function built and scaled from the ground up.</p></div><div className="stat-card"><strong>03</strong><p>Countries supported through multi-site workforce operations.</p></div><div className="stat-card"><strong>05<span>mo</span></strong><p>Promoted to Department Manager based on performance and results.</p></div></div></section>

      <section className="section-pad education-section"><div className="education-card"><div className="icon-box"><GraduationCap size={22} /></div><div><span className="card-kicker">Education & certifications</span><h3>Bachelor of Secondary Education, Major in English</h3><p>Tañon College · San Carlos City, Negros Occidental · 2012–2016</p><div className="cert-list"><span>NTDC Certified</span><span>Airborne Trainer</span><span>Lean Six Sigma White Belt</span></div></div></div></section>

      <section className="section-pad contact-section" id="contact"><div className="contact-card"><div className="contact-main"><div className="eyebrow"><span className="status-dot" /> Open to new opportunities</div><h2>Let&apos;s make<br /><span>work work better.</span></h2><p>Have a workforce challenge, an operational bottleneck, or a process that needs structure? I&apos;d like to hear about it.</p><a className="button button-primary" href="mailto:rolandtrazona@gmail.com">Start a conversation <ArrowUpRight size={17} /></a></div><div className="contact-details"><a href="mailto:rolandtrazona@gmail.com"><Mail size={18} /><span>rolandtrazona@gmail.com</span></a><a href="tel:+649760059887"><Phone size={18} /><span>+63 976 005 9887</span></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={18} /><span>Connect on LinkedIn</span><ArrowUpRight size={15} /></a></div></div></section>

      <section className="section-pad faq-section"><div className="section-label"><span>07</span><span className="line" /><span>Good to know</span></div><div className="faq-list">{['What kinds of roles am I looking for?', 'How can I help your team?', 'What makes my approach different?'].map((question, i) => <div className="faq-item" key={question}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>0{i + 1}</span>{question}<ChevronDown className={openFaq === i ? 'rotate' : ''} size={19} /></button>{openFaq === i && <p>{i === 0 ? 'I am open to Operations Associate, Workforce Manager, Customer Support Manager, Business Virtual Assistant, and Operations Coordinator opportunities.' : i === 1 ? 'I bring hands-on experience building schedules, reporting systems, SOPs, training programs, and operational routines that help teams scale.' : 'I combine people-first operations experience with structured analysis and practical AI workflows — always focused on making work clearer and more effective.'}</p>}</div>)}</div></section>

      <footer><a className="wordmark" href="#top"><span>RT</span> Roland Trazona</a><p>Operations & Workforce Management Professional</p><span>© 2026 Roland Trazona</span></footer>
    </main>
  )
}
