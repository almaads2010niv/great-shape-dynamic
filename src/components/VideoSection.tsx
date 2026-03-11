"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

export default function VideoSection() {
  const { content } = useTheme();

  if (!content.showSections.video) return null;

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--theme-bg), var(--theme-bg-card-alt), var(--theme-bg))" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="inline-block text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]" style={{ color: "var(--theme-primary)" }}>
            תראו בעצמכם
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl">
            הכירו מחדש את <span className="text-gradient-primary">קאנטרי גרייט שייפ</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-black/50"
          style={{ border: "1px solid var(--theme-border)" }}
        >
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/spB_PgrKPU8?autoplay=1&mute=1&loop=1&playlist=spB_PgrKPU8&playsinline=1&controls=0&rel=0"
              title="קאנטרי גרייט שייפ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="absolute top-0 right-0 w-24 h-1 z-10" style={{ backgroundColor: "var(--theme-primary)" }} />
          <div className="absolute top-0 right-0 w-1 h-24 z-10" style={{ backgroundColor: "var(--theme-primary)" }} />
          <div className="absolute bottom-0 left-0 w-24 h-1 z-10" style={{ backgroundColor: "var(--theme-primary)" }} />
          <div className="absolute bottom-0 left-0 w-1 h-24 z-10" style={{ backgroundColor: "var(--theme-primary)" }} />
        </motion.div>
      </div>
    </section>
  );
}
