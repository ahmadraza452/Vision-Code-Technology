import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Layers,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/Testimonialssection";

// ── Data ────────────────────────────────────────────────────────────────────

interface Project {
  title: string;
  desc: string;
  tech: string[];
  img: string;
  link: string;
  type: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "OPTIBU URBAN-THREADS",
    desc: "Full stack MERN e-commerce platform with payment gateway integration. Users can also contact the owner using Email.js.",
    tech: ["JS", "React", "Node.js", "Express", "MongoDB"],
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=500&fit=crop&crop=center",
    link: "https://optibuy.onrender.com/",
    type: "Full Stack",
    color: "#4169E1",
  },
  {
    title: "OPTIBU ADMIN PANEL",
    desc: "Full stack MERN e-commerce admin panel only for authorized users with full product & order management.",
    tech: ["JS", "React", "Node.js", "Express", "MongoDB"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center",
    link: "https://optibuy-admin.onrender.com/",
    type: "Full Stack",
    color: "#2563EB",
  },
  {
    title: "Ecommerese Shop Easy Site",
    desc: "A complete full stack multi-vendor site where client can make its own stores and buy products. Also they can manage their own stores.",
    tech: ["JS", "React", "Tailwind", ".net", "supabase"],
    img: "https://media.istockphoto.com/id/2207271217/photo/optimization-of-procurement-or-purchasing-product-order-for-online-shopping-and-service.webp?a=1&b=1&s=612x612&w=0&k=20&c=P_y-L-YouyqzohO1ni94GlzDouI_VO11JVfX4zMW42c=",
    link: "https://shop-easy-frontend-flax.vercel.app/",
    type: "Full Stack",
    color: "#0EA5E9",
  },
  {
    title: "The Serene Haven – Hotel Management System ",
    desc: "Developed a hotel management system for bookings, cabins, and guests with real-time updates.",
    tech: ["JS", "React", "Tailwind", "React Query", "supabase"],
    img: "./resort.jpg",
    link: "https://serene-haven-nine.vercel.app/dashboard",
    type: "Full Stack",
    color: "#0EA5E9",
  },
  {
    title: "Fast React Pizza App",
    desc: "Built a fast and lightweight pizza ordering web app using React.js and Vite.Implemented Redux for cart and order state management.",
    tech: ["JS", "React", "Tailwind", "Redux", "Vercel"],
    img: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    link: "https://fast-react-pizza-co-bice.vercel.app/",
    type: "Frontend",
    color: "#0EA5E9",
  },
  {
    title: "REAL ESTATE SITE",
    desc: "A real estate frontend website with carousel and contact section using Email.js for direct owner communication.",
    tech: ["JS", "React", "Tailwind"],
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop&crop=center",
    link: "https://my-portfolio-ivory-alpha-41.vercel.app/",
    type: "Frontend",
    color: "#0EA5E9",
  },
  {
    title: "MUSIC COURSE SITE",
    desc: "A Next.js music website with routing and Aceternity UI for discovering and enrolling in music courses.",
    tech: ["JS", "Next.js", "Tailwind", "Aceternity UI"],
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=500&fit=crop&crop=center",
    link: "https://melody-lab.vercel.app/",
    type: "Frontend",
    color: "#6366F1",
  },
  {
    title: "WEATHER APP",
    desc: "A React based Weather App to check real-time weather data of any country using live weather API.",
    tech: ["JS", "React", "Tailwind", "Weather API"],
    img: "https://t4.ftcdn.net/jpg/05/76/50/59/360_F_576505936_VLdEYvjSBYgs1EkweYeGqBPgbxHFuenC.jpg",
    link: "https://weather-app-self-two-71.vercel.app",
    type: "API Integration",
    color: "#0284C7",
  },
  {
    title: "CURRENCY CONVERTER",
    desc: "Currency converter app with real-time exchange rates via currency exchange API integration.",
    tech: ["JS", "React", "Tailwind", "Currency API"],
    img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&h=500&fit=crop&crop=center",
    link: "https://currency-convertor-app-five.vercel.app/",
    type: "API Integration",
    color: "#0369A1",
  },
  {
    title: "PASSWORD GENERATOR",
    desc: "An interactive password generator where users can craft passwords from weak to strong with custom character sets.",
    tech: ["JS", "React", "Tailwind"],
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=500&fit=crop&crop=center",
    link: "https://restraunt-le-perla.vercel.app/",
    type: "Frontend",
    color: "#1D4ED8",
  },
  {
    title: "RESORT BOOKING SITE",
    desc: "Interactive restaurant booking website built with Next.js featuring beautiful colors and a rich carousel experience.",
    tech: ["JS", "React", "Tailwind", "React Carousel"],
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop&crop=center",
    link: "https://restraunt-le-perla.vercel.app/",
    type: "Design",
    color: "#7C3AED",
  },
];

