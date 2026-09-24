import { useState, type FormEvent, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Menu, X, Sparkles, CheckCircle2 } from "lucide-react";

const services = [
  { number: "01", title: "SaaS Development", text: "Custom web and cloud products that scale with your vision, from internal platforms to customer-facing SaaS." },
  { number: "02", title: "Brand Identity", text: "Distinctive brand systems with purpose, character and consistency across digital and physical touchpoints." },
  { number: "03", title: "UI / UX Design", text: "Intuitive, expressive product experiences that turn complex ideas into interfaces people enjoy using." },
  { number: "04", title: "Graphic Design", text: "Bold visual assets and launch systems that make your message clear, memorable and unmistakably yours." }
];

const process = [
  ["01", "Discover", "We clarify the opportunity, audience, goals and constraints before pixels or code enter the room."],
  ["02", "Design", "Strategy becomes a clear concept, visual direction and product experience with a strong point of view."],
  ["03", "Develop", "Design and engineering move together, creating a responsive experience that feels considered in every detail."],
  ["04", "Deliver", "We polish, test and prepare the work for the real world—not just the presentation deck."]
];

const faqs = [
  ["What does Optic Nova actually build?", "We combine SaaS development, UI/UX, brand identity and graphic design. That means we can shape the product strategy, design the experience, build the digital product and create the brand system around it."],
  ["Can you work with an existing brand?", "Yes. We can work within an established identity, evolve it into a stronger system, or create a new visual direction where the current brand no longer reflects the business."],
  ["Do you only work with startups?", "No. We work with founders, growing companies and established teams that need a sharper digital product, stronger identity or a more cohesive visual experience."],
  ["How does a project begin?", "Every engagement starts with a discovery conversation. We clarify the goal, audience, scope, timeline and technical requirements before recommending the right combination of strategy, design and engineering."],
  ["Can you handle design and development together?", "Yes. Product design and engineering can move together from concept through launch, which reduces handoff friction and keeps the final experience aligned with the original creative direction."],
  ["Do you offer ongoing support after launch?", "Yes. Depending on the project, we can continue with iterations, product improvements, brand assets, maintenance and new digital experiences after the initial launch."]
];

const ease = [0.22, 1, 0.36, 1];

