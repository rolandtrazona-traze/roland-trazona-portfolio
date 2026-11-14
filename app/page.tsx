'use client'

import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import {
  ArrowDownToLine,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronDown,
  FileSpreadsheet,
  Globe2,
  GraduationCap,
  Mail,
  Menu,
  MessageCircle,
  Network,
  Settings2,
  ScrollText,
  Sparkles,
  Trophy,
  UsersRound,
  X,
} from 'lucide-react'

const profileImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21c27b47-685b-466c-9237-196cdba39eb8-VVTRnvTNp8X8zoso7YccJ2Z8V2Z1iu.png'

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
  const [resumeOpen, setResumeOpen] = useState(false)
  const [awardOpen, setAwardOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'sent'>('idle')
  const navItems = ['About', 'Services', 'Experience', 'Skills', 'Credentials', 'Contact']

  useEffect(() => {
    const sections = ['top', ...navItems.map((item) => item.toLowerCase())]
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, .25, .5, 1] })
    sections.forEach((id) => document.getElementById(id) && observer.observe(document.getElementById(id)!))
    const handleScroll = () => setShowBackToTop(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => { observer.disconnect(); window.removeEventListener('scroll', handleScroll) }
  }, [])

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormStatus('sent')
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.get('name')}`)
    const body = encodeURIComponent(`${form.get('message')}\\n\\nReply to: ${form.get('email')}`)
    window.location.href = `mailto:rolandtrazona@gmail.com?subject=${subject}&body=${body}`
  }

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setResumeOpen(false); setAwardOpen(false) }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <nav className="nav-wrap" aria-label="Primary navigation">
        <a className="wordmark" href="#top" onClick={() => setMenuOpen(false)}><span>RT</span> Roland Trazona</a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => <a className={activeSection === item.toLowerCase() ? 'active' : ''} key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}<button className="nav-resume" type="button" onClick={() => { setResumeOpen(true); setMenuOpen(false) }}>Resume</button>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </div>
      </nav>

      <section className="hero section-pad" id="top">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="status-dot" /> Available for opportunities</div>
          <h1>Operations that <em>scale.</em><br />Systems that <span>work.</span></h1>
          <p className="hero-lede">Helping businesses scale through operational excellence, workforce planning, process optimization, and AI-powered productivity.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Let&apos;s work together <ArrowUpRight size={17} /></a><button className="button button-ghost" type="button" onClick={() => setResumeOpen(true)}><ArrowDownToLine size={17} /> View resume</button></div>
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

      {awardOpen && <div className="resume-modal award-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setAwardOpen(false) }}><div className="resume-dialog award-dialog" role="dialog" aria-modal="true" aria-labelledby="award-title"><div className="resume-dialog-header"><div><span className="card-kicker">View only · December 14, 2025</span><h2 id="award-title">EmpireOne Special Award</h2></div><button className="modal-close" type="button" onClick={() => setAwardOpen(false)} aria-label="Close award viewer"><X size={20} /></button></div><div className="award-gallery"><figure><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RolandTrazona_SpecialAward_EmpireOne2025_Cert-r2aqSRHkjT6a8Apt9q4mmR0foGhUCl.jpg" alt="EmpireOne Special Award certificate presented to Roland Trazona in 2025" /><figcaption>Special Award certificate</figcaption></figure><figure><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RolandTrazona_SpecialAward_EmpireOne2025-0QfjAFw5LWUhPUxedoMDgPxgvAv92b.jpg" alt="Roland Trazona accepting the EmpireOne Special Award onstage" /><figcaption>Receiving the award onstage at the EmpireOne Dream Catcher Gala</figcaption></figure></div></div></div>}{resumeOpen && <div className="resume-modal" role="presentation" aria-label="Resume viewer" onMouseDown={(event) => { if (event.target === event.currentTarget) setResumeOpen(false) }}><div className="resume-dialog" role="dialog" aria-modal="true" aria-labelledby="resume-title"><div className="resume-dialog-header"><div><span className="card-kicker">View only</span><h2 id="resume-title">Roland Trazona — Resume</h2></div><button className="modal-close" type="button" onClick={() => setResumeOpen(false)} aria-label="Close resume viewer"><X size={20} /></button></div><div className="resume-document" aria-label="View-only resume content"><div className="resume-document-top"><span>Roland Trazona</span><span>Operations & Workforce Management</span></div><div className="resume-document-body"><div className="resume-document-intro"><h3>Operations & Workforce Management Virtual Assistant</h3><p>San Carlos City, Negros Occidental, Philippines · +64976-005-9887 · rolandtrazona@gmail.com</p></div><div className="resume-document-full"><span className="resume-document-label">Professional summary</span><p>Operations & Workforce Management Virtual Assistant specializing in scheduling systems, capacity planning, and reporting for growing teams. Built a Workforce Management department from the ground up — with no existing software, tools, or precedent to follow — and scaled it into a 15-person function operating across multiple sites and countries. Brings 10 years of BPO experience spanning training/L&amp;D and workforce operations, with hands-on use of AI tools for research, reporting, and process design. Helps businesses turn manual, ad hoc processes into reliable, scalable systems.</p><span className="resume-document-label">Core skills</span><div className="resume-skill-groups"><div><h4>Workforce &amp; Operations Management</h4><p>Scheduling &amp; Shift Planning · Capacity Planning · Seat Utilization Tracking · Revenue &amp; Work-Hours Tracking · Reporting &amp; Data Analysis · Process/SOP Building · Multi-Site &amp; Cross-Country Coordination</p></div><div><h4>Training &amp; Development</h4><p>New Hire &amp; Upskill Training · Curriculum &amp; Training Material Development · Compliance Reporting · Classroom Facilitation · Coaching &amp; Certification (NTDC-Certified)</p></div><div><h4>Tools &amp; Software</h4><p>Microsoft Excel (Advanced) · Google Sheets · Microsoft Word · PowerPoint · Amadeus (GDS) · Sabre (GDS)</p></div><div><h4>AI Productivity</h4><p>ChatGPT · Claude · Gemini · Perplexity · AI-Assisted Research &amp; Reporting · Prompt Development</p></div><div><h4>Process Improvement</h4><p>Lean Six Sigma — White Belt</p></div></div><span className="resume-document-label">Professional experience</span><h4>Workforce Management Department Founder → Department Manager — EmpireOneCX</h4><p className="resume-muted">Jul 2024 – Aug 2026</p><ul><li>Joined as founding member of the WFM function and built it from the ground up with no existing WFM software, tools, or internal precedent.</li><li>Designed and implemented scheduling, capacity planning, seat utilization tracking, revenue and work-hours tracking, and performance reporting using self-directed research and AI tools.</li><li>Promoted to WFM Department Manager within 5 months based on department performance and process results.</li><li>Scaled the WFM function from a single-site build to a 15-person team across San Carlos, Cebu, and Colombia.</li><li>Built and maintained manual, spreadsheet-based scheduling and reporting systems supporting multiple client accounts simultaneously.</li><li>Reporting and capacity insights directly supported account growth and multi-site expansion, contributing to contingency and scaling plans.</li><li>Partnered with Operations and account stakeholders as a strategic advisor by monitoring schedules and adherence and surfacing actionable staffing insights.</li></ul><h4>Trainer — Teleperformance, Cebu IT Park</h4><p className="resume-muted">Jul 2019 – Jun 2024</p><ul><li>Promoted from Call Center Agent to Trainer after one year based on performance.</li><li>Delivered new-hire and upskill training programs directly supporting client KPI targets.</li><li>Developed training materials and compliance reports used to track effectiveness and support audit readiness.</li><li>Certified under the New Trainer Development Curriculum after passing a coaching and discussion-demo assessment.</li><li>Certified as an Airborne Trainer, qualified to train newly hired SMEs and support Nesting-stage agents.</li><li>Provided feedback and insights on training initiatives to inform program improvements.</li></ul><h4>Customer Service Associate II — Concentrix, Cebu IT Park</h4><p className="resume-muted">Oct 2018 – May 2019</p><p>Handled service inquiries, billing, and troubleshooting support for a major cable and internet service provider.</p><h4>Technical Support Associate — Convergys, Cebu IT Park</h4><p className="resume-muted">Jun 2016 – Oct 2018</p><p>Provided technical troubleshooting and product support for DSL internet services for a major U.S. telecom provider.</p><span className="resume-document-label">Projects</span><h4>AI-Assisted Web App/Site Development (Exploratory)</h4><p>Developing foundational skills using AI tools to design and build web apps and sites, applying the self-directed, resource-first learning method used to build the WFM department.</p><span className="resume-document-label">Certifications &amp; achievements</span><ul><li>New Trainer Development Curriculum (NTDC) — Trained and Certified, Teleperformance (Dec 2020)</li><li>Airborne Trainer — Trained and Certified, Teleperformance (Dec 2022)</li><li>Lean Six Sigma — White Belt, Teleperformance (Dec 2023)</li></ul><span className="resume-document-label">Education</span><h4>Bachelor of Secondary Education, Major in English (BSED)</h4><p>Tañon College, San Carlos City, Negros Occidental · 2012–2016</p></div></div></div></div></div>}

      <section className="section-pad credentials-section" id="credentials"><div className="section-label"><span>07</span><span className="line" /><span>Credentials</span></div><div className="section-heading"><h2>Proof behind<br /><span>the work.</span></h2><p>A growing collection of awards, employment records, and certifications. Supporting documents are available upon request.</p></div><div className="credentials-grid"><article className="credential-card"><div className="credential-icon"><Trophy size={21} /></div><span className="card-kicker">Awards & recognition</span><h3>EmpireOne Special Award</h3><p>Presented on December 14, 2025, in recognition of dedication, hard work, and consistently going above expectations.</p><button className="credential-action" type="button" onClick={() => setAwardOpen(true)}>View award <ArrowUpRight size={15} /></button></article><article className="credential-card"><div className="credential-icon"><BadgeCheck size={21} /></div><span className="card-kicker">COE</span><h3>Certificate of Employment</h3><p>Employment documentation from previous organizations can be made available for verification upon request.</p><span className="credential-status">Available on request</span></article><article className="credential-card"><div className="credential-icon"><ScrollText size={21} /></div><span className="card-kicker">Certifications</span><h3>Training & credentials</h3><p>NTDC Certified, Airborne Trainer, and Lean Six Sigma White Belt.</p><span className="credential-status">3 credentials listed</span></article></div></section><section className="section-pad resume-prompt"><div className="resume-prompt-card"><div><span className="card-kicker">08 / Resume</span><h2>Want the full picture?</h2><p>Open my professional resume in a focused, view-only window.</p></div><button className="button button-primary" type="button" onClick={() => setResumeOpen(true)}>Open resume <ArrowUpRight size={17} /></button></div></section>

      <section className="section-pad contact-section" id="contact"><div className="contact-card"><div className="contact-main"><div className="eyebrow"><span className="status-dot" /> Open to new opportunities</div><h2>Let&apos;s make<br /><span>work work better.</span></h2><p>Have a workforce challenge, an operational bottleneck, or a process that needs structure? I&apos;d like to hear about it.</p><a className="button button-primary" href="mailto:rolandtrazona@gmail.com">Start a conversation <ArrowUpRight size={17} /></a></div><form className="contact-form" onSubmit={handleContactSubmit}><label>Name<input name="name" type="text" placeholder="Your name" required minLength={2} /></label><label>Email<input name="email" type="email" placeholder="you@example.com" required /></label><label>Message<textarea name="message" placeholder="How can I help?" required minLength={10} rows={4} /></label><button className="button button-primary" type="submit">{formStatus === 'sent' ? 'Opening email…' : 'Send message'} <ArrowUpRight size={17} /></button></form><div className="contact-details"><a href="mailto:rolandtrazona@gmail.com"><Mail size={18} /><span>rolandtrazona@gmail.com</span></a><a href="https://wa.me/639760059887" target="_blank" rel="noreferrer"><MessageCircle className="whatsapp-icon" size={18} /><span>WhatsApp: +63 976 005 9887</span><ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/roland-trazona-99a875111" target="_blank" rel="noreferrer"><Globe2 size={18} /><span>Connect on LinkedIn</span><ArrowUpRight size={15} /></a></div></div></section>

      <section className="section-pad faq-section"><div className="section-label"><span>09</span><span className="line" /><span>Good to know</span></div><div className="faq-list">{['What kinds of roles am I looking for?', 'How can I help your team?', 'What makes my approach different?'].map((question, i) => <div className="faq-item" key={question}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>0{i + 1}</span>{question}<ChevronDown className={openFaq === i ? 'rotate' : ''} size={19} /></button>{openFaq === i && <p>{i === 0 ? 'I am open to Operations Associate, Workforce Manager, Customer Support Manager, Business Virtual Assistant, and Operations Coordinator opportunities.' : i === 1 ? 'I bring hands-on experience building schedules, reporting systems, SOPs, training programs, and operational routines that help teams scale.' : 'I combine people-first operations experience with structured analysis and practical AI workflows — always focused on making work clearer and more effective.'}</p>}</div>)}</div></section>

      <button className={`back-to-top ${showBackToTop ? 'is-visible' : ''}`} type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUpRight size={18} /></button><footer><a className="wordmark" href="#top"><span>RT</span> Roland Trazona</a><p>Operations & Workforce Management Professional</p><span>© 2026 Roland Trazona</span></footer>
    </main>
  )
}