const INITIAL_COUNT = 6;

const techColors: Record<string, string> = {
  JS: "#F7DF1E",
  React: "#61DAFB",
  "Node.js": "#68A063",
  Express: "#888",
  MongoDB: "#47A248",
  Tailwind: "#38BDF8",
  "Next.js": "#e2e8f0",
  "Aceternity UI": "#A78BFA",
  "Weather API": "#60A5FA",
  "Currency API": "#34D399",
  "React Carousel": "#FB7185",
  "CSS Animations": "#F472B6",
};

// ── Hero Image ──────────────────────────────────────────────────────────────

const HeroImage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85, x: 40 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
    className="flex items-center justify-center w-full h-full"
  >
    <motion.div
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="w-[360px] h-[360px] lg:w-[500px] lg:h-[320px] lg:mt-24 lg:ml-40 overflow-hidden"
      style={{
        border: "2px solid rgba(100,140,255,0.75)",
        boxShadow: `
          0 0 8px rgba(65,105,225,0.9),
          0 0 25px rgba(65,105,225,0.65),
          0 0 60px rgba(65,105,225,0.35),
          0 0 100px rgba(65,105,225,0.15),
          0 25px 60px rgba(0,0,0,0.5)
        `,
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop&crop=center"
        alt="Vision Code Technologies Team"
        className="w-full h-full object-cover"
      />
    </motion.div>
  </motion.div>
);

// ── Project Card ────────────────────────────────────────────────────────────

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          background: "#ffffff",
          border: hovered
            ? `1px solid ${project.color}99`
            : "1px solid #e2e8f0",
          borderRadius: "16px",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
          boxShadow: hovered
            ? `0 16px 48px rgba(65,105,225,0.15), 0 4px 16px rgba(0,0,0,0.08)`
            : "0 2px 12px rgba(0,0,0,0.06)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
        }}
      >
        {/* Image */}
        <div
          style={{ position: "relative", overflow: "hidden", height: "200px" }}
        >
          <img
            src={project.img}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s ease, filter 0.4s ease",
              transform: hovered ? "scale(1.08)" : "scale(1)",
              filter: hovered ? "brightness(1)" : "brightness(0.92)",
            }}
          />
          {/* Bottom gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom,transparent 30%,rgba(8,12,28,.95) 100%)",
            }}
          />
          {/* Top accent bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: `linear-gradient(90deg,${project.color},transparent)`,
            }}
          />
          {/* Type badge */}
          <div
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              background: `${project.color}22`,
              border: `1px solid ${project.color}55`,
              borderRadius: "6px",
              padding: "4px 10px",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: project.color,
              backdropFilter: "blur(8px)",
              textTransform: "uppercase" as const,
              fontFamily: "inherit",
            }}
          >
            {project.type}
          </div>
          {/* Live Demo button on hover */}
          <AnimatePresence>
            {hovered && project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.18 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "absolute",
                  bottom: "14px",
                  right: "14px",
                  background: project.color,
                  borderRadius: "8px",
                  padding: "8px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#fff",
                  textDecoration: "none",
                  boxShadow: `0 4px 20px ${project.color}55`,
                  letterSpacing: "0.05em",
                  fontFamily: "inherit",
                }}
              >
                Live Demo <ArrowUpRight size={13} />
              </motion.a>
            )}
          </AnimatePresence>
        </div>

        {/* Body */}
        <div style={{ padding: "20px 22px 22px" }}>
          <h3
            style={{
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              color: hovered ? "#1e3a8a" : "#1e293b",
              marginBottom: "10px",
              textTransform: "uppercase" as const,
              transition: "color 0.3s",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: "13px",
              color: "#64748b",
              lineHeight: 1.65,
              marginBottom: "18px",
            }}
          >
            {project.desc}
          </p>
          <div
            style={{
              height: "1px",
              background: `linear-gradient(90deg,${project.color}44,transparent)`,
              marginBottom: "16px",
            }}
          />
          <div
            style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px" }}
          >
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#1e40af",
                  background: "rgba(65,105,225,.08)",
                  border: "1px solid rgba(65,105,225,.25)",
                  borderRadius: "5px",
                  padding: "3px 8px",
                  textTransform: "uppercase" as const,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ── Projects Section (embedded) ─────────────────────────────────────────────

