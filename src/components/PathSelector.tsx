"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";
import type { ThemePath } from "@/components/ThemeProvider";

const paths: {
  id: ThemePath;
  emoji: string;
  title: string;
  subtitle: string;
  color: string;
  borderColor: string;
}[] = [
  {
    id: "routine",
    emoji: "/emoji/routine.png",
    title: "רוצה לחזור לשגרה",
    subtitle: "חיכית לתירוץ מספיק טוב — הנה הוא",
    color: "#E60000",
    borderColor: "rgba(230, 0, 0, 0.4)",
  },
  {
    id: "relax",
    emoji: "/emoji/relax.png",
    title: "צריך לנשום רגע",
    subtitle: "בריכה, סאונה, ג׳קוזי — הכל מחכה לך",
    color: "#2A9D8F",
    borderColor: "rgba(42, 157, 143, 0.4)",
  },
  {
    id: "athlete",
    emoji: "/emoji/athlete.png",
    title: "מחפש מקום להתאמן ברצינות",
    subtitle: "ציוד מקצועי, בריכה אולימפית, בלי פשרות",
    color: "#FF2D2D",
    borderColor: "rgba(255, 45, 45, 0.4)",
  },
];

export default function PathSelector() {
  const { setActivePath } = useTheme();
  const [selected, setSelected] = useState<ThemePath | null>(null);
  const [exiting, setExiting] = useState(false);

  const handleSelect = (pathId: ThemePath) => {
    setSelected(pathId);
    setExiting(true);
    // Wait for animation before actually setting
    setTimeout(() => {
      setActivePath(pathId);
    }, 600);
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
          style={{ backgroundColor: "#0A0A0A" }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Image
              src="/images/logo.png"
              alt="קאנטרי גרייט שייפ נשר"
              width={180}
              height={60}
              className="mx-auto"
              priority
            />
          </motion.div>

          {/* Question */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold text-white text-center mb-2"
            style={{ fontFamily: "var(--font-heebo)" }}
          >
            מה הכי מתחבר אליך עכשיו?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm md:text-base text-center mb-10"
            style={{ color: "#999" }}
          >
            בחר את המסלול שלך — הדף כולו ישתנה בשבילך
          </motion.p>

          {/* Path Cards */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-3xl">
            {paths.map((path, index) => (
              <motion.button
                key={path.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.04,
                  borderColor: path.color,
                  boxShadow: `0 0 30px ${path.borderColor}`,
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelect(path.id)}
                className={`
                  flex-1 flex flex-col items-center gap-3 p-6 md:p-8
                  rounded-2xl cursor-pointer transition-all duration-300
                  border-2 text-center
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
                      : "rgba(255,255,255,0.08)",
                }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 relative">
                  <Image
                    src={path.emoji}
                    alt={path.title}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>

                <h3
                  className="text-lg md:text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-heebo)" }}
                >
                  {path.title}
                </h3>

                <p className="text-sm" style={{ color: "#999" }}>
                  {path.subtitle}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Subtle bottom hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8 text-xs"
            style={{ color: "#666" }}
          >
            אפשר לשנות בכל רגע
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
