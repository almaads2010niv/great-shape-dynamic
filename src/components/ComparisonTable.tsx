"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const rows = [
  { feature: "בריכה מקורה מחוממת", us: true, others: true },
  { feature: "חדר כושר מאובזר", us: true, others: true },
  { feature: "סאונה + ג׳קוזי", us: true, others: false },
  { feature: "בריכה חיצונית (קיץ)", us: true, others: false },
  { feature: "סטודיו שיעורים", us: true, others: true },
  { feature: "חודש ראשון ב-1 ש״ח", us: true, others: false },
  { feature: "מחיר קבוע ל-5 שנים", us: true, others: false },
  { feature: "ללא התחייבות", us: true, others: false },
  { feature: "החזר מלא תוך 14 יום", us: true, others: false },
];

export default function ComparisonTable() {
  const { content } = useTheme();

  if (!content.showSections.comparisonTable) return null;

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--theme-bg), var(--theme-bg-card-alt), var(--theme-bg))" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]" style={{ color: "var(--theme-primary)" }}>
            מה מקבלים פה שלא מקבלים שם?
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            <span className="text-gradient-primary">גרייט שייפ</span> מול המתחרים
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] overflow-hidden"
          style={{ border: "1px solid var(--theme-border)" }}
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-0">
            <div className="p-4 sm:p-5" style={{ backgroundColor: "var(--theme-bg-card)" }} />
            <div className="p-4 sm:p-5 text-center" style={{ backgroundColor: "var(--theme-primary)" }}>
              <span className="text-white text-sm sm:text-base font-[family-name:var(--font-heebo)] font-bold">גרייט שייפ VIP</span>
            </div>
            <div className="p-4 sm:p-5 text-center" style={{ backgroundColor: "var(--theme-bg-card)" }}>
              <span className="text-sm sm:text-base font-[family-name:var(--font-heebo)] font-bold" style={{ color: "var(--theme-text-muted)" }}>מכונים אחרים</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-3 gap-0" style={{ borderTop: "1px solid var(--theme-border)" }}>
              <div className="p-4 sm:p-5 flex items-center" style={{ backgroundColor: i % 2 === 0 ? "var(--theme-bg-card)" : "var(--theme-bg-card-alt)" }}>
                <span className="text-white text-sm font-[family-name:var(--font-heebo)]">{row.feature}</span>
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-center" style={{ backgroundColor: i % 2 === 0 ? "color-mix(in srgb, var(--theme-primary) 8%, transparent)" : "color-mix(in srgb, var(--theme-primary) 5%, transparent)" }}>
                {row.us ? <Check className="w-5 h-5" style={{ color: "var(--theme-primary)" }} /> : <X className="w-5 h-5 text-gray-600" />}
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-center" style={{ backgroundColor: i % 2 === 0 ? "var(--theme-bg-card)" : "var(--theme-bg-card-alt)" }}>
                {row.others ? <Check className="w-5 h-5 text-gray-500" /> : <X className="w-5 h-5 text-gray-700" />}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
