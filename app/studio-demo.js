"use client";

import { useMemo, useState } from "react";

const presets = [
  "An AI nightlife concierge for premium city weekends",
  "A cinematic study companion for focused students",
  "A creator studio for launching anime-inspired fashion drops",
];

function sentenceCase(value) {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function buildPlan(prompt) {
  const cleaned = prompt.trim().replace(/\s+/g, " ");
  const words = cleaned.split(" ").filter(Boolean);
  const subject = sentenceCase(words.slice(0, 4).join(" ")) || "Your concept";
  const lower = cleaned.toLowerCase();

  const audience =
    lower.includes("student")
      ? "Students who want a sharper, more motivating workflow."
      : lower.includes("creator") || lower.includes("fashion")
        ? "Creators who want a strong brand system and launch rhythm."
        : lower.includes("travel") || lower.includes("trip")
          ? "Travel-first users who want speed, taste, and better planning."
          : "People who want a more vivid, better-structured digital experience.";

  const mood =
    lower.includes("luxury") || lower.includes("premium")
      ? "refined, high-trust, and premium"
      : lower.includes("anime") || lower.includes("cinematic")
        ? "stylized, expressive, and visual"
        : lower.includes("study") || lower.includes("focus")
          ? "calm, disciplined, and quietly motivating"
          : "bold, modern, and easy to navigate";

  return {
    title: subject,
    audience,
    northStar: `Make ${cleaned || "the product"} feel ${mood} while staying useful on day one.`,
    lanes: [
      {
        title: "Experience lane",
        body: `Design a first-screen flow that proves the value of ${cleaned || "the idea"} in under a minute.`,
      },
      {
        title: "Growth lane",
        body: "Package the strongest use case into a sharable demo, social teaser, and waitlist hook.",
      },
      {
        title: "Build lane",
        body: "Start with one flagship workflow, one polished dataset, and one admin-friendly control surface.",
      },
    ],
    stack: [
      "Next.js app for the product shell",
      "Reusable content blocks for faster launch pages",
      "Analytics, auth, and feature flags when the concept hardens",
    ],
  };
}

export default function StudioDemo() {
  const [prompt, setPrompt] = useState(presets[0]);
  const [savedPrompt, setSavedPrompt] = useState(presets[0]);

  const plan = useMemo(() => buildPlan(savedPrompt), [savedPrompt]);

  return (
    <section className="studio-band">
      <div className="studio-header">
        <div>
          <p className="section-label">Live demo</p>
          <h2>Describe the product or world you want Jazverse to shape.</h2>
        </div>
        <button
          type="button"
          className="ghost-button"
          onClick={() => {
            const nextPreset = presets[(presets.indexOf(savedPrompt) + 1) % presets.length];
            setPrompt(nextPreset);
            setSavedPrompt(nextPreset);
          }}
        >
          Switch example
        </button>
      </div>

      <div className="studio-grid">
        <div className="composer-panel">
          <label htmlFor="concept-input">Concept prompt</label>
          <textarea
            id="concept-input"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder="Describe a product, world, or studio idea..."
          />
          <div className="composer-actions">
            <button type="button" className="primary-button" onClick={() => setSavedPrompt(prompt)}>
              Build studio brief
            </button>
            <button
              type="button"
              className="secondary-button"
              onClick={() => {
                setPrompt("");
                setSavedPrompt("A collaborative AI studio for bold internet products");
              }}
            >
              Reset
            </button>
          </div>
          <p className="helper-copy">
            Try prompts about creators, premium tools, city culture, education, or productized AI
            services.
          </p>
        </div>

        <div className="brief-panel">
          <div className="brief-topline">
            <span className="status-pill">Active brief</span>
            <span className="brief-title">{plan.title}</span>
          </div>

          <div className="brief-copy">
            <div className="brief-section">
              <h3>Audience</h3>
              <p>{plan.audience}</p>
            </div>
            <div className="brief-section">
              <h3>North star</h3>
              <p>{plan.northStar}</p>
            </div>
          </div>

          <div className="lane-grid">
            {plan.lanes.map((lane) => (
              <article key={lane.title} className="lane-card">
                <h3>{lane.title}</h3>
                <p>{lane.body}</p>
              </article>
            ))}
          </div>

          <div className="stack-strip">
            {plan.stack.map((item) => (
              <span key={item} className="stack-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
