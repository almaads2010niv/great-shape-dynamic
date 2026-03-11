"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  targetDate: string;
  label?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ targetDate, label }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculate = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };
    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) return null;

  const blocks = [
    { value: timeLeft.days, label: "ימים" },
    { value: timeLeft.hours, label: "שעות" },
    { value: timeLeft.minutes, label: "דקות" },
    { value: timeLeft.seconds, label: "שניות" },
  ];

  return (
    <div className="flex flex-col items-center gap-3">
      {label && (
        <p className="text-sm font-semibold tracking-wider font-[family-name:var(--font-heebo)] uppercase" style={{ color: "var(--theme-primary)" }}>
          {label}
        </p>
      )}
      <div className="flex gap-3 sm:gap-4 direction-ltr" dir="ltr">
        {blocks.map((block) => (
          <div key={block.label} className="flex flex-col items-center">
            <motion.div
              key={block.value}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(to bottom, var(--theme-bg-card), var(--theme-bg-card-alt))",
                border: "1px solid var(--theme-border)",
              }}
            >
              <div
                className="absolute top-0 left-2 right-2 h-[2px]"
                style={{ background: `linear-gradient(to right, transparent, var(--theme-primary), transparent)` }}
              />
              <span className="font-[family-name:var(--font-heebo)] font-black text-2xl sm:text-3xl text-white counter-number">
                {String(block.value).padStart(2, "0")}
              </span>
            </motion.div>
            <span className="text-xs mt-2 font-[family-name:var(--font-heebo)]" style={{ color: "var(--theme-text-muted)" }}>
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
