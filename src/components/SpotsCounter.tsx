"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function SpotsCounter() {
  const [totalSpots, setTotalSpots] = useState(50);
  const [takenSpots, setTakenSpots] = useState(0);

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const res = await fetch("/api/spots");
        const data = await res.json();
        setTotalSpots(data.totalSpots || 50);
        setTakenSpots(data.takenSpots || 0);
      } catch {
        // Fallback
      }
    };
    fetchSpots();
    const interval = setInterval(fetchSpots, 120000);
    return () => clearInterval(interval);
  }, []);

  const remainingSpots = totalSpots - takenSpots;
  const percentage = (takenSpots / totalSpots) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex flex-col items-center gap-3 rounded-2xl px-6 py-4 backdrop-blur-sm"
      style={{
        backgroundColor: "color-mix(in srgb, var(--theme-bg-card) 80%, transparent)",
        border: "1px solid var(--theme-border)",
      }}
    >
      <div className="flex items-center gap-2">
        <Flame className="w-4 h-4 animate-pulse" style={{ color: "var(--theme-primary)" }} />
        <span className="font-[family-name:var(--font-heebo)] font-bold text-white text-sm">
          נשארו{" "}
          <span className="text-lg" style={{ color: "var(--theme-primary)" }}>{remainingSpots}</span> מקומות
          מתוך {totalSpots}
        </span>
      </div>
      <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(to left, var(--theme-primary), var(--theme-primary-light))` }}
        />
      </div>
    </motion.div>
  );
}
