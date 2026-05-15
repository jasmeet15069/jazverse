import StudioDemo from "./studio-demo";

const highlights = [
  {
    title: "Concept framing",
    body: "Turn a rough idea into a product angle, audience fit, and launch-ready narrative in one pass.",
  },
  {
    title: "Creative systems",
    body: "Sketch scenes, worlds, workflows, and monetization tracks without losing the practical build plan.",
  },
  {
    title: "Fast iteration",
    body: "Move from vague prompt to structured experience brief in a few clicks, then keep refining.",
  },
];

const roadmap = [
  "Studio prompts that branch into app, storyworld, and campaign modes.",
  "Reusable launch kits for product demos, landing pages, and AI assistants.",
  "Shared workspaces for reviewing concepts, positioning, and rollout steps.",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-band">
        <div className="hero-copy">
          <p className="eyebrow">Jazverse Studio</p>
          <h1>Shape bold AI products, immersive worlds, and launch ideas from a single prompt.</h1>
          <p className="lede">
            Jazverse is a concept studio for turning messy ideas into clearer product direction. Use the
            live demo below to outline the audience, creative hook, and first build track.
          </p>
          <div className="hero-meta">
            <span>Prompt-driven planning</span>
            <span>Interactive demo</span>
            <span>Next.js on Vercel</span>
          </div>
        </div>
        <div className="hero-highlights" aria-label="Jazverse capabilities">
          {highlights.map((item) => (
            <article key={item.title} className="highlight-card">
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <StudioDemo />

      <section className="future-band">
        <div className="future-copy">
          <p className="section-label">Where this can go</p>
          <h2>Built as a clean demo today, ready to grow into a broader studio tomorrow.</h2>
          <p>
            The current experience stays intentionally lightweight, but the surface is ready for deeper
            builders, collaboration, templates, and AI-assisted product workflows.
          </p>
        </div>
        <div className="roadmap-list">
          {roadmap.map((item) => (
            <div key={item} className="roadmap-row">
              <span className="roadmap-dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