function Reveal({ children, className = "", delay = 0, y = 32, id }: { children: ReactNode; className?: string; delay?: number; y?: number; id?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const details = String(form.get("details") || "");
    const subject = encodeURIComponent(`Optic Nova project enquiry — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject details:\n${details}`);
    window.location.href = `mailto:hello@opticnova.studio?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <div className="grain" aria-hidden="true" />

      <header className="nav">
        <a className="brand" href="#" onClick={closeMenu} aria-label="Optic Nova home">
          <span>OPTIC</span><i>NOVA</i>
        </a>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">Start a Project <ArrowUpRight size={15} /></a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          type="button"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <section className="hero">
        <div className="hero-orb orb-one" aria-hidden="true" />
        <div className="hero-orb orb-two" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <motion.div
          className="hero-copy"
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: .9, ease }}
        >
          <motion.div
            className="eyebrow"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ delay: .15, duration: .6 }}
          >
            <span className="eyebrow-dot" /> Strategy. Design. Technology.
          </motion.div>

          <h1>Ideas that <em>build</em><br /><span>tomorrow.</span></h1>

          <p className="hero-lead">
            Optic Nova is a digital studio creating powerful brands, intuitive experiences
            and scalable digital products for forward-thinking businesses.
          </p>

          <div className="hero-actions">
            <motion.a className="cta primary" href="#contact" whileHover={reduce ? undefined : { y: -3, scale: 1.02 }} whileTap={{ scale: .98 }}>
              Start a Project <ArrowUpRight size={17} />
            </motion.a>
            <motion.a className="text-link" href="#work" whileHover={reduce ? undefined : { x: 5 }}>
              View Our Work <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </motion.div>

        <div className="hero-meta">
          <span>Lagos · Remote</span>
          <span>Creative solutions for a digital world.</span>
          <span>01 — 04</span>
        </div>

        <div className="scroll-cue"><span>Scroll to explore</span><ArrowDownRight size={16} /></div>
      </section>

      <Reveal className="statement" id="about">
        <div className="section-label">00 / About our studio</div>
        <div className="statement-copy">
          <p>One studio. <em>Three disciplines.</em></p>
          <h2>A creative studio for digital innovation.</h2>
          <p className="statement-note">
            We combine strategy, creativity and technology to help brands grow, stand out
            and make a lasting impact. What your company says, looks like and does should
            feel like the same idea.
          </p>
          <div className="studio-stats">
            <div><strong>01</strong><span>Focused studio</span></div>
            <div><strong>03</strong><span>Core disciplines</span></div>
            <div><strong>∞</strong><span>Ideas to explore</span></div>
          </div>
        </div>
      </Reveal>

      <section id="services" className="services">
        <div className="section-top">
          <div className="section-label light-label">01 / Our services</div>
          <p>From first sketch to shipped experience.</p>
        </div>

        <Reveal className="services-heading">
          <h2>What <em>we do.</em></h2>
          <motion.div animate={reduce ? undefined : { rotate: [0, 8, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <Sparkles size={38} strokeWidth={1.2} />
          </motion.div>
        </Reveal>

        <div className="service-list">
          {services.map((service, index) => (
            <motion.article
              className="service-row"
              key={service.number}
              initial={reduce ? false : { opacity: 0, x: -25 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: .2 }}
              transition={{ duration: .65, delay: index * .08, ease }}
              whileHover={reduce ? undefined : { x: 8 }}
            >
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ArrowUpRight className="service-arrow" size={22} />
            </motion.article>
          ))}
        </div>
      </section>

      <section id="work" className="work">
        <div className="section-label">02 / Selected work</div>
        <Reveal className="work-heading">
          <h2>Made to feel <em>different.</em></h2>
          <p>A few directions for the products, identities and digital experiences we build with ambitious teams.</p>
        </Reveal>

        <div className="work-grid">
          <motion.article className="work-card work-card-main" whileHover={reduce ? undefined : { y: -6 }} transition={{ duration: .3 }}>
            <div className="work-art art-green">
              <div className="art-window">
                <span>OPTIC / 01</span>
                <div className="mockup-bars"><i /><i /><i /></div>
                <strong>PRODUCT<br />SYSTEM</strong>
                <div className="mockup-chart"><b /><b /><b /><b /><b /></div>
              </div>
            </div>
            <div className="work-caption"><span>01 / SaaS Development</span><strong>Product Systems</strong></div>
          </motion.article>

          <motion.article className="work-card" whileHover={reduce ? undefined : { y: -6 }} transition={{ duration: .3 }}>
            <div className="work-art art-dark"><div className="art-type">NOVA<span>®</span></div></div>
            <div className="work-caption"><span>02 / Brand Identity</span><strong>Identity Systems</strong></div>
          </motion.article>

          <motion.article className="work-card" whileHover={reduce ? undefined : { y: -6 }} transition={{ duration: .3 }}>
            <div className="work-art art-lime"><div className="art-circle" /></div>
            <div className="work-caption"><span>03 / UI / UX Design</span><strong>Digital Experiences</strong></div>
          </motion.article>
        </div>
      </section>

      <section className="motion-showcase">
        <div className="motion-copy">
          <div className="section-label light-label">02 / Motion & atmosphere</div>
          <h2>Digital work should <em>move.</em></h2>
          <p>We use motion to give interfaces rhythm, hierarchy and personality—not decoration for decoration's sake.</p>
          <div className="motion-tags">
            <span>Micro-interactions</span><span>Scroll choreography</span><span>Product motion</span>
          </div>
        </div>
        <motion.div className="motion-reel" initial={reduce ? false : { opacity: 0, scale: .94 }} whileInView={reduce ? undefined : { opacity: 1, scale: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .9, ease }}>
          <video
            className="reel-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster=""
            aria-label="Abstract green motion graphic"
            src="https://videos.pexels.com/video-files/34867651/14775702_1920_1080_24fps.mp4"
          />
          <div className="reel-overlay"><span>OPTIC / MOTION STUDY</span><strong>01: DIGITAL ENERGY</strong><i /></div>
        </motion.div>
      </section>

      <section id="process" className="process">
        <div className="section-label">03 / Our process</div>
        <Reveal className="process-intro">
          <h2>How <em>we work.</em></h2>
          <p>A clear, collaborative process that keeps the big idea intact while every detail gets sharper.</p>
        </Reveal>

        <div className="process-list">
          {process.map(([number, title, description], index) => (
            <Reveal key={number} delay={index * .08}>
              <article>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="faq" className="faq">
        <div className="section-label">04 / Frequently asked</div>
        <Reveal className="faq-heading">
          <h2>Questions, <em>answered.</em></h2>
          <p>A few useful answers before we start building together.</p>
        </Reveal>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} className="faq-item">
              <summary><span>0{index + 1}</span><strong>{question}</strong><i>+</i></summary>
              <div className="faq-answer"><p>{answer}</p></div>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-glow" />
        <div className="contact-inner">
          <div className="contact-copy">
            <div className="section-label light-label">05 / Let's create together</div>
            <Reveal y={45}>
              <h2>Ready to build<br /><em>something great?</em></h2>
              <p>Tell us what you're working on. We'll bring the right mix of strategy, design and engineering to the table.</p>
              <div className="contact-points">
                <span><CheckCircle2 size={15} /> Digital products</span>
                <span><CheckCircle2 size={15} /> Brand systems</span>
                <span><CheckCircle2 size={15} /> UI / UX experiences</span>
              </div>
            </Reveal>
          </div>

          <motion.form className="contact-form" onSubmit={handleSubmit} initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={reduce ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, ease }}>
            <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
            <label>Email<input name="email" type="email" placeholder="you@company.com" required /></label>
            <label>Project Details<textarea name="details" placeholder="Tell us about your project..." rows={5} required /></label>
            <button className="cta contact-cta" type="submit">Send Message <ArrowUpRight size={18} /></button>
          </motion.form>
        </div>

        <div className="contact-footer">
          <span>OPTIC NOVA</span>
          <span>SaaS · Brand · Design</span>
          <span>© 2026 Optic Nova</span>
        </div>
      </section>
    </main>
  );
}
