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
    value: "info@skyrocketseosolutions.tech",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+966 54 617 1664",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Lahore, Pakistan",
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
        alt="Sky Rocket SEO Solutions Team"
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
              {/* Instagram */}
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/112232117"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-md hover:scale-110 hover:opacity-90 transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.036-1.85-3.036-1.853 0-2.136 1.445-2.136 2.939v5.666H9.354V9h3.414v1.561h.049c.476-.899 1.637-1.85 3.37-1.85 3.598 0 4.264 2.368 4.264 5.448v6.293zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.205 24 24 23.227 24 22.271V1.729C24 .774 23.205 0 22.225 0z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61586962774724&rdid=ioKyt6mtNhnrFs9I&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F185n8CJnZZ%2F#"
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
