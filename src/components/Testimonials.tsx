"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { masterTestimonials } from "@/config/themes";

export default function Testimonials() {
  const { content } = useTheme();
  const testimonialsToShow = content.testimonials.indices.map(
    (i) => masterTestimonials[i]
  );

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--theme-bg), #0C0C0C, var(--theme-bg))`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
            מה אומרים עלינו
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            לקוחות <span className="text-gradient-primary">ממליצים</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-[#FBBC04] fill-[#FBBC04]"
                />
              ))}
            </div>
            <span className="text-gray-400 text-sm">מתוך Google Reviews</span>
          </div>
        </motion.div>

        {/* Testimonials grid - asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonialsToShow.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative border rounded-3xl p-7 transition-all duration-500 group ${
                i === 1 ? "lg:translate-y-8" : ""
              } ${i === 3 ? "lg:translate-y-[-16px]" : ""}`}
              style={{
                backgroundImage:
                  i % 2 === 0
                    ? `linear-gradient(to bottom right, color-mix(in srgb, var(--theme-primary) 20%, transparent), color-mix(in srgb, var(--theme-bg-card) 50%, transparent))`
                    : `linear-gradient(to bottom right, color-mix(in srgb, var(--theme-accent) 20%, transparent), color-mix(in srgb, var(--theme-bg-card) 50%, transparent))`,
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
              {/* Quote icon */}
              <Quote
                className="w-8 h-8 mb-4 transition-colors"
                style={{
                  color: "color-mix(in srgb, var(--theme-primary) 20%, transparent)",
                }}
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-[#FBBC04] fill-[#FBBC04]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 leading-relaxed mb-5 text-[15px]">
                {t.text}
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-4"
                style={{
                  borderTop: "1px solid var(--theme-border)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--theme-primary) 20%, transparent)",
                  }}
                >
                  <span
                    className="font-[family-name:var(--font-heebo)] font-bold text-sm"
                    style={{ color: "var(--theme-primary)" }}
                  >
                    {t.initial || t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heebo)] font-bold text-white text-sm">
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-xs">{t.reviews}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
