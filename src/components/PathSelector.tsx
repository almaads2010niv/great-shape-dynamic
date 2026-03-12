"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";
import type { ThemePath } from "@/components/ThemeProvider";

const paths: {
  id: ThemePath;
  image: string;
  title: string;
  subtitle: string;
  color: string;
  borderColor: string;
  glowColor: string;
}[] = [
  {
    id: "routine",
    image: "/images/gym1.jpg",
    title: "רוצה לחזור לשגרה",
    subtitle: "חיכית לתירוץ מספיק טוב — הנה הוא",
    color: "#E60000",
    borderColor: "rgba(230, 0, 0, 0.4)",
    glowColor: "rgba(230, 0, 0, 0.3)",
  },
  {
    id: "relax",
    image: "/images/sauna.jpg",
    title: "צריך לנשום רגע",
    subtitle: "בריכה, סאונה, ג׳קוזי — הכל מחכה לך",
    color: "#2A9D8F",
    borderColor: "rgba(42, 157, 143, 0.4)",
    glowColor: "rgba(42, 157, 143, 0.3)",
  },
  {
    id: "athlete",
    image: "/images/pool-indoor.jpg",
    title: "מחפש מקום להתאמן ברצינות",
    subtitle: "ציוד מקצועי, בריכה אולימפית, בלי פשרות",
    color: "#FF2D2D",
    borderColor: "rgba(255, 45, 45, 0.4)",
    glowColor: "rgba(255, 45, 45, 0.3)",
  },
];

export default function PathSelector() {
  const { setActivePath } = useTheme();
  const [selected, setSelected] = useState<ThemePath | null>(null);
  const [exiting, setExiting] = useState(false);

  const handleSelect = (pathId: ThemePath) => {
    setSelected(pathId);
    setExiting(true);
    setTimeout(() => {
      setActivePath(pathId);
    }, 350);
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#000" }}
        >
          {/* === Welcome Background: Single image per diagonal section using CSS === */}

          {/* Photo 1 — Gym */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/images/gym1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "polygon(0 0, 40% 0, 25% 100%, 0 100%)",
            }}
          />

          {/* Photo 2 — Sauna */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/images/sauna.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "polygon(40% 0, 73% 0, 58% 100%, 25% 100%)",
            }}
          />

          {/* Photo 3 — Pool */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/images/pool-indoor.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "polygon(73% 0, 100% 0, 100% 100%, 58% 100%)",
            }}
          />

          {/* Diagonal line accents */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(100deg, transparent 24.5%, rgba(255,255,255,0.12) 24.5%, rgba(255,255,255,0.12) 25.5%, transparent 25.5%, transparent 57.5%, rgba(255,255,255,0.12) 57.5%, rgba(255,255,255,0.12) 58.5%, transparent 58.5%)",
            }}
          />

          {/* Fade overlay — like original Hero */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.7) 100%)",
            }}
          />

          {/* === Content === */}
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mb-6"
            >
              <Image
                src="/images/logo.png"
                alt="קאנטרי גרייט שייפ נשר"
                width={200}
                height={66}
                className="mx-auto"
                priority
              />
            </motion.div>

            {/* Question */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="text-2xl md:text-4xl font-bold text-white text-center mb-2"
              style={{ fontFamily: "var(--font-heebo)", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
            >
              מה הכי מתחבר אליך עכשיו?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="text-sm md:text-base text-center mb-10"
              style={{ color: "rgba(255,255,255,0.7)", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
            >
              בחר את המסלול שלך — הדף כולו ישתנה בשבילך
            </motion.p>

            {/* === Path Cards with Photos === */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-5 w-full">
              {paths.map((path, index) => (
                <motion.button
                  key={path.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.15 + index * 0.06,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.03,
                    borderColor: path.color,
                    boxShadow: `0 0 25px ${path.glowColor}`,
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleSelect(path.id)}
                  className={`
                    flex-1 flex flex-col items-center gap-0
                    rounded-2xl cursor-pointer
                    border-2 text-center overflow-hidden
                    transition-[transform,opacity] duration-200
                    ${
                      selected === path.id
                        ? "scale-105 z-10"
                        : selected
                          ? "opacity-30 scale-95"
                          : ""
                    }
                  `}
                  style={{
                    backgroundColor: "#1A1A1A",
                    borderColor:
                      selected === path.id
                        ? path.color
                        : "rgba(255,255,255,0.1)",
                  }}
                >
                  {/* Card Photo */}
                  <div className="relative w-full h-32 md:h-40 overflow-hidden">
                    <Image
                      src={path.image}
                      alt={path.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Photo gradient fade to card bg */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A]" />
                  </div>

                  {/* Card Text */}
                  <div className="px-4 pb-5 pt-2 flex flex-col items-center gap-2">
                    <h3
                      className="text-lg md:text-xl font-bold text-white leading-tight"
                      style={{ fontFamily: "var(--font-heebo)" }}
                    >
                      {path.title}
                    </h3>
                    <p className="text-sm leading-snug" style={{ color: "#999" }}>
                      {path.subtitle}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Bottom hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="mt-8 text-xs"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              אפשר לשנות בכל רגע
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
