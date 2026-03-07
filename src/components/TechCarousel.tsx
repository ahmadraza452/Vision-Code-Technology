import { motion } from "framer-motion";
import {
  FileCode,
  Layers,
  Code,
  Server,
  Database,
  Cpu,
  Palette,
  ShoppingBag,
  Monitor,
  Layout,
  Search,
  PenTool,
} from "lucide-react";

const techItems = [
  { name: "SEO", icon: Search, color: "text-lime-500" },
  { name: "Content Marketing", icon: PenTool, color: "text-rose-400" },
  { name: "HTML5", icon: FileCode, color: "text-orange-500" },
  { name: "CSS3", icon: Layers, color: "text-blue-500" },
  { name: "JavaScript", icon: Code, color: "text-yellow-400" },
  { name: "Node.js", icon: Server, color: "text-green-500" },
  { name: "MongoDB", icon: Database, color: "text-emerald-600" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-400" },
  { name: "SQL Server", icon: Database, color: "text-red-500" },
  { name: ".NET Core", icon: Cpu, color: "text-purple-600" },
  { name: "C#", icon: Code, color: "text-violet-500" },
  { name: "Q#", icon: Cpu, color: "text-cyan-400" },
  { name: "UI/UX Design", icon: Palette, color: "text-pink-500" },
  { name: "E-Commerce", icon: ShoppingBag, color: "text-amber-500" },
  { name: "Frontend", icon: Monitor, color: "text-indigo-500" },
  { name: "Backend", icon: Layout, color: "text-slate-400" },
];
const TechCarousel = () => {
  // Duplicate the array to ensure a seamless loop
  const duplicatedTech = [...techItems, ...techItems];

  return (
    <div className="py-12 bg-card/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground opacity-60">
          Our Full-Stack Ecosystem
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 30, // Adjust speed here
            repeat: Infinity,
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-4 mx-8 group cursor-default"
            >
              <div
                className={`p-3 rounded-xl bg-secondary/50 group-hover:bg-primary transition-colors duration-300`}
              >
                <tech.icon
                  size={24}
                  className={`${tech.color} group-hover:text-white transition-colors duration-300`}
                />
              </div>
              <span className="text-xl font-heading font-bold text-foreground/70 group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for the "Fade" effect on edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </div>
  );
};

export default TechCarousel;
