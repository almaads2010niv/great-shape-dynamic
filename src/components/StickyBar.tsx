"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function StickyBar() {
  const { content } = useTheme();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-50 bg-[var(--theme-bg)]/90 backdrop-blur-xl border-b border-[var(--theme-border)]"
          dir="rtl"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Flame className="w-5 h-5 text-[var(--theme-primary)] animate-pulse hidden sm:block" />
              <span className="text-white text-sm font-[family-name:var(--font-heebo)] font-bold hidden sm:block">
                {content.stickyBar.leftText}
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToCheckout}
              className="bg-[var(--theme-primary)] hover:bg-[var(--theme-primary-light)] text-white font-[family-name:var(--font-heebo)] font-bold text-sm px-6 py-2.5 rounded-[var(--theme-radius)] transition-all cursor-pointer whitespace-nowrap"
            >
              {content.stickyBar.ctaText}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
