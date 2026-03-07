import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Raza",
    role: "CEO, TechVentures PK",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    feedback: "Vision Code Technologies delivered our e-commerce platform beyond expectations. Clean code, timely delivery, and exceptional attention to detail. Highly recommended!",
    rating: 5,
    project: "E-Commerce Platform",
  },
  {
    id: 2,
    name: "Sara Khan",
    role: "Founder, EduLearn Academy",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    feedback: "Working with Vision Code was an absolute pleasure. Stunning UI, smooth navigation — our students love the experience. Professional, creative, and reliable!",
    rating: 5,
    project: "Music Course Website",
  },
  {
    id: 3,
    name: "Usman Tariq",
    role: "Director, Prime Realty",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    feedback: "Our real estate website looks stunning. Everything works flawlessly. Vision Code understood our brand perfectly and brought our vision to life beautifully.",
    rating: 5,
    project: "Real Estate Website",
  },
  {
    id: 4,
    name: "Fatima Malik",
    role: "Marketing Head, FoodieHub",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    feedback: "The food landing page drives incredible engagement. Clean layout, beautiful colors, and fast performance have boosted our online orders significantly.",
    rating: 5,
    project: "Food Landing Page",
  },
  {
    id: 5,
    name: "Bilal Hussain",
    role: "CTO, FinTech Solutions",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    feedback: "The currency converter app was delivered with precision. Real-time API integration, responsive design, and beautiful UI. Vision Code sets the standard!",
    rating: 5,
    project: "Currency Converter App",
  },
  {
    id: 6,
    name: "Ayesha Noor",
    role: "Owner, Le Perla Resort",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    feedback: "Our resort website received so many compliments. Design elegant, booking flow seamless, and the team was responsive throughout. Outstanding work!",
    rating: 5,
    project: "Resort Booking Site",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div style={{ display: "flex", gap: "2px", marginBottom: "12px" }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={13} fill={i < count ? "#4169E1" : "none"} color={i < count ? "#4169E1" : "#cbd5e1"} />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const perPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(total / perPage);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + totalPages) % totalPages);
  };

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(() => go(1), 4500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoPlay, current, totalPages]);

  const pause = () => { setAutoPlay(false); if (timerRef.current) clearInterval(timerRef.current); };
  const resume = () => setAutoPlay(true);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
  };

  const visibleCards = Array.from({ length: perPage }, (_, i) =>
    testimonials[(current * perPage + i) % total]
  );

  return (
    <section style={{
      background: "#ffffff",
      padding: "80px 20px 88px",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');
      `}</style>

      {/* Top border */}
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%", height: "1.5px",
        background: "linear-gradient(90deg, transparent 0%, #4169E1 25%, #2563EB 50%, #4169E1 75%, transparent 100%)",
        borderRadius: "999px",
      }} />

      {/* Bg decorations */}
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(65,105,225,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, rgba(65,105,225,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "960px", margin: "0 auto" }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ textAlign: "center", marginBottom: "44px" }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "7px",
            border: "1px solid rgba(65,105,225,.25)", borderRadius: "999px",
            padding: "5px 16px", marginBottom: "14px",
            background: "rgba(65,105,225,.05)",
          }}>
            <Quote size={11} color="#4169E1" />
            <span style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#4169E1", fontWeight: 700, textTransform: "uppercase" as const, fontFamily: "'Syne', sans-serif" }}>
              Client Feedback
            </span>
          </div>

          <h2 style={{
            fontSize: "clamp(22px, 3.5vw, 40px)", fontWeight: 900,
            letterSpacing: "-0.02em", color: "#0f172a", lineHeight: 1.15,
            marginBottom: "10px", fontFamily: "'Syne', sans-serif",
          }}>
            What Our{" "}
            <span style={{ background: "linear-gradient(135deg, #4169E1, #2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Clients Say
            </span>
          </h2>

          <p style={{ fontSize: "13.5px", color: "#64748b", maxWidth: "400px", margin: "0 auto", lineHeight: 1.7 }}>
            Real feedback from real people who trusted us to build their digital presence.
          </p>
        </motion.div>

        {/* Carousel Area */}
        <div onMouseEnter={pause} onMouseLeave={resume}>

          {/* Cards */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current + "-" + perPage}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: "16px",
                }}
              >
                {visibleCards.map((t) => (
                  <div
                    key={t.id}
                    style={{
                      background: "#fff",
                      border: "1.5px solid rgba(65,105,225,0.16)",
                      borderRadius: "16px",
                      padding: "24px 24px 20px",
                      boxShadow: "0 4px 20px rgba(65,105,225,0.07), 0 1px 4px rgba(0,0,0,0.04)",
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column" as const,
                    }}
                  >
                    {/* Top accent */}
                    <div style={{
                      position: "absolute", top: 0, left: 0, right: 0, height: "2.5px",
                      background: "linear-gradient(90deg, #4169E1, #2563EB)",
                    }} />

                    {/* Faint big quote */}
                    <div style={{
                      position: "absolute", top: "8px", right: "18px",
                      fontSize: "64px", lineHeight: 1, color: "rgba(65,105,225,0.06)",
                      fontFamily: "Georgia, serif", userSelect: "none" as const,
                    }}>
                      "
                    </div>

                    {/* Project tag */}
                    <div style={{
                      alignSelf: "flex-start",
                      background: "rgba(65,105,225,0.07)", border: "1px solid rgba(65,105,225,0.16)",
                      borderRadius: "5px", padding: "3px 9px",
                      fontSize: "9px", fontWeight: 700, letterSpacing: "0.08em",
                      color: "#4169E1", textTransform: "uppercase" as const,
                      marginBottom: "12px",
                    }}>
                      {t.project}
                    </div>

                    <StarRating count={t.rating} />

                    {/* Feedback text */}
                    <p style={{
                      fontSize: "13px", color: "#475569", lineHeight: 1.75,
                      marginBottom: "18px", fontStyle: "italic", flexGrow: 1,
                    }}>
                      "{t.feedback}"
                    </p>

                    {/* Divider */}
                    <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(65,105,225,0.18), transparent)", marginBottom: "16px" }} />

                    {/* Author */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ position: "relative", flexShrink: 0 }}>
                        <img
                          src={t.img}
                          alt={t.name}
                          style={{
                            width: "42px", height: "42px", borderRadius: "50%",
                            objectFit: "cover", border: "2.5px solid #4169E1",
                            boxShadow: "0 0 0 3px rgba(65,105,225,0.12)",
                            display: "block",
                          }}
                        />
                        <div style={{
                          position: "absolute", bottom: "1px", right: "1px",
                          width: "9px", height: "9px", borderRadius: "50%",
                          background: "#22c55e", border: "2px solid #fff",
                        }} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: "13px", fontWeight: 800, color: "#0f172a", fontFamily: "'Syne', sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>
                          {t.name}
                        </div>
                        <div style={{ fontSize: "11px", color: "#4169E1", fontWeight: 600, marginTop: "1px" }}>
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls row */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", marginTop: "28px" }}>

            <motion.button
              whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
              onClick={() => go(-1)}
              style={{
                width: "36px", height: "36px", borderRadius: "50%",
                border: "1.5px solid rgba(65,105,225,0.28)", background: "#fff",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 8px rgba(65,105,225,0.08)", color: "#4169E1", transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#4169E1"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#4169E1"; }}
            >
              <ChevronLeft size={15} />
            </motion.button>

            {/* Page dots */}
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              {Array.from({ length: totalPages }).map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => goTo(i)}
                  animate={{ width: i === current ? 22 : 7, background: i === current ? "#4169E1" : "#e2e8f0" }}
                  transition={{ duration: 0.3 }}
                  style={{ height: "7px", borderRadius: "99px", border: "none", cursor: "pointer", padding: 0 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
              onClick={() => go(1)}
              style={{
                width: "36px", height: "36px", borderRadius: "50%",
                border: "1.5px solid rgba(65,105,225,0.28)", background: "#fff",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 8px rgba(65,105,225,0.08)", color: "#4169E1", transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#4169E1"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#4169E1"; }}
            >
              <ChevronRight size={15} />
            </motion.button>
          </div>

          {/* Avatar strip */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", marginTop: "20px" }}>
            {testimonials.map((t, i) => {
              const pageIdx = Math.floor(i / perPage);
              const isActive = pageIdx === current;
              return (
                <motion.button
                  key={i}
                  onClick={() => goTo(pageIdx)}
                  animate={{ scale: isActive ? 1.14 : 1, opacity: isActive ? 1 : 0.38 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    padding: 0, border: isActive ? "2px solid #4169E1" : "2px solid transparent",
                    borderRadius: "50%", cursor: "pointer", background: "none",
                    boxShadow: isActive ? "0 0 0 3px rgba(65,105,225,0.16)" : "none",
                  }}
                >
                  <img src={t.img} alt={t.name} style={{ width: "28px", height: "28px", borderRadius: "50%", objectFit: "cover", display: "block" }} />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;