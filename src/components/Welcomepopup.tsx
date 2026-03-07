import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Sparkles, Star } from "lucide-react";

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 1 second when page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-lg relative">
              {/* Glowing background effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-30 blur-xl animate-pulse" />

              {/* Card */}
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
                {/* Top gradient bar */}
                <div className="gradient-bg h-1.5 w-full" />

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary hover:bg-border flex items-center justify-center transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X size={16} />
                </button>

                {/* Content */}
                <div className="p-8 lg:p-10">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
                  >
                    <Sparkles size={12} />
                    Welcome to Vision Code Technologies
                  </motion.div>

                  {/* Heading */}
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-2xl lg:text-3xl font-bold font-heading text-foreground leading-tight mb-3"
                  >
                    Get Your First Website{" "}
                    <span className="gradient-text">Built by Us!</span>
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-muted-foreground text-sm leading-relaxed mb-6"
                  >
                    Do you want to create your first portfolio or business
                    website? Our expert team will build your dream website at an
                    affordable price — fast, modern, and fully responsive!
                  </motion.p>

                  {/* Features list */}
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="space-y-2 mb-7"
                  >
                    {[
                      "Free consultation aur project estimate",
                      "Modern design with latest technologies",
                      "Fast delivery & ongoing support",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-foreground/80"
                      >
                        <span className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                          <Star size={10} className="text-primary-foreground" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </motion.ul>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <Link
                      to="/contact"
                      onClick={handleClose}
                      className="gradient-bg flex-1 flex items-center justify-center gap-2 text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Contact Now <ArrowRight size={16} />
                    </Link>
                    <button
                      onClick={handleClose}
                      className="flex-1 border border-border text-muted-foreground px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-secondary hover:text-foreground"
                    >
                      Maybe Later
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
