"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function GuiltRelease() {
  const { content } = useTheme();

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Subtle warm gradient background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--theme-bg), #0D0A08, var(--theme-bg))`,
        }}
      />

      {/* Soft accent ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px]"
        style={{
          backgroundColor: "color-mix(in srgb, var(--theme-accent) 5%, transparent)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Heart icon */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8"
            style={{
              backgroundColor: "color-mix(in srgb, var(--theme-accent) 10%, transparent)",
              borderColor: "color-mix(in srgb, var(--theme-accent) 20%, transparent)",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          >
            <Heart
              className="w-8 h-8"
              style={{ color: "var(--theme-accent)" }}
            />
          </motion.div>

          {/* Horizontal rule accent */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div
              className="h-px w-12"
              style={{
                backgroundImage: `linear-gradient(to left, color-mix(in srgb, var(--theme-accent) 40%, transparent), transparent)`,
              }}
            />
            <span
              className="text-xs font-bold tracking-[0.3em] font-[family-name:var(--font-heebo)]"
              style={{ color: "var(--theme-accent)" }}
            >
              {content.guilt.headerAccent}
            </span>
            <div
              className="h-px w-12"
              style={{
                backgroundImage: `linear-gradient(to right, color-mix(in srgb, var(--theme-accent) 40%, transparent), transparent)`,
              }}
            />
          </div>

          {/* Main text - paragraphs from content */}
          <div className="font-[family-name:var(--font-assistant)] text-xl sm:text-2xl text-gray-300 leading-[1.8] sm:leading-[1.9]">
            {content.guilt.paragraphs.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "text-white font-semibold" : ""}>
                {paragraph}
                {i < content.guilt.paragraphs.length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </p>
            ))}

            {/* Highlighted messages */}
            {content.guilt.highlightedMessages.length > 0 && (
              <div className="mt-6">
                {content.guilt.highlightedMessages.map((msg, i) => (
                  <p key={i} className="text-white font-medium">
                    {msg}
                  </p>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
