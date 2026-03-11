"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  Flame,
  Crown,
  Brain,
  Clock,
  Dumbbell,
  Battery,
  Heart,
  Target,
  Waves,
  Zap,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  Wallet: <Wallet className="w-8 h-8" />,
  Flame: <Flame className="w-8 h-8" />,
  Crown: <Crown className="w-8 h-8" />,
  Brain: <Brain className="w-8 h-8" />,
  Clock: <Clock className="w-8 h-8" />,
  Dumbbell: <Dumbbell className="w-8 h-8" />,
  Battery: <Battery className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  Target: <Target className="w-8 h-8" />,
  Waves: <Waves className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
};

export default function VossBlock() {
  const { content } = useTheme();
  const questions = content.voss.questions;

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent to-transparent"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, var(--theme-primary) 30%, transparent)`,
          opacity: 0.3,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]"
            style={{ color: "var(--theme-primary)" }}
          >
            {content.voss.headerAccent}
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            {content.voss.headerTitle}
          </h2>
        </motion.div>

        <div className="space-y-6">
          {questions.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div
                className="relative border rounded-3xl p-8 sm:p-10 overflow-hidden backdrop-blur-sm transition-all duration-500"
                style={{
                  backgroundImage:
                    i % 2 === 0
                      ? `linear-gradient(to bottom right, color-mix(in srgb, var(--theme-primary) 20%, transparent), transparent)`
                      : `linear-gradient(to bottom right, color-mix(in srgb, var(--theme-accent) 20%, transparent), transparent)`,
                  borderColor: "var(--theme-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "color-mix(in srgb, var(--theme-primary) 20%, transparent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--theme-border)";
                }}
              >
                <div
                  className="absolute -top-2 -right-2 w-full h-full rounded-3xl -z-10 group-hover:top-0 group-hover:right-0 transition-all duration-500"
                  style={{
                    border: "1px solid color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                  }}
                />
                <div className="flex items-start gap-6">
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--theme-primary) 10%, transparent)",
                      color: "var(--theme-primary)",
                    }}
                    onMouseEnter={(e) => {
                      const group = e.currentTarget.closest(".group");
                      if (group?.matches(":hover")) {
                        e.currentTarget.style.backgroundColor =
                          "var(--theme-primary)";
                        e.currentTarget.style.color = "white";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "color-mix(in srgb, var(--theme-primary) 10%, transparent)";
                      e.currentTarget.style.color = "var(--theme-primary)";
                    }}
                  >
                    {iconMap[q.iconName] || <Wallet className="w-8 h-8" />}
                  </div>
                  <p className="font-[family-name:var(--font-heebo)] font-bold text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed pt-2">
                    {q.question}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
