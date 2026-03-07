import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  RefreshCw,
  FileText,
  UserCheck,
  Clock,
  CreditCard,
  MessageSquare,
  AlertTriangle,
  Eye,
  Handshake,
  Trash2,
} from "lucide-react";

interface Policy {
  icon: React.ElementType;
  title: string;
  desc: string;
  tag: string;
}

const policies: Policy[] = [
  {
    icon: ShieldCheck,
    title: "Data Protection",
    desc: "All client data is encrypted, stored securely, and never shared with third parties without explicit consent. We follow industry-standard security protocols.",
    tag: "Security",
  },
  {
    icon: Lock,
    title: "Privacy First",
    desc: "We collect only what is necessary. Your personal and business information is handled with strict confidentiality at every stage of our engagement.",
    tag: "Privacy",
  },
  {
    icon: FileText,
    title: "Transparent Contracts",
    desc: "Every project begins with a clear, written agreement. No hidden fees, no vague terms — just honest, straightforward documentation you can trust.",
    tag: "Legal",
  },
  {
    icon: RefreshCw,
    title: "Revision Policy",
    desc: "We offer up to 3 rounds of revisions per project milestone, ensuring the final product aligns perfectly with your vision before delivery.",
    tag: "Delivery",
  },
  {
    icon: UserCheck,
    title: "Client Ownership",
    desc: "Once fully paid, you own 100% of the source code, design assets, and intellectual property. We retain no rights over your delivered project.",
    tag: "Ownership",
  },
  {
    icon: Clock,
    title: "Deadline Commitment",
    desc: "We take deadlines seriously. If we anticipate any delay, we notify you immediately and propose a revised timeline with zero extra cost.",
    tag: "Timeline",
  },
  {
    icon: CreditCard,
    title: "Payment Terms",
    desc: "We follow a milestone-based payment model — 50% upfront, 50% on delivery. No surprise charges. All pricing is agreed upon before work begins.",
    tag: "Finance",
  },
  {
    icon: MessageSquare,
    title: "Communication Policy",
    desc: "We respond to all client messages within 24 hours on business days. You'll always have a direct line to your project manager throughout development.",
    tag: "Support",
  },
  {
    icon: Eye,
    title: "No Tracking",
    desc: "We do not use invasive analytics or tracking tools on your website without your knowledge. Your users' privacy is respected by default.",
    tag: "Privacy",
  },
  {
    icon: AlertTriangle,
    title: "Dispute Resolution",
    desc: "Any disputes are handled professionally through direct negotiation first. We are committed to fair, transparent resolutions that respect both parties.",
    tag: "Legal",
  },
  {
    icon: Handshake,
    title: "NDA Available",
    desc: "We are happy to sign a Non-Disclosure Agreement before any project discussion. Your ideas, plans, and business data stay completely confidential.",
    tag: "Confidentiality",
  },
  {
    icon: Trash2,
    title: "Data Deletion",
    desc: "Upon project completion or client request, all temporary files, test data, and client assets stored on our systems are permanently deleted.",
    tag: "Security",
  },
];

const tagColors: Record<string, string> = {
  Security: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Privacy: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Legal: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Delivery: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Ownership: "bg-primary/10 text-primary border-primary/20",
  Timeline: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  Finance: "bg-green-500/10 text-green-400 border-green-500/20",
  Support: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Confidentiality: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Policies = () => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none translate-x-1/3" />

      <div className="max-w-7xl mx-auto relative">
        {/* ── Heading ── */}
        <div className="text-center mb-16 relative">


          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-primary/30 text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-4 bg-primary/5 tracking-widest uppercase"
          >
            ✦ Transparency &amp; Trust
          </motion.span>

          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-heading text-foreground"
          >
            Our <span className="gradient-text">Policies</span>
            <span className="block h-1 w-20 mx-auto gradient-bg mt-3 rounded-full" />
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm mt-5 max-w-2xl mx-auto leading-relaxed"
          >
            We believe in complete transparency with every client. These are the
            principles and commitments that govern how we work, communicate, and
            deliver — so you always know exactly what to expect.
          </motion.p>
        </div>

        {/* ── Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {policies.map((policy) => (
            <motion.div
              key={policy.title}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/35 card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Top gradient bar — reveals on hover */}
              <div className="absolute top-0 left-0 w-full h-0.5 gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Background glow on hover */}
              <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-2xl pointer-events-none" />

              {/* Tag */}
              <span
                className={`self-start text-[10px] font-bold px-2.5 py-1 rounded-full border tracking-widest uppercase mb-4 ${
                  tagColors[policy.tag] ?? "bg-primary/10 text-primary border-primary/20"
                }`}
              >
                {policy.tag}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                <policy.icon className="text-primary-foreground" size={20} />
              </div>

              {/* Text */}
              <h3 className="font-heading font-bold text-foreground text-base mb-2 leading-snug">
                {policy.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed flex-grow">
                {policy.desc}
              </p>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full gradient-bg transition-all duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom note ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-7 py-4 shadow-sm">
            <ShieldCheck className="text-primary" size={20} />
            <p className="text-sm text-muted-foreground">
              Have questions about our policies?{" "}
              <a
                href="/contact"
                className="text-primary font-semibold hover:underline underline-offset-2 transition-all"
              >
                Contact us anytime →
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Policies;