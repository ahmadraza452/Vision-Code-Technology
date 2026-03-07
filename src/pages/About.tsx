import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  ArrowRight,
  Code2,
  Users,
  Trophy,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const values = [
  {
    icon: Target,
    title: "Innovation",
    desc: "We stay ahead of technology trends to deliver forward-thinking solutions.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Open communication and honest project updates at every stage.",
  },
  {
    icon: Heart,
    title: "Client Focus",
    desc: "Your success is our priority. We build lasting partnerships, not just products.",
  },
  {
    icon: Code2,
    title: "Excellence",
    desc: "Clean code, best practices, and rigorous quality standards in every project.",
  },
];

const timeline = [
  {
    year: "2020",
    title: "Company Founded",
    desc: "Vision Code Technologies started with a small team of passionate developers.",
  },
  {
    year: "2021",
    title: "First Major Project",
    desc: "Delivered our first enterprise e-commerce platform, establishing our reputation.",
  },
  {
    year: "2023",
    title: "Team Expansion",
    desc: "Grew to a team of 20+ skilled developers, designers, and project managers.",
  },
  {
    year: "2025",
    title: "Global Reach",
    desc: "Serving clients across multiple countries with diverse technology solutions.",
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
        src="./about.jpg"
        alt="Vision Code Technologies Team"
        className="w-full h-full object-cover"
      />
    </motion.div>
  </motion.div>
);

const About = () => (
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
          className="text-lg lg:text-sm opacity-80 mb-8 leading-relaxed max-w-2xl  text-gray-300"
        >
          From e-commerce platforms to enterprise applications, Vision Code
          Technologies delivers end-to-end software solutions using the latest
          technologies. We specialize in building scalable, secure, and
          high-performance systems tailored to your unique business needs. Our
          expert team combines innovation with precision.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4"
        ></motion.div>
      </div>
    </HeroSection>{" "}
    {/* Mission */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block gradient-bg text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Our Mission
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-6">
              Empowering Businesses Through Technology
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Vision Code Technologies, we believe every business deserves
              access to world-class software solutions. Our mission is to bridge
              the gap between innovative ideas and technical execution.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We combine deep technical expertise with creative problem-solving
              to deliver solutions that not only meet requirements but exceed
              expectations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Users, value: "50+", label: "Happy Clients" },
              { icon: Trophy, value: "150+", label: "Projects Done" },
              { icon: Code2, value: "10+", label: "Technologies" },
              { icon: Clock, value: "5+", label: "Years Experience" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-6 card-shadow border border-border text-center"
              >
                <stat.icon className="text-primary mx-auto mb-3" size={28} />
                <div className="text-2xl font-bold font-heading gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    {/* Values */}
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Our Values"
          title="What Drives Us"
          description="Our core values shape every project we undertake and every relationship we build."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 card-shadow border border-border text-center"
            >
              <div className="gradient-bg w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    {/* Timeline */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Our Journey" title="Growing Together" />
        <div className="max-w-2xl mx-auto">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-6 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="gradient-bg text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {item.year.slice(2)}
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border mt-2" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="font-heading font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    {/* CTA */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-bg rounded-2xl p-10 lg:p-16 text-center text-primary-foreground"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
            Let's Work Together
          </h2>
          <p className="opacity-80 mb-8 max-w-xl mx-auto">
            Have a project in mind? We'd love to hear about it and discuss how
            we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            Get In Touch <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
