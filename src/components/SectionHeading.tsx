import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ badge, title, description }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
  >
    {badge && (
      <span className="inline-block gradient-bg text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
        {badge}
      </span>
    )}
    <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
