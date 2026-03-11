"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-[10010] p-4 sm:p-6"
          dir="rtl"
        >
          <div
            className="max-w-3xl mx-auto rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ backgroundColor: "var(--theme-bg-card)", border: "1px solid var(--theme-border)" }}
          >
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-6 h-6 shrink-0 mt-0.5" style={{ color: "var(--theme-primary)" }} />
              <div>
                <p className="text-white text-sm font-[family-name:var(--font-heebo)] font-bold mb-1">
                  אתר זה משתמש בעוגיות
                </p>
                <p className="text-xs font-[family-name:var(--font-heebo)] leading-relaxed" style={{ color: "var(--theme-text-muted)" }}>
                  אנו משתמשים בעוגיות לצורך שיפור חוויית הגלישה, ניתוח תנועה באתר והתאמת תוכן.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
              <button onClick={handleDecline} className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-white/5 text-sm font-[family-name:var(--font-heebo)] font-bold hover:bg-white/10 transition cursor-pointer" style={{ color: "var(--theme-text-muted)" }}>
                דחייה
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-white text-sm font-[family-name:var(--font-heebo)] font-bold transition cursor-pointer"
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                אישור
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
