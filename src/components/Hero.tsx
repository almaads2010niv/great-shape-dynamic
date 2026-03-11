"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Countdown from "./Countdown";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";

export default function Hero() {
  const { content } = useTheme();

  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <Image
          src={content.hero.backgroundImage}
          alt="Great Shape Country Club"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[var(--theme-bg)]" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[var(--theme-primary)]/10 to-transparent skew-x-[-12deg] origin-top-left" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/images/logo.png"
            alt="Great Shape"
            width={180}
            height={180}
            className="mx-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 150,
            damping: 15,
          }}
          className="mb-6 perspective-[1000px]"
        >
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-primary-light)] to-[var(--theme-primary)] rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity" />
            <div
              className={`relative ${content.hero.badgeGlow ? "march-badge-glow" : ""} bg-gradient-to-br from-[var(--theme-primary)] via-[var(--theme-primary-dark)] to-[var(--theme-primary-dark)] rounded-2xl px-8 sm:px-10 py-5 border border-white/20 overflow-hidden`}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                  className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                />
              </div>

              {/* Sparkle animations — only when badgeGlow is true */}
              {content.hero.badgeGlow && (
                <>
                  <motion.span
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-2 right-4 text-yellow-300 text-lg"
                  >
                    ✦
                  </motion.span>
                  <motion.span
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                      rotate: [0, -180, -360],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
                    className="absolute bottom-2 left-6 text-yellow-300 text-sm"
                  >
                    ✦
                  </motion.span>
                </>
              )}

              <div className="relative z-10">
                <span className="font-[family-name:var(--font-heebo)] font-black text-2xl sm:text-3xl text-white drop-shadow-lg">
                  {content.hero.badge}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info badges */}
        {content.hero.infoBadges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {content.hero.infoBadges.map((badge, i) => (
              <span
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-[var(--theme-border)] rounded-[var(--theme-radius)] px-4 py-2 text-sm font-[family-name:var(--font-heebo)] text-white/90"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        )}

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-[family-name:var(--font-heebo)] font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight"
          style={{ fontWeight: "var(--theme-heading-weight)" }}
        >
          {content.hero.headline}
          <br />
          <span className="text-gradient-primary">
            {content.hero.highlightedText}
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-[family-name:var(--font-heebo)] text-xl sm:text-2xl text-white/80 mb-4"
        >
          {content.hero.subHeadline}
        </motion.p>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-[family-name:var(--font-assistant)] text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {content.hero.bodyCopy}
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-10"
        >
          <Countdown
            targetDate={content.countdown.targetDate}
            label={content.countdown.label}
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToCheckout}
            className="bg-[var(--theme-primary)] hover:bg-[var(--theme-primary-light)] text-white font-[family-name:var(--font-heebo)] font-bold text-lg sm:text-xl px-10 py-4 rounded-[var(--theme-radius)] transition-all cursor-pointer cta-glow"
          >
            {content.hero.ctaText}
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-white/40 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
