"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";
import { masterFacilities } from "@/config/themes";

export default function FacilitiesGallery() {
  const { content } = useTheme();

  const highlighted: string[] =
    (content.facilities as { highlighted?: string[] }).highlighted ??
    [content.facilities.prominentId];

  // Order facilities according to the theme config
  const orderedFacilities = content.facilities.order
    .map((id) => masterFacilities.find((f) => f.id === id))
    .filter(Boolean) as typeof masterFacilities;

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--theme-bg)] via-[#080808] to-[var(--theme-bg)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[var(--theme-primary)] text-sm font-bold tracking-widest mb-4 font-[family-name:var(--font-heebo)]">
            מתחם ברמה אחרת
          </span>
          <h2 className="font-[family-name:var(--font-heebo)] font-black text-3xl sm:text-4xl md:text-5xl">
            הציצו <span className="text-gradient-primary">פנימה</span>
          </h2>
        </motion.div>

        {/* Horizontal scroll gallery */}
        <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          {orderedFacilities.map((item, i) => {
            const isHighlighted = highlighted.includes(item.id);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl overflow-hidden group snap-start flex-shrink-0 ${
                  isHighlighted
                    ? "w-[340px] sm:w-[420px] h-[400px] sm:h-[460px]"
                    : "w-[240px] sm:w-[280px] h-[320px] sm:h-[360px]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.55] group-hover:brightness-[0.4]"
                />

                {/* Content overlay -- always visible */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  {/* Facility label */}
                  <h3 className="font-[family-name:var(--font-heebo)] font-bold text-lg sm:text-xl text-white mb-1">
                    {item.label}
                  </h3>

                  {/* Emotional description */}
                  {item.emotion && isHighlighted && (
                    <p className="font-[family-name:var(--font-assistant)] text-[13px] sm:text-sm text-white/75 leading-relaxed max-w-md">
                      {item.emotion}
                    </p>
                  )}
                </div>

                {/* Accent dot */}
                <div
                  className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "var(--theme-primary)" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
