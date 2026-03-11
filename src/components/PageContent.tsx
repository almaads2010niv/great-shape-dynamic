"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

interface PageContentProps {
  children: React.ReactNode;
}

export default function PageContent({ children }: PageContentProps) {
  const { activePath } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activePath}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
