"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Users, Sparkles } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
  delay: number;
}

function AnimatedCounter({ end, suffix = "", label, icon, delay }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, end, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="relative group"
    >
      <div
        className="relative rounded-3xl p-8 sm:p-10 text-center overflow-hidden card-lift"
        style={{
          background: "linear-gradient(to bottom right, var(--theme-bg-card), var(--theme-bg-card-alt))",
          border: "1px solid var(--theme-border)",
        }}
      >
        <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[60px]" style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 5%, transparent)" }} />
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5" style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 10%, transparent)", color: "var(--theme-primary)" }}>
          {icon}
        </div>
        <div className="font-[family-name:var(--font-heebo)] font-black text-5xl sm:text-6xl text-white mb-3 counter-number">
          {count.toLocaleString()}
          <span style={{ color: "var(--theme-primary)" }}>{suffix}</span>
        </div>
        <p className="font-[family-name:var(--font-heebo)] font-medium text-lg" style={{ color: "var(--theme-text-muted)" }}>
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export default function SocialProof() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--theme-bg), var(--theme-bg-card-alt), var(--theme-bg))" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px]" style={{ backgroundColor: "color-mix(in srgb, var(--theme-primary) 3%, transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl text-center mb-4">
          למה <span className="text-gradient-primary">קאנטרי גרייט שייפ</span> זה הבית?
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center mb-16 text-lg" style={{ color: "var(--theme-text-muted)" }}>
          המספרים מדברים בעד עצמם
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <AnimatedCounter end={16} suffix="+" label="שנות מצוינות" icon={<Calendar className="w-7 h-7" />} delay={0} />
          <AnimatedCounter end={5000} suffix="+" label="לקוחות פעילים באזור" icon={<Users className="w-7 h-7" />} delay={200} />
          <AnimatedCounter end={12} label="שדרוגים במתחם השנה" icon={<Sparkles className="w-7 h-7" />} delay={400} />
        </div>
      </div>
    </section>
  );
}
