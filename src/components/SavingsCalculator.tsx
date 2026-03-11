"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingDown } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function SavingsCalculator() {
  const { content } = useTheme();
  const [months, setMonths] = useState(12);

  if (!content.showSections.savingsCalculator) return null;

  const regularPrice = 419;
  const vipPrice = 249;
  const monthlySaving = regularPrice - vipPrice;
  const totalSaving = monthlySaving * months;
  const extraSaving = regularPrice - 1;
  const grandTotal = totalSaving + extraSaving;

  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--theme-bg), var(--theme-bg-card-alt), var(--theme-bg))" }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]" style={{ color: "var(--theme-primary)" }}>חשבו בעצמכם</span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            מחשבון <span className="text-gradient-primary">החיסכון</span> שלכם
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] p-8 sm:p-10"
          style={{ background: "linear-gradient(to bottom right, var(--theme-bg-card), var(--theme-bg-card-alt))", border: "1px solid var(--theme-border)" }}
        >
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <label className="font-[family-name:var(--font-heebo)]" style={{ color: "var(--theme-text-muted)" }}>כמה חודשים אתם מתכננים להתאמן?</label>
              <span className="font-[family-name:var(--font-heebo)] font-black text-2xl text-white">{months}</span>
            </div>
            <input
              type="range" min="3" max="60" value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
              style={{ accentColor: "var(--theme-primary)" }}
            />
            <div className="flex justify-between text-xs mt-2 font-[family-name:var(--font-heebo)]" style={{ color: "var(--theme-text-muted)", opacity: 0.5 }}>
              <span>3 חודשים</span><span>שנה</span><span>שנתיים</span><span>5 שנים</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 rounded-2xl p-5 text-center">
              <TrendingDown className="w-6 h-6 mx-auto mb-2" style={{ color: "var(--theme-primary)" }} />
              <p className="text-sm mb-1 font-[family-name:var(--font-heebo)]" style={{ color: "var(--theme-text-muted)" }}>חיסכון חודשי</p>
              <p className="font-[family-name:var(--font-heebo)] font-black text-2xl text-white">{monthlySaving} ש״ח</p>
            </div>
            <div className="rounded-2xl p-5 text-center" style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)", border: "1px solid color-mix(in srgb, var(--theme-primary) 20%, transparent)" }}>
              <Calculator className="w-6 h-6 mx-auto mb-2" style={{ color: "var(--theme-primary)" }} />
              <p className="text-sm mb-1 font-[family-name:var(--font-heebo)]" style={{ color: "var(--theme-text-muted)" }}>סה״כ חיסכון</p>
              <motion.p key={grandTotal} initial={{ scale: 1.2 }} animate={{ scale: 1 }} className="font-[family-name:var(--font-heebo)] font-black text-3xl" style={{ color: "var(--theme-primary)" }}>
                {grandTotal.toLocaleString()} ש״ח
              </motion.p>
            </div>
          </div>

          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={scrollToCheckout}
            className="w-full cta-glow text-white font-[family-name:var(--font-heebo)] font-bold text-lg py-4 rounded-2xl transition-all duration-300 cursor-pointer"
            style={{ backgroundColor: "var(--theme-primary)" }}
          >
            אני רוצה לחסוך {grandTotal.toLocaleString()} ש״ח
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
