import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

const services = [
  { number: "01", title: "SaaS Development", text: "Scalable web products, dashboards and digital platforms engineered around the way your business actually works." },
  { number: "02", title: "UI / UX Design", text: "Interfaces that make complex products feel clear, useful and distinctly yours—from first flow to final screen." },
  { number: "03", title: "Brand Identity", text: "Strategic identities that give ambitious companies a recognizable visual language across every touchpoint." },
  { number: "04", title: "Graphic Design", text: "Campaigns, launch assets and visual systems built to make your message impossible to overlook." }
];
const process = [
  ["01", "Discover", "We clarify the opportunity, audience, goals and constraints before pixels or code enter the room."],
  ["02", "Shape", "Strategy becomes a clear concept, visual direction and product experience with a strong point of view."],
  ["03", "Build", "Design and engineering move together, creating a responsive experience that feels considered in every detail."],
  ["04", "Launch", "We polish, test and prepare the work for the real world—not just the presentation deck."]
];

const ease = [0.22, 1, 0.36, 1];

function Reveal({ children, className = "", delay = 0, y = 32 }: { children: ReactNode; className?: string; delay?: number; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();
  const closeMenu = () => setMenuOpen(false);

  return <main>
    <div className="grain" aria-hidden="true" />
    <header className="nav">
      <a className="brand" href="#" onClick={closeMenu} aria-label="Optic Nova home"><span>OPTIC</span><i>NOVA</i></a>
      <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        <a href="#services" onClick={closeMenu}>Capabilities</a><a href="#work" onClick={closeMenu}>Work</a><a href="#process" onClick={closeMenu}>Process</a><a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
      <a className="nav-cta" href="#contact">Start a project <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
    </header>

    <section className="hero">
      <div className="hero-orb orb-one" /><div className="hero-orb orb-two" /><div className="hero-grid" aria-hidden="true" />
      <motion.div className="hero-copy" initial={reduce ? false : { opacity: 0, y: 30 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .9, ease }}>
        <motion.div className="eyebrow" initial={reduce ? false : { opacity: 0 }} animate={reduce ? undefined : { opacity: 1 }} transition={{ delay: .15, duration: .6 }}><span className="eyebrow-dot" /> Digital product × brand studio</motion.div>
        <h1>Build what <em>matters.</em><br/><span>Make it memorable.</span></h1>
        <p className="hero-lead">Optic Nova turns ambitious ideas into digital products, distinctive brands and experiences people want to use.</p>
        <div className="hero-actions"><motion.a className="cta primary" href="#services" whileHover={reduce ? undefined : { y: -3, scale: 1.02 }} whileTap={{ scale: .98 }}>Explore capabilities <ArrowDownRight size={17}/></motion.a><motion.a className="text-link" href="#work" whileHover={reduce ? undefined : { x: 5 }}>See selected work <ArrowUpRight size={16}/></motion.a></div>
      </motion.div>
      <div className="hero-meta"><span>Lagos · Remote</span><span>Available for selected projects</span></div>
      <div className="scroll-cue"><span>Scroll to explore</span><ArrowDownRight size={16}/></div>
    </section>

    <Reveal className="statement"><div className="section-label">00 / The studio</div><div className="statement-copy"><p>One studio. <em>Three disciplines.</em></p><h2>Strategy, design and technology moving in the same direction.</h2><p className="statement-note">We connect brand thinking with product thinking—so what your company says, what it looks like and what it does all feel like the same idea.</p></div></Reveal>

    <section id="services" className="services">
      <div className="section-top"><div className="section-label light-label">01 / Capabilities</div><p>From first sketch to shipped experience.</p></div>
      <Reveal className="services-heading"><h2>Ideas deserve <em>better</em> execution.</h2><motion.div animate={reduce ? undefined : { rotate: [0, 8, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}><Sparkles size={38} strokeWidth={1.2}/></motion.div></Reveal>
      <div className="service-list">{services.map((s, i)=><motion.article className="service-row" key={s.number} initial={reduce ? false : { opacity: 0, x: -25 }} whileInView={reduce ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .65, delay: i * .08, ease }} whileHover={reduce ? undefined : { x: 8 }}><span className="service-number">{s.number}</span><h3>{s.title}</h3><p>{s.text}</p><ArrowUpRight className="service-arrow" size={22}/></motion.article>)}</div>
    </section>

    <section id="work" className="work">
      <div className="section-label">02 / Selected direction</div>
      <Reveal className="work-heading"><h2>Made to feel <em>different.</em></h2><p>Our portfolio is growing. This space is reserved for the products, identities and digital experiences we build with our clients.</p></Reveal>
      <div className="work-grid">
        <motion.article className="work-card work-card-main" whileHover={reduce ? undefined : { y: -6 }} transition={{ duration: .3 }}><div className="work-art art-green"><div className="art-window"><span>OPTIC / 01</span><strong>PRODUCT<br/>SYSTEM</strong></div></div><div className="work-caption"><span>01 / Digital Product</span><strong>SaaS & Product Design</strong></div></motion.article>
        <motion.article className="work-card" whileHover={reduce ? undefined : { y: -6 }} transition={{ duration: .3 }}><div className="work-art art-dark"><div className="art-type">NOVA<span>®</span></div></div><div className="work-caption"><span>02 / Brand Identity</span><strong>Identity Systems</strong></div></motion.article>
        <motion.article className="work-card" whileHover={reduce ? undefined : { y: -6 }} transition={{ duration: .3 }}><div className="work-art art-lime"><div className="art-circle" /></div><div className="work-caption"><span>03 / Visual Design</span><strong>Campaign & Graphic</strong></div></motion.article>
      </div>
    </section>

    <section id="process" className="process"><div className="section-label">03 / How we work</div><Reveal className="process-intro"><h2>Less <em>noise.</em><br/>More momentum.</h2><p>A focused process designed to keep the big idea intact while the details get sharper.</p></Reveal><div className="process-list">{process.map(([n,t,d], i)=><Reveal key={n} delay={i * .08}><article><span>{n}</span><h3>{t}</h3><p>{d}</p></article></Reveal>)}</div></section>

    <section id="contact" className="contact"><div className="contact-glow" /><div className="section-label light-label">04 / Start a project</div><Reveal y={45}><h2>Have something<br/><em>worth building?</em></h2><p>Tell us what you're working on. We'll bring the right mix of strategy, design and engineering to the table.</p><motion.a className="cta contact-cta" href="mailto:hello@opticnova.studio" whileHover={reduce ? undefined : { y: -3, scale: 1.02 }} whileTap={{ scale: .98 }}>Start the conversation <ArrowUpRight size={18}/></motion.a></Reveal><div className="contact-footer"><span>OPTIC NOVA</span><span>SaaS · Brand · Design</span></div></section>
  </main>;
}