const ProjectsGrid = () => {
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_COUNT);
  const isExpanded = visibleCount >= projects.length;
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section
      style={{
        background: "#f8faff",
        padding: "100px 24px 120px",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid rgba(65,105,225,.3)",
              borderRadius: "999px",
              padding: "6px 18px",
              marginBottom: "24px",
              background: "rgba(65,105,225,.06)",
            }}
          >
            <Layers size={13} color="#4169E1" />
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "#4169E1",
                fontWeight: 600,
                textTransform: "uppercase" as const,
              }}
            >
              Our Work
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(32px,5vw,52px)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#0f172a",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Featured{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#4169E1,#2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Projects
            </span>
          </h2>

          <p
            style={{
              fontSize: "12px",
              color: "#64748b",
              maxWidth: "520px",
              margin: "0 auto 32px",
              lineHeight: 1.75,
            }}
          >
            Real-world applications built with modern stacks and clean
            architecture — from full-stack platforms to polished frontend
            experiences.
          </p>

          {/* Decorative rule */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "1px",
                background:
                  "linear-gradient(90deg,transparent,rgba(65,105,225,.4))",
              }}
            />
            <Code2 size={16} color="rgba(65,105,225,.7)" />
            <div
              style={{
                width: "60px",
                height: "1px",
                background:
                  "linear-gradient(90deg,rgba(65,105,225,.4),transparent)",
              }}
            />
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "48px",
            marginBottom: "64px",
            flexWrap: "wrap" as const,
          }}
        >
          {[
            { value: `${projects.length}+`, label: "Projects Built" },
            { value: "5+", label: "Technologies" },
            { value: "100%", label: "Open Source" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 900,
                  background: "linear-gradient(135deg,#4169E1,#2563EB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#94a3b8",
                  letterSpacing: "0.05em",
                  marginTop: "4px",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
            gap: "24px",
            marginBottom: "52px",
          }}
        >
          {projects.slice(0, visibleCount).map((project, index) => (
            <ProjectCard
              key={project.title + index}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Load More / View Less */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              setVisibleCount(isExpanded ? INITIAL_COUNT : projects.length)
            }
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 36px",
              background: "#4169E1",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              cursor: "pointer",
              textTransform: "uppercase" as const,
              boxShadow: "0 4px 20px rgba(65,105,225,.35)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "#2563EB";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 6px 28px rgba(65,105,225,.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "#4169E1";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 4px 20px rgba(65,105,225,.35)";
            }}
          >
            {isExpanded ? (
              <>
                <ChevronUp size={15} /> View Less
              </>
            ) : (
              <>
                <ChevronDown size={15} /> Load More Projects (
                {projects.length - INITIAL_COUNT} more)
              </>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

// ── Portfolio Page ──────────────────────────────────────────────────────────

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <HeroSection
        className="pt-32 pb-20 lg:pt-44 lg:pb-32"
        rightContent={<HeroImage />}
      >
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block border border-primary-foreground/30 text-sm px-4 py-1.5 rounded-full mb-6 opacity-80"
          >
            Our Work Speaks For Itself
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6"
          >
            Featured <span className="text-accent">Projects</span> &amp; Work
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-sm opacity-80 mb-8 leading-relaxed max-w-2xl text-gray-300"
          >
            A showcase of real-world projects built with modern technologies and
            clean architecture — from e-commerce platforms and full-stack web
            applications to stunning mobile apps and conversion-driven SEO
            strategies. Each project reflects our commitment to exceptional
            UI/UX Design, scalable development, and content that connects with
            audiences.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { value: `${projects.length}+`, label: "Total Projects" },
              { value: "5+", label: "Technologies" },
              { value: "100%", label: "Open Source" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold font-heading">
                  {stat.value}
                </div>
                <div className="text-sm opacity-70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </HeroSection>

      {/* ── Projects Grid ── */}
      <ProjectsGrid />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
