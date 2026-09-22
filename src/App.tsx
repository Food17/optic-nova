import { useState } from "react";
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

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <main>
    <div className="grain" aria-hidden="true" />
    <header className="nav">
      <a className="brand" href="#" onClick={closeMenu} aria-label="Optic Nova home"><span>OPTIC</span><i>NOVA</i></a>
      <nav className={`nav-links ${menuOpen ? "is-open" : ""}`}>
        <a href="#services" onClick={closeMenu}>Capabilities</a><a href="#work" onClick={closeMenu}>Work</a><a href="#process" onClick={closeMenu}>Process</a><a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
      <a className="nav-cta" href="#contact">Start a project <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
    </header>

    <section className="hero">
      <div className="hero-orb orb-one" /><div className="hero-orb orb-two" /><div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> Digital product × brand studio</div>
        <h1>Build what <em>matters.</em><br/><span>Make it memorable.</span></h1>
        <p className="hero-lead">Optic Nova turns ambitious ideas into digital products, distinctive brands and experiences people want to use.</p>
        <div className="hero-actions"><a className="cta primary" href="#services">Explore capabilities <ArrowDownRight size={17}/></a><a className="text-link" href="#work">See selected work <ArrowUpRight size={16}/></a></div>
      </div>
      <div className="hero-meta"><span>Lagos · Remote</span><span>Available for selected projects</span></div>
      <div className="scroll-cue"><span>Scroll to explore</span><ArrowDownRight size={16}/></div>
    </section>

    <section className="statement"><div className="section-label">00 / The studio</div><div className="statement-copy"><p>One studio. <em>Three disciplines.</em></p><h2>Strategy, design and technology moving in the same direction.</h2><p className="statement-note">We connect brand thinking with product thinking—so what your company says, what it looks like and what it does all feel like the same idea.</p></div></section>

    <section id="services" className="services">
      <div className="section-top"><div className="section-label light-label">01 / Capabilities</div><p>From first sketch to shipped experience.</p></div>
      <div className="services-heading"><h2>Ideas deserve <em>better</em> execution.</h2><Sparkles size={38} strokeWidth={1.2}/></div>
      <div className="service-list">{services.map(s=><article className="service-row" key={s.number}><span className="service-number">{s.number}</span><h3>{s.title}</h3><p>{s.text}</p><ArrowUpRight className="service-arrow" size={22}/></article>)}</div>
    </section>

    <section id="work" className="work">
      <div className="section-label">02 / Selected direction</div>
      <div className="work-heading"><h2>Made to feel <em>different.</em></h2><p>Our portfolio is growing. This space is reserved for the products, identities and digital experiences we build with our clients.</p></div>
      <div className="work-grid">
        <article className="work-card work-card-main"><div className="work-art art-green"><div className="art-window"><span>OPTIC / 01</span><strong>PRODUCT<br/>SYSTEM</strong></div></div><div className="work-caption"><span>01 / Digital Product</span><strong>SaaS & Product Design</strong></div></article>
        <article className="work-card"><div className="work-art art-dark"><div className="art-type">NOVA<span>®</span></div></div><div className="work-caption"><span>02 / Brand Identity</span><strong>Identity Systems</strong></div></article>
        <article className="work-card"><div className="work-art art-lime"><div className="art-circle" /></div><div className="work-caption"><span>03 / Visual Design</span><strong>Campaign & Graphic</strong></div></article>
      </div>
    </section>

    <section id="process" className="process"><div className="section-label">03 / How we work</div><div className="process-intro"><h2>Less <em>noise.</em><br/>More momentum.</h2><p>A focused process designed to keep the big idea intact while the details get sharper.</p></div><div className="process-list">{process.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section id="contact" className="contact"><div className="contact-glow" /><div className="section-label light-label">04 / Start a project</div><h2>Have something<br/><em>worth building?</em></h2><p>Tell us what you're working on. We'll bring the right mix of strategy, design and engineering to the table.</p><a className="cta contact-cta" href="mailto:hello@opticnova.studio">Start the conversation <ArrowUpRight size={18}/></a><div className="contact-footer"><span>OPTIC NOVA</span><span>SaaS · Brand · Design</span></div></section>
  </main>;
}