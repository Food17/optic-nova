import { ArrowUpRight } from "lucide-react";

export default function App() {
  return (
    <main>
      <header className="nav">
        <strong>OPTIC <i>NOVA</i></strong>
        <a href="#contact">Start a project <ArrowUpRight size={15}/></a>
      </header>

      <section className="hero">
        <p className="eyebrow">DIGITAL PRODUCT × BRAND STUDIO</p>
        <h1>We build digital <span>products</span> and <em>brands</em> people remember.</h1>
        <p className="lead">SaaS development, UI/UX, brand identity and graphic design for ambitious businesses.</p>
        <a className="cta" href="#services">Explore capabilities <ArrowUpRight size={17}/></a>
      </section>

      <section id="services" className="services">
        <p className="eyebrow">01 / CAPABILITIES</p>
        <h2>Technology, design and identity in one connected studio.</h2>
        <div className="cards">
          <article>SaaS Development</article>
          <article>UI/UX Design</article>
          <article>Brand Identity</article>
          <article>Graphic Design</article>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">02 / START A PROJECT</p>
        <h2>Have something <em>worth building?</em></h2>
        <a className="cta light" href="mailto:hello@opticnova.studio">Let's talk <ArrowUpRight size={17}/></a>
      </section>
    </main>
  );
}