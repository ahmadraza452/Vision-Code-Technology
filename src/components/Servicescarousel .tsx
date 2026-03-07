import { useState } from "react";

const services = [
  {
    title: "Search Engine Optimization",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "Content Marketing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Website Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Graphic Designing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
      </svg>
    ),
  },
  {
    title: "Social Media Marketing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 20a6 6 0 0 0-12 0" />
        <circle cx="12" cy="10" r="4" />
        <circle cx="6" cy="8" r="2" />
        <circle cx="18" cy="8" r="2" />
        <path d="M4 20a4 4 0 0 1 8 0M12 20a4 4 0 0 1 8 0" />
      </svg>
    ),
  },
];

const allCards = [...services, ...services, ...services];

export default function ServicesCarousel() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-14 overflow-hidden" style={{ fontFamily: "'Sora', sans-serif" }}>
      {/* Heading */}
<div className="text-center mb-10">
  <span
    className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4"
    style={{ background: "linear-gradient(135deg, #2563eb, #1e40af)", color: "#fff" }}
  >
    What We Offer
  </span>
  <h2
    className="text-5xl font-bold mb-3"
    style={{ color: "#0f172a", letterSpacing: "-0.02em" }}
  >
    Our Services
  </h2>
  <p className="text-base" style={{ color: "#64748b" }}>
    High-performance solutions tailored for the modern web.
  </p>
</div>

      {/* Fade masks + track */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }}
        />

        <div
          className="flex gap-4 w-max px-4"
          style={{ animation: paused ? "none" : "scrollTrack 20s linear infinite" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {allCards.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap');

        @keyframes scrollTrack {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-210px * 5 - 80px)); }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "195px",
        flexShrink: 0,
        padding: "18px",
        borderRadius: "16px",
        background: hovered
          ? "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)"
          : "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
        border: `1.5px solid ${hovered ? "#3b82f6" : "#bfdbfe"}`,
        boxShadow: hovered
          ? "0 8px 28px rgba(37,99,235,0.25)"
          : "0 2px 10px rgba(37,99,235,0.07)",
        transform: hovered ? "translateY(-5px) scale(1.03)" : "translateY(0) scale(1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: hovered ? "rgba(255,255,255,0.2)" : "linear-gradient(135deg, #2563eb, #1e40af)",
          color: hovered ? "#fff" : "#fff",
          boxShadow: hovered ? "none" : "0 4px 10px rgba(37,99,235,0.3)",
          transition: "all 0.3s ease",
        }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <p
        style={{
          fontSize: "13px",
          fontWeight: 600,
          lineHeight: "1.4",
          color: hovered ? "#fff" : "#1e3a8a",
          transition: "color 0.3s ease",
        }}
      >
        {service.title}
      </p>

    </div>
  );
}