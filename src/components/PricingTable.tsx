"use client";

import { motion } from "framer-motion";
import { X, Check, Star, ArrowDown } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function PricingTable() {
  const { content } = useTheme();

  if (!content.showSections.pricingTable) return null;

  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--theme-bg), var(--theme-bg-card-alt), var(--theme-bg))" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]" style={{ color: "var(--theme-primary)" }}>
            השוואה שמדברת בעד עצמה
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            תעשו את <span className="text-gradient-primary">החשבון</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Regular Path */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="h-full rounded-3xl p-8 sm:p-10 opacity-60" style={{ backgroundColor: "color-mix(in srgb, var(--theme-bg-card) 50%, transparent)", border: "1px solid var(--theme-border)" }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"><X className="w-5 h-5 text-gray-500" /></div>
                <h3 className="font-[family-name:var(--font-heebo)] font-bold text-xl text-gray-400">המסלול הרגיל</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-gray-500 text-sm">מחיר חודשי</span>
                  <p className="font-[family-name:var(--font-heebo)] font-black text-4xl text-gray-400 line-through decoration-2" style={{ textDecorationColor: "color-mix(in srgb, var(--theme-primary) 50%, transparent)" }}>419 ש״ח</p>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <span className="text-gray-500 text-sm">דמי רישום</span>
                  <p className="font-[family-name:var(--font-heebo)] font-bold text-2xl text-gray-400 line-through decoration-2" style={{ textDecorationColor: "color-mix(in srgb, var(--theme-primary) 50%, transparent)" }}>150 ש״ח</p>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <span className="text-gray-500 text-sm">חודש ראשון</span>
                  <p className="font-[family-name:var(--font-heebo)] font-bold text-2xl text-gray-400 line-through decoration-2" style={{ textDecorationColor: "color-mix(in srgb, var(--theme-primary) 50%, transparent)" }}>419 ש״ח</p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <span className="text-gray-600 text-sm">סה״כ לשנה הראשונה</span>
                  <p className="font-[family-name:var(--font-heebo)] font-black text-3xl text-gray-400 line-through decoration-2" style={{ textDecorationColor: "color-mix(in srgb, var(--theme-primary) 50%, transparent)" }}>5,178 ש״ח</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* VIP Path */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="h-full rounded-3xl p-8 sm:p-10 relative overflow-hidden" style={{ background: "linear-gradient(to bottom right, var(--theme-bg-card), var(--theme-bg-card-alt))", border: "2px solid color-mix(in srgb, var(--theme-primary) 40%, transparent)" }}>
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px]" style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 20%, transparent)" }} />
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                  <div className="flex items-center gap-2 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full font-[family-name:var(--font-heebo)]" style={{ backgroundColor: "var(--theme-primary)", boxShadow: "0 4px 12px color-mix(in srgb, var(--theme-primary) 30%, transparent)" }}>
                    <Star className="w-3.5 h-3.5 fill-current" />מסלול VIP
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full font-[family-name:var(--font-heebo)]">ללא התחייבות!</div>
                </div>
                <div className="flex items-center gap-3 mb-8 justify-center">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 20%, transparent)" }}>
                    <Check className="w-5 h-5" style={{ color: "var(--theme-primary)" }} />
                  </div>
                  <h3 className="font-[family-name:var(--font-heebo)] font-bold text-xl text-white">מסלול ה-VIP</h3>
                </div>
                <div className="space-y-6">
                  <div className="rounded-2xl p-5 -mx-2" style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)", border: "1px solid color-mix(in srgb, var(--theme-primary) 20%, transparent)" }}>
                    <span className="text-base font-bold font-[family-name:var(--font-heebo)]" style={{ color: "var(--theme-primary)" }}>חודש ראשון</span>
                    <div className="flex items-baseline gap-3 justify-center">
                      <p className="font-[family-name:var(--font-heebo)] font-black text-7xl sm:text-8xl text-white">1</p>
                      <span className="text-3xl text-white font-bold">ש״ח</span>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: "var(--theme-primary)" }}>בלבד!</span>
                  </div>
                  <div className="h-px" style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 20%, transparent)" }} />
                  <div className="text-center">
                    <span className="text-sm" style={{ color: "var(--theme-text-muted)" }}>דמי רישום ושריון:</span>
                    <p className="font-[family-name:var(--font-heebo)] font-bold text-2xl text-white mt-1">150 ש״ח</p>
                  </div>
                  <div className="h-px" style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 20%, transparent)" }} />
                  <div>
                    <span className="text-sm" style={{ color: "var(--theme-text-muted)" }}>מחיר חודשי מוזל</span>
                    <div className="flex items-baseline gap-2 justify-center">
                      <p className="font-[family-name:var(--font-heebo)] font-black text-4xl text-white">249</p>
                      <span className="text-xl text-white font-bold">ש״ח</span>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: "var(--theme-primary)" }}>במקום 419 ש״ח מחירון</span>
                  </div>
                  <div className="mt-6 pt-6" style={{ borderTop: "1px solid color-mix(in srgb, var(--theme-primary) 20%, transparent)" }}>
                    <div className="rounded-2xl p-4 text-center" style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)" }}>
                      <span className="text-sm font-semibold block mb-1" style={{ color: "var(--theme-primary)" }}>החיסכון שלכם</span>
                      <p className="font-[family-name:var(--font-heebo)] font-black text-3xl text-white">2,458 ש״ח</p>
                      <span className="text-sm" style={{ color: "var(--theme-text-muted)" }}>בשנה הראשונה</span>
                    </div>
                  </div>
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={scrollToCheckout}
                  className="w-full mt-8 cta-glow text-white font-[family-name:var(--font-heebo)] font-bold text-lg py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  style={{ backgroundColor: "var(--theme-primary)" }}
                >
                  <span>שריינו לי את ההטבה</span>
                  <ArrowDown className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
