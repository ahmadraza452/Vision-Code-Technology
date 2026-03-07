import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Layout,
  Code2,
  Database,
  Smartphone,
  Globe,
  ArrowRight,
  Users,
  Award,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import TechCarousel from "@/components/TechCarousel";
import WelcomePopup from "@/components/Welcomepopup";
import FloatingButtons from "@/components/Floatingbuttons ";

const services = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    desc: "Custom online stores with payment integration, inventory management, and scalable architecture.",
  },
  {
    icon: Layout,
    title: "Portfolio Websites",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    desc: "Stunning portfolio sites that showcase your work and make a lasting impression.",
  },
  {
    icon: Code2,
    title: ".NET & C# Solutions",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&q=80",
    desc: "Enterprise-grade applications built with .NET framework, C#, and Q# for quantum computing.",
  },
  {
    icon: Globe,
    title: "React & Node.js Apps",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
    desc: "Modern full-stack applications with React frontends and Node.js backends.",
  },
  {
    icon: Database,
    title: "Database Solutions",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80",
    desc: "MongoDB, SQL Server, and PostgreSQL - optimized data architecture for your needs.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Apps",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    desc: "Fully functional web applications that work flawlessly across all devices.",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <WelcomePopup/>

    {/* Hero */}
    <HeroSection className="pt-32 pb-20 lg:pt-44 lg:pb-32">
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
          From e-commerce platforms to enterprise applications, Vision Code
          Technologies delivers end-to-end software solutions using the latest
          technologies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            to="/services"
            className="bg-primary-foreground text-foreground px-7 py-3 rounded-lg font-semibold transition-all hover:opacity-90 flex items-center gap-2"
          >
            Our Services <ArrowRight size={18} />
          </Link>
          <Link
            to="/contact"
            className="border border-primary-foreground/40 px-7 py-3 rounded-lg font-semibold transition-all hover:bg-primary-foreground/10"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </HeroSection>

    {/* Stats */}
    <section className="py-12 bg-card border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold font-heading gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="What We Do"
          title="Our Core Services"
          description="We specialize in delivering comprehensive software solutions tailored to your business needs."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-primary/30"
            >
              {/* Banner Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Icon over image */}
                <div className="absolute bottom-3 left-4 gradient-bg w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
                  <service.icon className="text-primary-foreground" size={20} />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Why Us"
          title="Why Choose Vision Code?"
          description="We combine technical expertise with a client-first approach to deliver exceptional results."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Cutting-Edge Tech",
              desc: "We use the latest frameworks and tools — React, .NET, Node.js, MongoDB, and more.",
            },
            {
              icon: Users,
              title: "Dedicated Team",
              desc: "A passionate team of developers, designers, and strategists working together for your success.",
            },
            {
              icon: Award,
              title: "Quality Assured",
              desc: "Rigorous testing and code reviews ensure your product is reliable, secure, and performant.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="gradient-bg w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <item.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-bg rounded-2xl p-10 lg:p-16 text-center text-primary-foreground"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="opacity-80 mb-8 max-w-xl mx-auto">
            Let's turn your vision into reality. Get in touch for a free
            consultation and project estimate.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-3.5 rounded-lg font-semibold transition-all hover:opacity-90"
          >
            Get Started Today <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
      <div className="mt-9">
        <TechCarousel />
      </div>
    </section>
    <FloatingButtons/>

    <Footer />
  </div>
);

export default Index;