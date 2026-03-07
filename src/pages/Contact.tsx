import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Policies from "@/components/Policies";

// ══════════════════════════════════════════════
// ✅ APNI EMAILJS CREDENTIALS YAHAN DAALO
// ══════════════════════════════════════════════
const EMAILJS_SERVICE_ID = "service_a9m0y1l"; // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_xve16nj"; // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY = "Kveb6za_8yuVm3H-k"; // e.g. "aBcDeFgHiJkLmNoP"
// ══════════════════════════════════════════════

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@visioncodetech.com",
    href: "mailto:info@visioncodetech.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 300 000 0000",
    href: "tel:+923000000000",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Tech Hub, Lahore, Pakistan",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 7:00 PM",
  },
];

const serviceOptions = [
  "E-Commerce Development",
  "Portfolio Website",
  ".NET / C# Development",
  "React / Node.js App",
  "Database Solutions",
  "Other",
];

// ── Hero Image ────────────────────────────────
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
        src="./contact.jpg"
        alt="Vision Code Technologies Team"
        className="w-full h-full object-cover"
      />
    </motion.div>
  </motion.div>
);

// ── Contact Page ──────────────────────────────
const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // ✅ EmailJS send — template variables match {{name}}, {{email}}, etc.
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || "Not provided",
          service: form.service || "Not specified",
          message: form.message,
          reply_to: form.email,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "✅ Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      setIsSubmitting(false);
      console.error("EmailJS Error:", error);
      toast({
        title: "❌ Failed to send message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    }
  };

  // ── Success State ──
  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="pt-32 pb-20 lg:pt-44 lg:pb-32">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                className="gradient-bg w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
              >
                <CheckCircle className="text-primary-foreground" size={44} />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold font-heading text-foreground mb-3"
              >
                Thank You, {form.name.split(" ")[0]}!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground mb-8 leading-relaxed"
              >
                Your message has been received. Our team will review your
                inquiry and get back to you at{" "}
                <span className="text-primary font-medium">{form.email}</span>{" "}
                within 24 hours.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    message: "",
                  });
                }}
                className="gradient-bg text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md"
              >
                Send Another Message
              </motion.button>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // ── Main Contact Page ──
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
             Let's Build Something Great Together
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6"
          >
            Get In <span className="text-accent">Touch</span> With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-sm opacity-80 mb-8 leading-relaxed max-w-2xl text-gray-300"
          >
            Have a project in mind or a problem worth solving? We'd love to hear
            your vision. Share the details with us and our team will get back to
            you within 24 hours with tailored insights and next steps to bring
            your idea to life.
          </motion.p>

          {/* ── Follow Us Social Icons ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <span className="text-sm font-medium text-gray-400 tracking-wide">
              Follow us on:
            </span>
            <div className="flex items-center gap-3">
              {/* Twitter / X */}
              <a
                href="https://twitter.com/visioncodetech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-md hover:scale-110 hover:opacity-90 transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/visioncodetech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-md hover:scale-110 hover:opacity-90 transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/visioncodetech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-md hover:scale-110 hover:opacity-90 transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/visioncodetech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-md hover:scale-110 hover:opacity-90 transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </motion.div>

        </div>
      </HeroSection>

      {/* Form + Info */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* ── Contact Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl font-bold font-heading text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground text-sm mb-7">
                Fill in the form below and we'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      maxLength={255}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      maxLength={20}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      placeholder="+92 300 000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Your Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    maxLength={2000}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                    placeholder="Tell us about your project, budget, and timeline..."
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1 text-right">
                    {form.message.length}/2000
                  </p>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="gradient-bg text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all primary-shadow disabled:opacity-60 flex items-center gap-2 shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={17} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* ── Contact Info ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold font-heading text-foreground mb-2">
                Contact Information
              </h2>
              <p className="text-muted-foreground text-sm mb-7">
                Prefer to reach out directly? Here's how to find us.
              </p>

              <div className="space-y-5">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="gradient-bg w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200">
                      <item.icon
                        className="text-primary-foreground"
                        size={18}
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm text-foreground font-medium">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office note */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 bg-secondary rounded-2xl p-6 border border-border"
              >
                <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full gradient-bg inline-block" />
                  Our Office
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Located in Lahore, Pakistan. We're always open for in-person
                  meetings and virtual calls. Schedule a visit today!
                </p>
              </motion.div>

              {/* Response time badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-4 flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-xl px-4 py-3"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs text-primary font-medium">
                  We typically respond within <strong>24 hours</strong>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Policies />
      <Footer />
    </div>
  );
};

export default Contact;