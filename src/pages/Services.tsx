import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Layout,
  Code2,
  Database,
  Globe,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

import ServicesCarousel from "@/components/Servicescarousel ";
const services = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Ecosystems",
    desc: "Architecting high-conversion digital storefronts with headless commerce integration and global scale capability.",
    techs: ["Next.js", "Stripe", "Shopify Plus", "Redis"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000",
  },
  {
    icon: Layout,
    title: "Enterprise Web Apps",
    desc: "Complex dashboard systems and internal tools optimized for performance, security, and high-frequency data updates.",
    techs: ["React", "TypeScript", "TanStack Query"],
    image:
      "https://media.istockphoto.com/id/1349390515/photo/paperless-workplace-idea-e-signing-electronic-signature-document-management-businessman-signs.jpg?s=612x612&w=0&k=20&c=EyQl13diegNV5DVLnb0krcAcRDhL7NiSA7IEVImZs6Q=",
  },
  {
    icon: Code2,
    title: "Custom .NET Architecture",
    desc: "Robust backend infrastructure utilizing C# and .NET 8 for mission-critical enterprise applications and APIs.",
    techs: [".NET 8", "C#", "Microservices", "Azure"],
    image:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=2000",
  },
  {
    icon: Globe,
    title: "Search Engine Optimization (SEO)",
    desc: "Improve your website visibility on Google with technical SEO, keyword research, and on-page optimization strategies.",
    techs: ["Google Analytics", "Search Console", "Ahrefs", "SEMrush"],
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=2000",
  },
  {
    icon: Code2,
    title: "Content Marketing",
    desc: "Strategic content creation including blogs, landing pages, and social media content to grow your audience and brand.",
    techs: ["Content Strategy", "Copywriting", "Blogging", "Social Media"],
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=2000",
  },

  {
    icon: Database,
    title: "Data Engineering",
    desc: "Advanced database modeling and real-time processing pipelines for big data visualization and analytics.",
    techs: ["PostgreSQL", "MongoDB", "Kafka", "Python"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile",
    desc: "Native-feel mobile experiences delivered via React Native, ensuring rapid deployment across iOS and Android.",
    techs: ["React Native", "Expo", "Firebase", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000",
  },
  {
    icon: Globe,
    title: "Cloud Native Solutions",
    desc: "Scaling your business to the edge with serverless architectures and automated CI/CD deployments.",
    techs: ["AWS", "Docker", "Kubernetes", "Terraform"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
  },
];

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
        src="./services.jpg"
        alt="Sky Rocket SEO Solutions Team"
        className="w-full h-full object-cover"
      />
    </motion.div>
  </motion.div>
);

const Services = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* Enhanced Hero Section */}
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
          Transforming Ideas Into Digital Reality
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6"
        >
          We Build <span className="text-accent">Powerful</span> Digital
          Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg lg:text-sm opacity-80 mb-8 leading-relaxed max-w-2xl text-gray-300"
        >
          From stunning web platforms to powerful mobile applications, Vision
          Code Technologies delivers end-to-end software solutions crafted with
          cutting-edge technologies. We specialize in Web Development, Mobile
          App Development, UI/UX Design, SEO, and Content Marketing — creating
          seamless digital experiences that are both visually compelling and
          functionally robust.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4"
        ></motion.div>
      </div>
    </HeroSection>{" "}
    {/* Grid Services Section */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Expertise"
          title="World-Class Services"
          description="High-performance solutions tailored for the modern web."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              <div className="p-8 relative -mt-12">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-xl group-hover:-translate-y-2 transition-transform duration-300">
                  <service.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3 italic">
                  "{service.desc}"
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.techs.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-tighter font-bold px-3 py-1 bg-secondary rounded-md border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <ServicesCarousel />
    {/* Modernized Tech Stack Grid */}
    <section className="py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-black font-heading mb-4">
              The <span className="text-primary">Stack</span>
            </h2>
            <p className="text-muted-foreground">
              We use only verified, high-performance frameworks to ensure your
              project scales without friction.
            </p>
          </div>
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Layers, label: "Frontend", count: "12 Frameworks" },
              { icon: Cpu, label: "Backend", count: "8 Languages" },
              { icon: ShieldCheck, label: "Security", count: "Military Grade" },
              { icon: Globe, label: "Cloud", count: "Multi-Region" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-card border border-border rounded-2xl text-center hover:border-primary/50 transition-colors"
              >
                <item.icon size={32} className="mx-auto mb-4 text-primary" />
                <h4 className="font-bold">{item.label}</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Services;
