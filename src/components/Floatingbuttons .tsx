import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

// ✅ Apna WhatsApp number yahan daalo (with country code, no + sign)
const WHATSAPP_NUMBER = "923106099821";
const WHATSAPP_MESSAGE = "Hi! I'm interested in your SEO, Link Building, Guest Posting, and Web Development services. I'd love to discuss how Sky Rocket SEO Solutions can help grow my business.";

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", damping: 18, stiffness: 300 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground hover:border-primary/40 hover:text-primary transition-colors group"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowUp size={18} />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", damping: 18, stiffness: 300 }}
        className="relative"
      >
        {/* Ping animation rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping [animation-delay:0.4s]" />

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.12, rotate: [0, -8, 8, 0] }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", damping: 12 }}
          className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-xl flex items-center justify-center"
          style={{
            boxShadow: "0 4px 24px rgba(37,211,102,0.45)",
          }}
        >
          {/* WhatsApp SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="28"
            height="28"
            fill="white"
          >
            <path d="M16.003 3C9.374 3 4 8.373 4 15.003c0 2.18.586 4.21 1.6 5.963L4 29l8.23-1.57A11.94 11.94 0 0016.003 28C22.63 28 28 22.627 28 15.997 28 9.373 22.63 3 16.003 3zm0 21.8a9.75 9.75 0 01-5.01-1.385l-.36-.213-3.73.712.74-3.64-.235-.374A9.756 9.756 0 016.2 15.003c0-5.41 4.393-9.803 9.803-9.803 5.41 0 9.8 4.393 9.8 9.803 0 5.407-4.39 9.797-9.8 9.797zm5.37-7.33c-.294-.148-1.74-.858-2.01-.957-.27-.098-.467-.147-.664.148-.196.294-.762.957-.934 1.154-.172.196-.344.22-.638.073-.294-.147-1.24-.457-2.362-1.457-.873-.778-1.462-1.74-1.634-2.034-.172-.294-.018-.453.129-.6.133-.132.294-.344.442-.516.147-.172.196-.294.294-.49.098-.196.049-.368-.025-.516-.073-.147-.664-1.6-.91-2.19-.24-.575-.484-.497-.664-.507l-.566-.01c-.196 0-.516.073-.786.368-.27.294-1.03 1.005-1.03 2.45 0 1.446 1.054 2.843 1.2 3.04.147.196 2.073 3.165 5.02 4.44.702.303 1.25.483 1.676.618.704.224 1.345.192 1.851.116.565-.084 1.74-.712 1.985-1.4.245-.688.245-1.278.172-1.4-.073-.12-.27-.196-.565-.343z" />
          </svg>
        </motion.a>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-16 top-1/2 -translate-y-1/2 bg-card border border-border text-foreground text-xs font-medium px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap pointer-events-none opacity-0"
          style={{ transition: "opacity 0.2s, transform 0.2s" }}
        >
          Chat on WhatsApp
          <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-border" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FloatingButtons;